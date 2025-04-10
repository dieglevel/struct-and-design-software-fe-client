import { Button } from '@/components/ui'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import Image from 'next/image'
import { ClockIcon } from '@/assets/svgs'
import { useState, useEffect } from 'react'
import ReactStars from 'react-stars'

interface TourProps {
  id: string
  title: string
  location: string
  duration: string
  nights: number
  days: number
  rating: number
  price: number
  image: string
  discount?: number
  isFavorite?: boolean
}

const tours: TourProps[] = [
  {
    id: '1',
    title: 'Tour Phú Quốc',
    location: 'Phú Quốc',
    duration: '3 ngày 2 đêm',
    nights: 2,
    days: 3,
    rating: 4,
    price: 2980000,
    image: 'https://picsum.photos/282/220',
    discount: 10,
    isFavorite: false,
  },
  {
    id: '2',
    title: 'Tour Hạ Long',
    location: 'Hạ Long',
    duration: '4 ngày 3 đêm',
    nights: 3,
    days: 4,
    rating: 5,
    price: 3940000,
    image: 'https://picsum.photos/282/220',
    isFavorite: true,
  },
  {
    id: '3',
    title: 'Tour Ninh Bình',
    location: 'Ninh Bình',
    duration: '3 ngày 2 đêm',
    nights: 2,
    days: 3,
    rating: 5,
    price: 2445000,
    image: 'https://picsum.photos/282/220',
    isFavorite: false,
  },
  {
    id: '4',
    title: 'Tour Hội An',
    location: 'Hội An',
    duration: '3 ngày 2 đêm',
    nights: 2,
    days: 3,
    rating: 4,
    price: 1945000,
    image: 'https://picsum.photos/282/220',
    discount: 10,
    isFavorite: true,
  },
  {
    id: '5',
    title: 'Tour Hà Giang',
    location: 'Hà Giang',
    duration: '2 ngày 1 đêm',
    nights: 1,
    days: 2,
    rating: 4,
    price: 1530000,
    image: 'https://picsum.photos/282/220',
    isFavorite: true,
  },
  {
    id: '6',
    title: 'Tour Nha Trang',
    location: 'Nha Trang',
    duration: '5 ngày 4 đêm',
    nights: 4,
    days: 5,
    rating: 5,
    price: 5940000,
    image: 'https://picsum.photos/282/220',
    discount: 15,
    isFavorite: false,
  },
  {
    id: '7',
    title: 'Tour Huế',
    location: 'Huế',
    duration: '4 ngày 3 đêm',
    nights: 3,
    days: 4,
    rating: 5,
    price: 3945000,
    image: 'https://picsum.photos/282/220',
    discount: 10,
    isFavorite: false,
  },
  {
    id: '8',
    title: 'Tour Quy Nhơn',
    location: 'Quy Nhơn',
    duration: '6 ngày 5 đêm',
    nights: 5,
    days: 6,
    rating: 5,
    price: 7945000,
    image: 'https://picsum.photos/282/220',
    discount: 10,
    isFavorite: false,
  },
]

export const TourPromotionComponent = () => {
  const [clientTour, setClientTour] = useState<TourProps[]>([])

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN').format(price)
  }

  useEffect(() => {
    setClientTour(tours)
  }, [])

  if (!clientTour) return null
  return (
    <section className="container mx-auto px-4 py-12">
      {/* title */}
      <div className="flex items-center justify-between">
        <h2 className="items-center text-2xl font-bold text-[#00315C]">ƯU ĐÃI HOT HÔM NAY</h2>
        <div className="flex items-center">
          <span className="pr-3 text-[#497E91]">CHƯƠNG TRÌNH DIỄN RA TRONG </span>
          <div className="flex grid-cols-1">
            <span className="rounded-sm bg-[#F27052] px-2 py-2 font-bold text-white">10</span>
            <span className="flex items-center justify-center px-1 font-bold text-[#F27052]">:</span>
            <span className="rounded-sm bg-[#F27052] px-2 py-2 font-bold text-white">20</span>
            <span className="flex items-center justify-center px-1 font-bold text-[#F27052]">:</span>
            <span className="rounded-sm bg-[#F27052] px-2 py-2 font-bold text-white">30</span>
          </div>
        </div>
      </div>
      {/* tour */}
      <div className="mt-8 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {clientTour.map((tour) => {
          return (
            <div key={tour.id} className="group overflow-hidden">
              <Card className="rounded-md border-none bg-white/80 shadow-sm">
                <CardHeader className="relative p-0">
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    width={282}
                    height={220}
                    className="h-[220px] w-full self-center rounded-t-md object-cover"
                  />
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col space-y-2">
                    <h3 className="mt-4 self-start font-light text-[#00315C]">{tour.title}</h3>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <ClockIcon />
                        <p className="text-sm font-light text-[#707070]">{tour.duration}</p>
                      </div>
                      <ReactStars value={tour.rating} edit={false} />
                    </div>
                  </div>
                  <div className="my-4 w-full border bg-[#D1D1D1]"></div>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-[#00315C]">{formatPrice(tour.price)} đ</span>
                    <Button className="border-orange-500 bg-white font-bold text-orange-500 hover:bg-orange-50">
                      Xem chi tiết
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )
        })}
      </div>
    </section>
  )
}
