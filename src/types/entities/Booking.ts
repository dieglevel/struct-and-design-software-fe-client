import { ITicket } from "./Ticket"
import { ITourSchedule } from "./TourSchedule"

export interface IBooking {
  bookingId: string
  status: string
  totalPrice: number
  note: string
  userFullName: string
  userPhone: string
  userEmail: string
  userAddress: string
  tourSchedule: ITourSchedule
  tickets: ITicket[]
}

export interface BookingResponse {
  data: IBooking[]
}