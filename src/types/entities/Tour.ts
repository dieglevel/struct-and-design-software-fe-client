import { TourDestinationResponseDTO, TourImageResponseDTO } from "@/models/response/dashboard"

export interface ITour {
    tourId?: string
    name?: string
    description?: string
    price?: number
    thumbnail?: string
    duration?: string
    tourDestinationResponses?: TourDestinationResponseDTO[]
    tourImageResponses?: TourImageResponseDTO[]
    isActive?: boolean
}

