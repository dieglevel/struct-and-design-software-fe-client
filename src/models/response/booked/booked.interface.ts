export interface IBookedTourEntity {
  bookingId: string
  tourName: string
  startDate: string
  endDate: string
  totalAdults: number
  totalChildren: number
  pricePerPerson: number
  image: string 
  location: string
}
