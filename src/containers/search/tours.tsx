import { Button } from '@/components/ui'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import Image from 'next/image'
import { ClockIcon } from '@/assets/svgs'
import { useState, useEffect, useMemo } from 'react'
import ReactStars from 'react-stars'
import api from '@/libs/axios/axios.config'
import { BaseResponse } from '@/types'
import { ITourEntity } from '@/models/response/tour'
import { FORMAT_MONEY } from '@/utils/formatMoney'

export const ResultComponent = () => {
  const [clientTour, setClientTour] = useState<ITourEntity[]>([])
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const toursPerPage = 12

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

  // Tính toán tours hiển thị cho trang hiện tại
  const currentTours = useMemo(() => {
    const indexOfLastTour = currentPage * toursPerPage
    const indexOfFirstTour = indexOfLastTour - toursPerPage
    return clientTour.slice(indexOfFirstTour, indexOfLastTour)
  }, [clientTour, currentPage, toursPerPage])

  // Tính tổng số trang
  const totalPages = useMemo(() => {
    return Math.ceil(clientTour.length / toursPerPage)
  }, [clientTour, toursPerPage])

  if (loading) return <div className="flex justify-center py-10">Đang tải tour...</div>
  if (!clientTour.length) return <div className="flex justify-center py-10">Không tìm thấy tour nào</div>

  return (
    <section className="mx-8">
      {/* tour */}
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {currentTours.map((tour: ITourEntity) => {
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
                    <span className="font-bold text-[#00315C]">{FORMAT_MONEY(tour.price)}</span>
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
                onClick={() => setCurrentPage(index + 1)}
                className="px-4"
              >
                {index + 1}
              </Button>
            ))}

            <Button
              variant="outline"
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
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
