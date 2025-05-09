import { BookingData } from "@/app/(dashboard)/tour-booking-form/context/types"
import api from "@/libs/axios/axios.config"

const END_POINT_BOOKING = `${process.env.NEXT_PUBLIC_BOOKING_SERVICE}/books`
const END_POINT_VNPAY = `${process.env.NEXT_PUBLIC_BOOKING_SERVICE}/vnpay`

class BookingService {
    async createBooking(bookingData: BookingData) {
        const bookingResponse = await api.post(
            `${END_POINT_BOOKING}/create-booking`,
            bookingData,
        )
        return bookingResponse
    }
    async createPayment(amount: number, bankcode: string, bookingId: string) {
        const paymentResponse = await api.post(
            `${END_POINT_VNPAY}/create-payment-url?amount=${amount * 100}&bankCode=${bankcode}&bookingId=${bookingId}`
        )
        return paymentResponse
    }
}

export default BookingService