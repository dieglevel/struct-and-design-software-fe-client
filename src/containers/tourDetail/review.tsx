/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import TourLoading from '@/components/ui/loading'
import ReviewMedia from './review-media'
import useReview from '@/hooks/api/useReview'
import { IReview } from '@/types/entities/Review'
import { criteria, FormValues, schema } from '@/app/(dashboard)/tour/context/types'
import ReactStars from 'react-stars'

const CustomerReviews = ({ reviews, loading, totalRating, tourScheduleId }: any) => {
  const { handleCreateReview, submitting } = useReview()
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = async (data: FormValues) => {
    await handleCreateReview(data, tourScheduleId)
  }
  if (loading) return <TourLoading />

  return (
    <>
      <div className="py-6">
        <h2 className="mb-4 text-xl font-semibold text-blue-900">Đánh giá của khách hàng</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="mb-8 rounded-md border bg-white p-4 shadow-sm">
          <h3 className="mb-2 text-lg font-semibold text-gray-800">Gửi đánh giá của bạn</h3>

          {/* Nội dung đánh giá */}
          <div className="mb-4">
            <textarea
              {...register('content')}
              rows={4}
              placeholder="Nhập nội dung đánh giá..."
              className="w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            {errors.content && <p className="mt-1 text-sm text-red-500">{errors.content.message}</p>}
          </div>

          {/* Số sao đánh giá */}
          <div className="mb-4">
            <label className="mb-1 block font-medium text-gray-700">Đánh giá (số sao)</label>
            <ReactStars
              count={5}
              value={watch('rating') || 0}
              onChange={(value) => setValue('rating', value, { shouldValidate: true })}
              size={30}
              half={true}
              className="text-yellow-500"
              // style={{ fontSize: 'clamp(1.25rem, 4vw, 2rem)' }}
            />
            {errors.rating && <p className="mt-1 text-sm text-red-500">{errors.rating.message}</p>}
          </div>

          {/* Tệp đính kèm */}
          <div className="mb-4">
            <input type="file" {...register('files')} accept="image/*,video/*" multiple className="w-full" />
            {errors.files && <p className="text-sm text-red-500">File không hợp lệ</p>}
          </div>

          {/* Nút gửi */}
          <button
            type="submit"
            disabled={submitting || typeof tourScheduleId === 'undefined'}
            className="rounded-md bg-orange-500 px-6 py-2 text-white transition hover:bg-orange-600 disabled:opacity-50"
          >
            {submitting ? 'Đang gửi...' : 'Gửi đánh giá'}
          </button>
        </form>
        {reviews?.length > 0 ? (
          <>
            <div className="mb-6 flex flex-col items-center rounded-lg bg-gray-200 px-10 py-4 md:flex-row">
              <div className="mb-4 flex flex-col items-center md:mb-0 md:mr-8">
                <span className="text-4xl font-bold text-blue-900">{totalRating}</span>
                <div className="flex items-center">
                  <span className="text-xl text-yellow-500">★</span>
                  <span className="ml-1 text-gray-600">Tuyệt vời</span>
                </div>
              </div>
              <div className="grid flex-1 grid-cols-2 gap-4">
                {criteria.map((criterion: any, index: number) => (
                  <div key={index} className="flex items-center">
                    <span className="w-24 text-gray-700">{criterion.label}</span>
                    <div className="h-2 flex-1 overflow-hidden rounded-full bg-gray-300">
                      <div className="h-full bg-gray-500" style={{ width: `${criterion.value}%` }}></div>
                    </div>
                    <span className="ml-2 text-gray-600">{criterion.value}%</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full space-y-10">
              {reviews?.map((review: IReview, index: number) => (
                <div key={index} className="border-b pb-4">
                  <div className="mt-2 flex items-center">
                    <div className="flex items-center">
                      <div className="mr-2 h-8 w-8 rounded-full bg-gray-300"></div>
                      <div>
                        <span className="flex gap-2 font-semibold text-gray-800">
                          {review.user}
                          <span className="flex">
                            {[...Array(Math.max(0, Math.floor(Number(review.rating) || 0)))].map((_, i) => (
                              <span key={i} className="text-yellow-600">
                                ★
                              </span>
                            ))}
                          </span>
                        </span>
                        <div className="mb-2 text-gray-500">{review.date}</div>
                      </div>
                    </div>
                  </div>

                  <p className="mb-4 text-gray-600">{review.comment}</p>

                  {Array.isArray(review.files) && review.files.length > 0 && (
                    <div className="mt-2 flex flex-wrap justify-start gap-2">
                      <ReviewMedia files={review.files} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="bg-white py-24 text-center text-lg text-slate-600">Chưa có đánh giá</div>
        )}
      </div>
    </>
  )
}

export default CustomerReviews
