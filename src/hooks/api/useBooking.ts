import { BookingData, PaymentResponse } from "@/app/(dashboard)/tour-booking-form/context/types"
import bookingService from "@/services/Booking.service"
import { BookingResponse } from "@/types/entities/Booking"
import { useState } from "react"

function useBooking() {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const handlePayment = async (
        bookingData: BookingData,
        totalAmount: number,
        bankCode: string = 'NCB'
    ): Promise<PaymentResponse> => {
        setLoading(true)
        setError(null)
        try {
            const bookingResponse: any = await bookingService.createBooking(bookingData)

            const { bookingId } = bookingResponse.data

            if (!bookingId) {
                throw new Error('Booking ID not returned from server')
            }
            const paymentResponse = await bookingService.createPayment(totalAmount, bankCode, bookingId)
            const { data }: any = paymentResponse
            return data
        } catch (err: any) {
            console.log("💲💲💲 ~ useBooking ~ err:", err)
            setError('Payment failed')
            return { error: "Payment failed" }
        } finally {
            setLoading(false)
        }
    }

    const getBooking = async (): Promise<BookingResponse> => {
        setLoading(true)
        setError(null)
        try {
            const bookingResponse: any = await bookingService.getMyBooking()

            if (!bookingResponse.data) {
            throw new Error('Booking data not returned from server')
            }
            return bookingResponse.data
        } catch (err: any) {
            console.log('💲💲💲 ~ useBooking ~ err:', err)
            setError('Payment failed')
            return null as unknown as BookingResponse
        } finally {
            setLoading(false)
        }
    }

    return {
      getBooking,
      handlePayment,
      loading,
      error,
    }
}

export default useBooking