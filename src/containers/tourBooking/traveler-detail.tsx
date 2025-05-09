/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { PassengerDetails, TravelerType } from '@/app/(dashboard)/tour-booking-form/context/types'
import { BookingContext } from '@/app/(dashboard)/tour-booking-form/context'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Calendar } from 'lucide-react'
import { useContext, useEffect, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { travelerValidationSchema } from '@/app/(dashboard)/tour-booking-form/context/validation.schema'
import { cn } from '@/utils'
import { Button } from '@/components/ui'

interface TravelerDetailsProps {
  traveler: TravelerType
  passengerId?: string
}

interface IPassengerType {
  name: string
  gender: string
  dob: {
    day: string
    month: string
    year: string
  }
}
const DEFAULT_PASSENGER = {
  name: '',
  gender: '',
  dob: {
    day: '',
    month: '',
    year: '',
  },
}

export function TravelerDetails({ traveler, passengerId }: TravelerDetailsProps) {
  const { validate, setValidate, updatePassengerDetails } = useContext(BookingContext)
  const currentYear = new Date().getFullYear()
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [showNotification, setShowNotification] = useState(false)

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<IPassengerType>({
    resolver: yupResolver(travelerValidationSchema(traveler)),
    defaultValues: DEFAULT_PASSENGER,
    mode: 'onChange',
  })

  const onSubmit = (value: any) => {
    if (isValid) {
      if (!validate.isEmpty()) {
        validate.deleteItem()
        setValidate([...validate.getStack()])
      }
      setIsSubmitted(true)
      setShowNotification(true)
      setTimeout(() => setShowNotification(false), 3000)

      const passengerId = traveler.passengerId + ''

      const passengerDetails: PassengerDetails = {
        passengerId,
        travelerTypeId: traveler.id,
        name: value.name,
        gender: value.gender,
        dob: value.dob,
        isSuccessSubmit: true,
      }

      updatePassengerDetails(passengerDetails)
    }
  }

  const handleUndo = () => {
    reset(DEFAULT_PASSENGER)
    setIsSubmitted(false)
    const emptyError = {
      travelerId: traveler.id,
      errors: { empty: { message: 'Vui lòng điền ít nhất một trường thông tin' } },
    }
    if (validate.getHead()?.travelerId !== traveler.id) {
      validate.addItem(emptyError)
      setValidate([...validate.getStack()])
    }
    updatePassengerDetails({
      ...DEFAULT_PASSENGER,
      passengerId: `${passengerId}`,
      travelerTypeId: traveler.id,
      isSuccessSubmit: false,
    })
  }

  useEffect(() => {
    if (!isValid && Object.keys(errors).length > 0) {
      const errorMessage = {
        travelerId: traveler.id,
        errors: errors,
      }
      if (validate.getHead()?.travelerId !== traveler.id) {
        validate.addItem(errorMessage)
        setValidate([...validate.getStack()])
      }
    }
  }, [errors, traveler.id])

  return (
    <Card key={passengerId} className="border shadow-sm">
      <CardContent className="p-4">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="flex items-center gap-2">
            {traveler.icon}
            <span className="font-medium">{traveler.name}</span>
            <span className="text-xs text-gray-500">({traveler.ageDescription})</span>
          </div>
          {showNotification && (
            <div className="animate-fade-in mb-4 rounded-md border-l-4 border-green-500 bg-green-100 p-2 text-green-700">
              Đã xác nhận thông tin hành khách thành công!
            </div>
          )}
          <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-4">
            {/* Name Field */}
            <div className="md:col-span-1">
              <Label htmlFor={`name-${traveler.id}`} className="mb-1 block text-sm">
                Họ tên <span className="text-red-500">*</span>
              </Label>
              <Controller
                name="name"
                control={control}
                render={({ field }) => <Input id={`name-${traveler.id}`} placeholder="Nhập họ tên" {...field} />}
              />
              {errors.name && <div className="mt-1 text-xs text-red-500">{errors.name.message}</div>}
            </div>
            {/* Gender Field */}
            <div className="md:col-span-1">
              <Label htmlFor={`gender-${traveler.id}`} className="mb-1 block text-sm">
                Giới tính <span className="text-red-500">*</span>
              </Label>
              <Controller
                name="gender"
                control={control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value || ''}>
                    <SelectTrigger id={`gender-${traveler.id}`}>
                      <SelectValue placeholder="Nam" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Nam</SelectItem>
                      <SelectItem value="female">Nữ</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.gender && <div className="mt-1 text-xs text-red-500">{errors.gender.message}</div>}
            </div>
            {/* Date of Birth Fields */}
            <div className="md:col-span-1">
              <Label htmlFor={`dob-${traveler.id}`} className="mb-1 block text-sm">
                Ngày sinh <span className="text-red-500">*</span>
              </Label>
              <div className="flex gap-2">
                {/* Day */}
                <div>
                  <Controller
                    name="dob.day"
                    control={control}
                    render={({ field }) => (
                      <Select onValueChange={field.onChange} value={field.value || ''}>
                        <SelectTrigger>
                          <SelectValue placeholder="Ngày" />
                        </SelectTrigger>
                        <SelectContent>
                          {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                            <SelectItem key={day} value={day.toString()}>
                              {day}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />
                  {errors.dob?.day && <div className="mt-1 text-xs text-red-500">{errors.dob.day.message}</div>}
                </div>
                {/* Month */}
                <div>
                  <Controller
                    name="dob.month"
                    control={control}
                    render={({ field }) => (
                      <Select onValueChange={field.onChange} value={field.value || ''}>
                        <SelectTrigger>
                          <SelectValue placeholder="Tháng" />
                        </SelectTrigger>
                        <SelectContent>
                          {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
                            <SelectItem key={month} value={month.toString()}>
                              {month}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />
                  {errors.dob?.month && <div className="mt-1 text-xs text-red-500">{errors.dob.month.message}</div>}
                </div>
                {/* Year */}
                <div>
                  <Controller
                    name="dob.year"
                    control={control}
                    render={({ field }) => (
                      <Select onValueChange={field.onChange} value={field.value || ''}>
                        <SelectTrigger>
                          <SelectValue placeholder="Năm" />
                        </SelectTrigger>
                        <SelectContent>
                          {Array.from({ length: 100 }, (_, i) => currentYear - i).map((year) => (
                            <SelectItem key={year} value={year.toString()}>
                              {year}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />
                  {errors.dob?.year && <div className="mt-1 text-xs text-red-500">{errors.dob.year.message}</div>}
                </div>
                <button type="button" className="rounded border p-2">
                  <Calendar className="h-4 w-4" />
                </button>
              </div>
              {errors.dob && 'message' in errors.dob && (
                <div className="mt-1 text-xs text-red-500">{errors.dob.message}</div>
              )}
            </div>

            <div
              className={cn('flex justify-end md:col-span-1', {
                'items-end': !errors.dob && !errors.gender && !errors.name,
                'items-center': errors.dob || errors.gender || errors.name,
              })}
            >
              <Button
                variant={isSubmitted ? 'outline' : 'default'}
                type={isSubmitted ? 'button' : 'submit'}
                onClick={isSubmitted ? handleUndo : undefined}
                className={cn({
                  'bg-red-50 text-red-700 hover:bg-red-100': isSubmitted,
                })}
              >
                {isSubmitted ? 'Hoàn tác' : 'Xác nhận'}
              </Button>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
