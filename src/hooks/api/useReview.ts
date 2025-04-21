import reviewService from '@/services/Review.service'
import { IReview } from '@/types/entities/Review'
import { useState } from 'react'

function useReview() {
    const [reviews, setReviews] = useState<IReview[]>([])
    const handleGetReviewByTourId = async (tourId: string) => {
        const res = await reviewService.getReviewByTourId(tourId)
        setReviews(res.data)
    }
    return {
        reviews,
        handleGetReviewByTourId
    }
}

export default useReview