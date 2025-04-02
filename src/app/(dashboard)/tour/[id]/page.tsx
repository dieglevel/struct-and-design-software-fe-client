'use client'
import tourDetailBanner from '@/assets/images/tour_detail_header.png'
import api from '@/libs/axios/axios.config'
import { TourResponseDTO } from '@/models/response/dashboard'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
export default function TourDetailPage() {
  const { id } = useParams()
  const [detail, setDetail] = useState<TourResponseDTO[]>([])
  const fetchTourDetail = async () => {
    try {
      const response = await api(`${process.env.NEXT_PUBLIC_BOOKING_SERVICE}/tours/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      // setDetail(response.data);
    } catch (error) {
      console.error('Lỗi khi gọi API:', error)
    }
  }

  useEffect(() => {
    fetchTourDetail()
  }, [id])
  return (
    <div className="relative h-52 w-full">
      <Image src={tourDetailBanner} alt="Tour Banner" className="h-full w-full object-cover" />
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black text-center opacity-50">
        <h1 className="text-3xl font-bold text-white">Tour detail</h1>
        <p className="mt-2 text-sm text-white">
          <a href="/tour">Tour</a> &gt; Tour Detail
        </p>
      </div>
    </div>
  )
}
