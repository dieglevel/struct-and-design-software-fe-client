import api from "@/libs/axios/axios.config";
import { ReviewResponseType } from "@/types/entities/Review";

const END_POINT_BOOKING = `${process.env.NEXT_PUBLIC_BOOKING_SERVICE}/reviews`;

class ReviewService {
    async getReviewByTourId(
        tourId: string,
        page?: string | number,
        size?: string | number,
        sortby?: "rating" | string,
        direction?: "asc" | "esc"
    ): Promise<ReviewResponseType> {
        const pageParam = page ?? 0;
        const sizeParam = size ?? 10;
        const sortbyParam = sortby ?? "rating";
        const directionParam = direction ?? "desc";

        const response = await api.get<ReviewResponseType>(
            `${END_POINT_BOOKING}/${tourId}?page=${pageParam}&size=${sizeParam}&sortby=${sortbyParam}&direction=${directionParam}`
        );
        return response.data;
    }

    async createReview(data: {
        content: string;
        tourScheduleId: string;
        rating: number;
        files?: File[];
    }): Promise<any> {

        const formData = new FormData();

        formData.append("data", JSON.stringify(
            {
                content: data.content,
                tourScheduleId: data.tourScheduleId,
                rating: data.rating,
            }
        ));
        if (data.files && data.files.length > 0) {
            data.files.forEach((file) => {
                formData.append("files", file);
            });
        }
        const response = await api.post(`${END_POINT_BOOKING}/create`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });

        return response.data;
    }
}

const reviewService = new ReviewService();

export default reviewService;
