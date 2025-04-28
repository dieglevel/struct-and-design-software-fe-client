import { ITourDestination } from "./TourDestination"
import { ITourImage } from "./TourImage"
import { ITourSchedule } from "./TourSchedule"

export interface ITour {
    tourId?: string
    name?: string
    description?: string
    price?: number
    thumbnail?: string
    duration?: string
    tourDestinationResponses?: ITourDestination[]
    tourScheduleResponses?: ITourSchedule[]
    tourImageResponses?: ITourImage[]
    isActive?: boolean
}

