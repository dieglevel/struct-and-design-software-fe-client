'use client'
import tourDetailBanner from '@/assets/images/tour_detail_header.png'
import { StarSvgIcon } from '@/assets/svgs'
import { AccordionTourSchedule, BookingTourDetailComponent } from '@/containers/tourDetail'
import CustomerReviews from '@/containers/tourDetail/review'
import useReview from '@/hooks/api/useReview'
import useTour from '@/hooks/api/useTour'

import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useEffect } from 'react'

export default function TourDetailPage() {
  const { id } = useParams()
  const { tour, handleGetTourById } = useTour()
  const { handleGetReviewByTourId } = useReview()

  useEffect(() => {
    handleGetReviewByTourId(`${id}`)
    handleGetTourById()
    return () => {
      handleGetReviewByTourId(`${id}`)
      handleGetTourById()
    }
  }, [id, handleGetReviewByTourId, handleGetTourById])

  return (
    <div className="m-auto">
      <div className="relative h-52 w-full">
        <Image src={tourDetailBanner} alt="Tour Banner" className="h-full w-full object-cover" />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black text-center opacity-50">
          <h1 className="text-3xl font-bold text-white">Tour detail</h1>
          <p className="mt-2 line-clamp-1 w-1/2 text-sm text-white opacity-100 md:text-lg">
            <Link href="/tour">Tour </Link> &gt; {tour?.name}
          </p>
        </div>
      </div>
      {/* body */}
      <div className="m-auto my-8 mt-2 flex w-11/12 flex-col gap-5">
        {/* base info */}
        <div className="mt-6">
          <div>
            <h3 className="text-2xl font-bold capitalize text-colorbrand-midnightBlue-950">{tour?.name}</h3>
          </div>
          <h3 className="mt-1 text-xl text-gray-500">{tour?.description}</h3>
          <div className="mt-10 flex gap-40">
            <h3 className="text-lg text-gray-500">Kiên Giang</h3>
            <div className="flex items-center justify-center gap-2">
              <StarSvgIcon width={22} />
              <h3>4.5</h3>
              <a href="#" className="justify-center text-base text-colorbrand-burntSienna-500 underline">
                (12 đánh giá)
              </a>
            </div>
          </div>
        </div>
        {/* layout */}
        <BookingTourDetailComponent tourDetail={tour} />
        <AccordionTourSchedule tourDetail={tour} />
        <CustomerReviews />
      </div>
    </div>
  )
}
