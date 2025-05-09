/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { createContext, useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import useAuth from '@/hooks/api/useAuth'
import useTour from '@/hooks/api/useTour'
import { BASE_TRAVELERS, IPassengerType, PassengerDetails, TravelerType } from './types'
import { ITour } from '@/types/entities/Tour'
import { IUser } from '@/types/entities/User'
import { calculateTotalPrice, StackError } from './helper'
import { v4 as uuidv4 } from 'uuid'
import useBooking from '@/hooks/api/useBooking'
import { ITourSchedule } from '@/types/entities/TourSchedule'

interface IBookingContextType {
  travelers: TravelerType[]
  updateTravelerCount: (id: number, increment: boolean) => void
  tour: Partial<ITour>
  me: Partial<IUser>
  quantity: number
  discount: number
  totalBeforeDiscount: number
  totalAfterDiscount: number
  validate: StackError<any>
  resultListPassengers?: IPassengerType[]
  passengerDetails: PassengerDetails[]
  isFullFillSubmit: boolean
  setValidate: (errors: any[]) => void
  updatePassengerDetails: (details: PassengerDetails) => void
  handleCreateBooking: (tourSchedule: ITourSchedule, userAddress: string) => void
}

export const BookingContext = createContext<IBookingContextType>({
  travelers: BASE_TRAVELERS,
  updateTravelerCount: () => {},
  tour: {},
  me: {},
  quantity: 1,
  discount: 0,
  totalBeforeDiscount: 0,
  totalAfterDiscount: 0,
  resultListPassengers: [],
  validate: new StackError([]),
  isFullFillSubmit: false,
  passengerDetails: [],
  updatePassengerDetails: () => {},
  setValidate: () => {},
  handleCreateBooking: () => {},
})

export function BookingFormProvider({ children }: { children: React.ReactNode }) {
  //TODO: global state
  const { tour, handleGetTourById } = useTour()
  const { handlePayment } = useBooking()
  const { me } = useAuth()
  const searchParams = useSearchParams()

  const tourId = searchParams.get('tourId')

  //TODO: State
  const stackErrors = new StackError<any>([])
  const [errors, setErrors] = useState(stackErrors)

  //TODO: travelerCounts => handle orderline
  const [listTravelerCounts, setListTravelerCounts] = useState<TravelerType[]>([])

  //TODO: travelers => handle
  const [travelers, setTravelers] = useState<TravelerType[]>(BASE_TRAVELERS)
  const [passengerDetails, setPassengerDetails] = useState<PassengerDetails[]>([])

  const [totalPrice, setTotalPrice] = useState<number>(0)
  const discount = 0
  const quantity = 0
  const totalBeforeDiscount = (tour?.tourScheduleResponses?.[0]?.adultPrice ?? 0) * quantity
  const totalAfterDiscount = totalBeforeDiscount - discount

  useEffect(() => {
    if (tourId) {
      handleGetTourById(tourId)
    }
  }, [tourId])

  const updateTravelerCount = (id: number, increment: boolean) => {
    setTravelers(
      travelers.map((traveler: TravelerType) => {
        if (traveler.id !== id) {
          return traveler
        }
        let newCount
        let passengerId
        if (increment) {
          newCount = traveler.count + 1
          _addPassenger?.(traveler)
        } else {
          newCount = traveler.count - 1
          _removePassenger?.(traveler)
        }
        return {
          ...traveler,
          passengerId,
          count: Math.max(traveler.minCount, newCount),
        }
      }),
    )
  }

  //TODO: handle passenger
  const updatePassengerDetails = (details: PassengerDetails) => {
    setPassengerDetails((prev) => {
      const existingIndex = prev.findIndex((p) => p.passengerId === details.passengerId)
      if (existingIndex >= 0) {
        const updated = [...prev]
        updated[existingIndex] = details
        return updated
      } else {
        return [...prev, details]
      }
    })
  }

  useEffect(() => {
    if (Array.isArray(listTravelerCounts) && listTravelerCounts.length > 0 && tour?.tourScheduleResponses) {
      setTotalPrice(calculateTotalPrice(listTravelerCounts, tour?.tourScheduleResponses?.[0]))
    }
  }, [listTravelerCounts])

  const _addPassenger = (traveler: TravelerType) => {
    const passengerId = uuidv4()
    setListTravelerCounts((prev) => [...prev, { ...traveler, passengerId, count: 1 }])
    setPassengerDetails((prev) => [
      ...prev,
      {
        passengerId,
        travelerTypeId: traveler.id,
        name: '',
        gender: '',
        dob: { day: '', month: '', year: '' },
        isSuccessSubmit: false,
      },
    ])
  }

  const _clearListPassengers = () => {
    setListTravelerCounts([])
    setTotalPrice(0)
    setPassengerDetails([])
  }
  const _removePassenger = (traveler: TravelerType) => {
    const data = listTravelerCounts.filter((pass) => pass.type === traveler.type) ?? []
    const data2 = listTravelerCounts.filter((pass) => pass.type !== traveler.type) ?? []
    if (data.length > 0) {
      const removedPassenger = data.pop()
      if (removedPassenger?.passengerId) {
        setPassengerDetails((prev) => prev.filter((p) => p.passengerId !== removedPassenger.passengerId))
      }
    }
    if (data.length === 0 && data2.length === 0) {
      _clearListPassengers()
      return
    }
    setListTravelerCounts([...data2, ...data])
  }

  useEffect(() => {}, [passengerDetails])

  //TODO Stack validate
  const setValidate = (newErrors: any[]) => {
    stackErrors.setStack(newErrors)
    setErrors(new StackError([...stackErrors.getStack()]))
  }

  //TODO: result handler to booking
  const handleCreateBooking = async (tourSchedule: ITourSchedule, userAddress: string) => {
    if (!tour?.tourScheduleResponses?.[0]?.tourScheduleId || !me?.fullName || !me?.phone || !me?.email) {
      setValidate([{ message: 'Missing required tour or user information' }])
      return
    }
    if (passengerDetails.length === 0 || !passengerDetails.every((p) => p.isSuccessSubmit)) {
      setValidate([{ message: 'Please complete all passenger details' }])
      return
    }
    const bookingData = {
      userFullName: me.fullName,
      userPhone: me.phone,
      userEmail: me.email,
      userAddress: userAddress,
      tourScheduleId: tourSchedule.tourScheduleId as string,
      note: 'Yêu cầu ghế gần cửa sổ',
      tickets: passengerDetails.map((passenger) => {
        const ticketTypeMap: { [key: number]: 'ADULT' | 'CHILD' | 'BABY' } = ['ADULT', 'CHILD', 'BABY']
        const priceMap: { [key: number]: number } = [
          tourSchedule.adultPrice || 0,
          tourSchedule.childPrice || 0,
          tourSchedule.babyPrice || 0,
        ]
        return {
          price: priceMap[passenger.travelerTypeId],
          status: 1,
          ticketType: ticketTypeMap[passenger.travelerTypeId],
          birthDate: `${passenger.dob.year}-${passenger.dob.month.padStart(2, '0')}-${passenger.dob.day.padStart(2, '0')}`,
          fullName: passenger.name,
          gender: passenger.gender as 'male' | 'female',
        }
      }),
    }

    const result = await handlePayment(bookingData, totalBeforeDiscount)
    if (result.paymentUrl) {
      window.location.href = result.paymentUrl
    } else {
      setValidate([{ message: result.error || 'Failed to process payment' }])
    }
  }
  return (
    <BookingContext.Provider
      value={{
        travelers,
        tour: tour ?? {},
        me: me ?? {},
        quantity: listTravelerCounts.length ?? 0,
        discount: 0,
        totalBeforeDiscount: totalPrice,
        totalAfterDiscount,
        validate: errors,
        isFullFillSubmit:
          passengerDetails.length > 0 && passengerDetails.every((pass) => pass.isSuccessSubmit === true),
        resultListPassengers: [],
        passengerDetails,
        handleCreateBooking,
        setValidate,
        updateTravelerCount,
        updatePassengerDetails,
      }}
    >
      {children}
    </BookingContext.Provider>
  )
}

export default BookingFormProvider
