import Image, { StaticImageData } from 'next/image'
import React from 'react'
import hoiAn from '@/assets/images/hoiAn.jpg'

interface Destination {
  id: number
  title: string
  subtitle: string
  image: StaticImageData
}

const destinations: Destination[] = [
  {
    id: 1,
    title: 'Hội An',
    subtitle: '1800+ lượt khách',
    image: hoiAn,
  },
  {
    id: 2,
    title: 'Hội An',
    subtitle: '1800+ lượt khách',
    image: hoiAn,
  },
  {
    id: 3,
    title: 'Hội An',
    subtitle: '1800+ lượt khách',
    image: hoiAn,
  },
  {
    id: 4,
    title: 'Hội An',
    subtitle: '1800+ lượt khách',
    image: hoiAn,
  },
  {
    id: 5,
    title: 'Hội An',
    subtitle: '1800+ lượt khách',
    image: hoiAn,
  },
  {
    id: 6,
    title: 'Hội An',
    subtitle: '1800+ lượt khách',
    image: hoiAn,
  },
]

export const DestinationFavoriteContainer = () => {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="mb-16 self-center text-center">
        <h3 className="mb-2 text-3xl font-bold uppercase text-blue-900">điểm đến yêu thích</h3>
      </div>
      <div className="grid h-[1060px] grid-cols-2 grid-rows-3 gap-8 md:grid-cols-4 md:grid-rows-2">
        {destinations.map((destination, index) => (
          <button
            className={`relative overflow-hidden rounded-lg bg-gradient-to-b from-[#ffffff5b] to-[#1a191980] ${
              index % 2 === 0 && index > 0 ? 'col-span-2' : ''
            }`}
            key={destination.id}
          >
            <Image src={destination.image} alt={destination.title} fill className="-z-10 object-cover" />
            <div className="absolute bottom-4 left-4">
              <p className="text-xl font-bold text-white">{destination.title}</p>
              <p className="text-lg text-[#FFC515]">{destination.subtitle}</p>
            </div>
          </button>
        ))}
      </div>
    </section>
  )
}
