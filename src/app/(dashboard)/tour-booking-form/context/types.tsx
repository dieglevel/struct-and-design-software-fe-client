import { User, Baby } from 'lucide-react'

export interface TravelerType {
  id: number
  type: 'adult' | 'child' | 'infant'
  ageMin: number
  ageMax: number
  name: string
  ageDescription: string
  icon: React.ReactNode
  count: number
  minCount: number
  passengerId?: string
}

export const BASE_TRAVELERS: TravelerType[] = [
  {
    id: 0,
    type: 'adult',
    ageMin: 12,
    ageMax: 60,
    name: 'Người lớn',
    ageDescription: 'Từ 12 tuổi',
    icon: <User className="h-4 w-4" />,
    count: 0,
    minCount: 0,
  },
  {
    id: 1,
    type: 'child',
    name: 'Trẻ em',
    ageMin: 2,
    ageMax: 11,
    ageDescription: 'Từ 2-11 tuổi',
    icon: <User className="h-4 w-4" />,
    count: 0,
    minCount: 0,
  },
  {
    id: 2,
    type: 'infant',
    name: 'Em bé',
    ageMin: 0,
    ageMax: 2,
    ageDescription: 'Dưới 2 tuổi',
    icon: <Baby className="h-4 w-4" />,
    count: 0,
    minCount: 0,
  },
]

export interface IPassengerType {
  name: string
  gender: string
  type?: 'adult' | 'child' | 'infant'
  dob: {
    day: string
    month: string
    year: string
  }
}
export interface PassengerDetails extends IPassengerType {
  passengerId: string
  travelerTypeId: number
  isSuccessSubmit: boolean
}

export interface Ticket {
  price: number
  status: number
  ticketType: 'ADULT' | 'CHILD' | 'BABY'
  birthDate: string
  fullName: string
  gender: 'male' | 'female'
}

export interface BookingData {
  userFullName: string
  userPhone: string
  userEmail: string
  userAddress: string
  tourScheduleId: string
  note?: string
  tickets: Ticket[]
}

export interface PaymentResponse {
  paymentUrl?: string
  error?: string
}