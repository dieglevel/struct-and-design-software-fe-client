export interface IBookedTourEntity {
  bookingId: string
  tourName: string
  startDate: string
  endDate: string
  totalAdults: number
  totalChildren: number
  pricePerPerson: number
  currency: string
  image: string 
  location: string
}
