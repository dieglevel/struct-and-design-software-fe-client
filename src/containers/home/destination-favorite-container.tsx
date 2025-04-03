import api from '@/libs/axios/axios.config'
import { IDestinationEntity } from '@/models/response/tour'
import { BaseResponse } from '@/types'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

export const DestinationFavoriteContainer = () => {
  const [destinations, setDestinations] = useState<BaseResponse<IDestinationEntity[]>>()

  const getDestinations = async () => {
    try {
      const res = await api.get(`${process.env.NEXT_PUBLIC_BOOKING_SERVICE}/destinations`)
      if (res.data.data) {
        return res.data
      }
    } catch (error) {
      console.error('Lỗi khi gọi API lấy tour:', error)
    }
  }

  useEffect(() => {
    const fetchDestinations = async () => {
      const destinations = await getDestinations()
      setDestinations(destinations)
    }
    fetchDestinations()
  }, [])

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="mb-16 self-center text-center">
        <h3 className="mb-2 text-3xl font-bold uppercase text-blue-900">điểm đến yêu thích</h3>
      </div>
      <div className="grid h-[1060px] grid-cols-2 grid-rows-3 gap-8 md:grid-cols-4 md:grid-rows-2">
        {destinations?.data.slice(0, 6).map((destination, index) => (
          <button
            className={`relative overflow-hidden rounded-lg ${index % 2 === 0 && index > 0 ? 'col-span-2' : ''}`}
            key={destination.destinationId}
          >
            <div className="absolute inset-0 z-0">
              <Image src={destination.image} alt={destination.name} fill className="object-cover" />
            </div>

            <div className="absolute bottom-0 left-0 right-0 top-0 z-[1] bg-gradient-to-b from-[#ffffff5b] to-[#1a191980]"></div>

            <div className="absolute bottom-4 left-4 z-10">
              <p className="text-xl font-bold text-white">{destination.name}</p>
              <p className="text-lg text-[#FFC515]">{destination.description}</p>
            </div>
          </button>
        ))}
      </div>
    </section>
  )
}
