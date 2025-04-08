import { Button } from '@/components/ui'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import Image from 'next/image'
import { ClockIcon } from '@/assets/svgs'
import { useState, useEffect } from 'react'
import ReactStars from 'react-stars'
import api from '@/libs/axios/axios.config'
import { BaseResponse } from '@/types'
import { ITourEntity } from '@/models/response/tour'

export const ResultComponent = () => {
  const [clientTour, setClientTour] = useState<BaseResponse<ITourEntity[]>>()

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN').format(price)
  }

  const getTour = async () => {
    try {
      const res = await api.get(`${process.env.NEXT_PUBLIC_BOOKING_SERVICE}/tours`)
      if (res.data.data) {
        return res.data
      }
    } catch (error) {
      console.error('Lỗi khi gọi API lấy tour:', error)
    }
  }

  useEffect(() => {
    const fetchTour = async () => {
      const tours = await getTour()
      console.log(tours)
      setClientTour(tours)
    }
    fetchTour()
  }, [])

  if (!clientTour) return null
  return (
    <section className="mx-auto px-4 py-12">
      {/* tour */}
      <div className="mt-8 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {clientTour.data.slice(0, 8).map((tour) => {
          return (
            <div key={tour.tourId} className="group overflow-hidden">
              <Card className="rounded-md border-none bg-white/80 shadow-sm">
                <CardHeader className="relative p-0">
                  <Image
                    src={tour.thumbnail}
                    alt={tour.name}
                    width={280}
                    height={220}
                    className="h-[220px] w-full self-center rounded-t-md object-cover"
                  />
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col space-y-2">
                    <h3 className="mt-4 line-clamp-2 min-h-12 self-start font-light text-[#00315C]">{tour.name}</h3>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <ClockIcon />
                        <p className="text-sm font-light text-[#707070]">{tour.duration}</p>
                      </div>
                      <ReactStars value={5} edit={false} />
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
