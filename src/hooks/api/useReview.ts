import reviewService from '@/services/Review.service'
import { IReview } from '@/types/entities/Review'
import { useState } from 'react'
import { useSnackbar } from 'notistack'
import { FormValues } from '@/app/(dashboard)/tour/context/types'

function useReview() {
    const [reviews, setReviews] = useState<IReview[]>([])
    const [loading, setLoading] = useState(false)
    const [submitting, setSubmitting] = useState(false)
    const [totalRating, setTotalRating] = useState<number>(0)
    const { enqueueSnackbar } = useSnackbar()

    const handleGetReviewByTourId = async (tourId: string) => {
        setLoading(true)
        try {
            const res = await reviewService.getReviewByTourId(tourId)
            if (Array.isArray(res)) {
                const mappedReviews = res.map((r: any) => ({
                    user: r.username,
                    date: new Date(r.reviewDate).toLocaleDateString(),
                    rating: r.rating,
                    comment: r.content,
                    files: r.files,
                }))
                const total = (
                    mappedReviews.map(r => Number(r.rating)).reduce((a, b) => a + b, 0) /
                    mappedReviews.length
                ).toFixed(1)
                setTotalRating(Number(total))
                setReviews(mappedReviews)
            }
        } catch (error) {
            console.log("💲💲💲 ~ handleGetReviewByTourId ~ error:", error)
        } finally {
            setLoading(false)
        }
    }

    const handleCreateReview = async (data: FormValues, tourScheduleId?: string) => {
        if (!tourScheduleId) {
            console.warn('Không có tourScheduleId được truyền vào hook.')
            return
        }
        try {
            setSubmitting(true)
            const filesArray = data.files ? Array.from(data.files) : []
            await reviewService.createReview({
                content: data.content,
                tourScheduleId,
                rating: data.rating,
                files: filesArray,
            })
            enqueueSnackbar(' Gửi đánh giá thành công.', { variant: 'success' })
            window.location.reload()

        } catch (error: any) {
            if (error?.statusCode === 401) {
                enqueueSnackbar('Bạn cần đăng nhập để thực hiện hành động này.', { variant: 'error' })
            } else {
                enqueueSnackbar('Có lỗi xảy ra khi gửi đánh giá.', { variant: 'error' })
            }
        } finally {
            setSubmitting(false)
        }
    }
    return {
        reviews,
        loading,
        totalRating,
        submitting,
        handleCreateReview,
        handleGetReviewByTourId,
    }
}

export default useReview
