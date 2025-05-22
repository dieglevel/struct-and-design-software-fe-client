export interface ITicket {
  ticketId: string
  price: number
  status: number
  note: string | null
  ticketType: 'ADULT' | 'CHILD' | string
  fullName: string
  gender: 'male' | 'female' | string
  birthDate: string
}
