/* eslint-disable react-hooks/exhaustive-deps */
import TourLoading from '@/components/ui/loading'
import useDestination from '@/hooks/api/useDestination'
import { IDestinationEntity } from '@/models/response/tour'
import Image from 'next/image'
import React, { useEffect } from 'react'

export const DestinationFavoriteContainer = () => {
  const { destinations, loading, handleGetDestinations } = useDestination()
  useEffect(() => {
    handleGetDestinations()
  }, [])

  return (
    <section className="container mx-auto px-4 py-12">
      {loading ? (
        <>
          <TourLoading />
        </>
      ) : (
        <>
          <div className="mb-16 self-center text-center">
            <h3 className="mb-2 text-3xl font-bold uppercase text-blue-900">điểm đến yêu thích</h3>
          </div>
          <div className="grid h-[1060px] grid-cols-2 grid-rows-3 gap-8 md:grid-cols-4 md:grid-rows-2">
            {Array.isArray(destinations) &&
              destinations?.slice(0, 6).map((destination: IDestinationEntity, index: number) => (
                <button
                  className={`relative overflow-hidden rounded-lg ${index % 2 === 0 && index > 0 ? 'col-span-2' : ''}`}
                  key={destination.destinationId}
                >
                  <div className="absolute inset-0 z-0">
                    <Image src={destination.image} alt={destination.name} fill className="object-cover" />
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 top-0 z-[1] bg-gradient-to-b from-[#ffffff5b] to-[#1a191980]"></div>

                  <div className="absolute bottom-4 left-4 z-10">
                    <p className="text-start text-xl font-bold text-white">{destination.name}</p>
                    <p className="text-start text-lg text-[#FFC515]">{destination.description}</p>
                  </div>
                </button>
              ))}
          </div>
        </>
      )}
    </section>
  )
}
