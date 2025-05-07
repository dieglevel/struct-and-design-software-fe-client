/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { Button } from '@/components/ui'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import Image from 'next/image'
import { ClockIcon } from '@/assets/svgs'
import { useState, useEffect, useMemo } from 'react'
import ReactStars from 'react-stars'
import api from '@/libs/axios/axios.config'
import { ITourEntity } from '@/models/response/tour'
import { FORMAT_MONEY } from '@/utils/formatMoney'
import TourLoading from '@/components/ui/loading'
import { useRouter } from 'next/navigation'
import useSearch from '@/hooks/ui/useSearch'
import nogImg from '@/assets/images/nogImg.jpg'

export const ResultComponent = () => {
  const { getQueryField, setPage } = useSearch()
  const route = useRouter()

  const [clientTour, setClientTour] = useState<ITourEntity[]>([])
  const [loading, setLoading] = useState(true)
  const pageQuery = parseInt(getQueryField('page') || '1', 10)
  const [currentPage, setCurrentPage] = useState(pageQuery)
  const toursPerPage = 12
  const handleNavigation = (id: string) => {
    route.push(`tour/${id}`)
  }

  const getTour = async () => {
    try {
      setLoading(true)
      const res = await api.get(`${process.env.NEXT_PUBLIC_BOOKING_SERVICE}/tours`)
      if (res.data) {
        setClientTour(res.data)
      }
    } catch (error) {
      console.error('Lỗi khi gọi API lấy tour:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getTour()
  }, [])

  const currentTours = useMemo(() => {
    const minPrice = parseInt(getQueryField('min') || '0', 10)
    const maxPrice = parseInt(getQueryField('max') || '99999999', 10)
    const dayQuery = getQueryField('day') || '0'

    const filtered = clientTour.filter((tour) => {
      const price = tour.price || 0

      const match = tour.duration?.toLocaleLowerCase().match(/(\d+)\s*ngày/)
      const tourDay = match ? parseInt(match[1], 10) : 0
      let isDayMatched = true
      if (dayQuery === 'tren-6-ngay') {
        isDayMatched = tourDay > 6
      } else if (dayQuery.match(/^\d+-ngay$/)) {
        const expectedDay = parseInt(dayQuery.split('-')[0], 10)
        isDayMatched = tourDay === expectedDay
      }

      return price >= minPrice && price <= maxPrice && isDayMatched
    })
    const indexOfLastTour = currentPage * toursPerPage
    const indexOfFirstTour = indexOfLastTour - toursPerPage
    return filtered.slice(indexOfFirstTour, indexOfLastTour)
    
  }, [clientTour, currentPage, getQueryField('min'), getQueryField('max'), getQueryField('day')])

  const totalPages = useMemo(() => {
    const minPrice = parseInt(getQueryField('min') || '0', 10)
    const maxPrice = parseInt(getQueryField('max') || '99999999', 10)
    const dayQuery = getQueryField('day') || '0'

    const filtered = clientTour.filter((tour) => {
      const price = tour.price || 0
      const match = tour.duration?.match(/(\d+)\s*ngày/)
      const tourDay = match ? parseInt(match[1], 10) : 0
      let isDayMatched = true
      if (dayQuery === 'tren-6-ngay') {
        isDayMatched = tourDay > 6
      } else if (dayQuery.toLocaleLowerCase().match(/^\d+-ngay$/)) {
        const expectedDay = parseInt(dayQuery.split('-')[0], 10)
        isDayMatched = tourDay === expectedDay
      }
      return price >= minPrice && price <= maxPrice && isDayMatched
    })
    return Math.ceil(filtered.length / toursPerPage)
  }, [clientTour, getQueryField('min'), getQueryField('max'), getQueryField('day')])

  useEffect(() => {
    setPage(currentPage)
  }, [currentPage])

  useEffect(() => {
    setCurrentPage(1)
  }, [getQueryField('min'), getQueryField('max')])

  if (loading)
    return (
      <div className="flex w-full items-center justify-center">
        <TourLoading />
      </div>
    )
  if (!clientTour.length) return <div className="flex justify-center py-10">Không tìm thấy tour nào</div>

  return (
    <section className="mx-8">
      {/* tour */}
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {currentTours?.map((tour: ITourEntity) => {
          return (
            <div key={tour.tourId} className="group overflow-hidden">
              <Card
                onClick={() => handleNavigation(tour.tourId)}
                className="rounded-md border-none bg-white/80 shadow-sm"
              >
                <CardHeader className="relative p-0">
                  <Image
                    src={tour.thumbnail ?? nogImg}
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
                    <span className="font-bold text-[#00315C]">{FORMAT_MONEY(tour.price)}</span>
                    <Button
                      onClick={() => handleNavigation(tour.tourId)}
                      className="border-orange-500 bg-white font-bold text-orange-500 hover:bg-orange-50"
                    >
                      Xem chi tiết
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )
        })}
      </div>

      {/* Phân trang */}
      {totalPages > 1 && (
        <div className="mt-8 flex justify-center">
          <div className="flex space-x-2">
            <Button
              variant="outline"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4"
            >
              Trước
            </Button>

            {Array.from({ length: totalPages }).map((_, index) => (
              <Button
                key={index}
                variant={currentPage === index + 1 ? 'default' : 'outline'}
                onClick={() => {
                  setCurrentPage(index + 1)
                }}
                className="px-4"
              >
                {index + 1}
              </Button>
            ))}

            <Button
              variant="outline"
              onClick={() => {
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }}
              disabled={currentPage === totalPages}
              className="px-4"
            >
              Sau
            </Button>
          </div>
        </div>
      )}
    </section>
  )
}
