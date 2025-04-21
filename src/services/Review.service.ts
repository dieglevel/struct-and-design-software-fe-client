import api from "@/libs/axios/axios.config";
import { ReviewResponseType } from "@/types/entities/Review";

const END_POINT_BOOKING = `${process.env.NEXT_PUBLIC_BOOKING_SERVICE}/tours`

class ReviewService {
    async getReviewByTourId(tourId: string): Promise<ReviewResponseType> {
        const response = await api.get<ReviewResponseType>(`${END_POINT_BOOKING}/${tourId}/reviews`)
        return response.data;
    }
}

const reviewService = new ReviewService();

export default reviewService;