import { TourDestinationResponseDTO, TourImageResponseDTO } from "./index";

export type TourResponseDTO = {
    tourId?: string;
    name?: string;
    description?: string;
    price?: number;
    thumbnail?: string;
    duration?: string;
    tourDestinationResponses?: TourDestinationResponseDTO[];
    tourImageResponses?: TourImageResponseDTO[];
    isActive?: boolean;
};
