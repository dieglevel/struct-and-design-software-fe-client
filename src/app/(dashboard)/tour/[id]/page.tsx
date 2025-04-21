'use client'
import tourDetailBanner from '@/assets/images/tour_detail_header.png'
import { StarSvgIcon } from '@/assets/svgs'
import { AccordionTourSchedule, BookingTourDetailComponent } from '@/containers/tourDetail'
import CustomerReviews from '@/containers/tourDetail/review'
import useReview from '@/hooks/api/useReview'
import api from '@/libs/axios/axios.config'
import { TourResponseDTO } from '@/models/response/dashboard'

import Image from 'next/image'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
export default function TourDetailPage() {
  const { id } = useParams()
  const [detail, setDetail] = useState<TourResponseDTO>({})
  const [schedule, setSchedule] = useState<string[]>([])

  const { reviews, handleGetReviewByTourId } = useReview()
  console.log('💲💲💲 ~ TourDetailPage ~ reviews:', reviews)
  useEffect(() => {
    handleGetReviewByTourId(`${id}`)
  }, [])
  const fetchTourDetail = async () => {
    try {
      const response = await api(`${process.env.NEXT_PUBLIC_BOOKING_SERVICE}/tours/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      console.log('response', response.data)
      setDetail(response.data)
    } catch (error) {
      console.error('Lỗi khi gọi API:', error)
    }
  }

  // const calTour

  useEffect(() => {
    fetchTourDetail()
  }, [id])
  return (
    <div className="m-auto">
      <div className="relative h-52 w-full">
        <Image src={tourDetailBanner} alt="Tour Banner" className="h-full w-full object-cover" />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black text-center opacity-50">
          <h1 className="text-3xl font-bold text-white">Tour detail</h1>
          <p className="mt-2 line-clamp-1 w-1/2 text-sm text-white opacity-100 md:text-lg">
            <a href="/tour">Tour </a> &gt; {detail.name}
          </p>
        </div>
      </div>
      {/* body */}
      <div className="m-auto my-8 flex w-11/12 flex-col gap-5">
        {/* base info */}
        <div className="">
          <div>
            <h3 className="text-2xl font-bold capitalize text-colorbrand-midnightBlue-950">
              tour phú quốc 2 ngày 1 đêm{' '}
            </h3>
          </div>
          <h3 className="text-2xl text-gray-500">HCM - Grand World - Câu Cá - Lặn Ngắm San Hô</h3>
          <div className="mt-2 flex gap-40">
            <h3 className="text-lg text-gray-500">Kiên Giang</h3>
            <div className="flex items-center justify-center gap-2">
              <StarSvgIcon width={22} />
              <h3>4.5</h3>
              <a href="#" className="justify-center text-base text-colorbrand-burntSienna-500">
                (12 đánh giá)
              </a>
            </div>
          </div>
        </div>
        {/* layout */}
        <BookingTourDetailComponent tourDetail={detail} />
        <AccordionTourSchedule tourDetail={detail} />
        <CustomerReviews />
      </div>
    </div>
  )
}
