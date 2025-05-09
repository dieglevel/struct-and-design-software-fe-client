import { BookingData, PaymentResponse } from "@/app/(dashboard)/tour-booking-form/context/types"
import BookingService from "@/services/Booking.service"
import { useState } from "react"

function useBooking() {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const bookingService = new BookingService()

    const handlePayment = async (
        bookingData: BookingData,
        totalAmount: number,
        bankCode: string = 'NCB'
    ): Promise<PaymentResponse> => {
        setLoading(true)
        setError(null)
        try {
            const bookingResponse: any = await bookingService.createBooking(bookingData)
            const { bookingId } = bookingResponse
            if (!bookingId) {
                throw new Error('Booking ID not returned from server')
            }
            const paymentResponse = await bookingService.createPayment(totalAmount, bankCode, bookingId)
            const { paymentUrl }: any = paymentResponse.data
            return paymentUrl
        } catch (err: any) {
            console.log("💲💲💲 ~ useBooking ~ err:", err)
            setError('Payment failed')
            return { error: "Payment failed" }
        } finally {
            setLoading(false)
        }
    }

    return {
        handlePayment,
        loading,
        error,
    }
}

export default useBooking