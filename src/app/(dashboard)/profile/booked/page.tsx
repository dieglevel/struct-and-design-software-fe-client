'use client'

import { BookedList } from '@/containers/profile'
import bookingService from '@/services/Booking.service'
import { IBooking } from '@/types/entities/Booking'
import { Spinner } from '@heroui/react'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function BookedPage() {
  const [bookedTours, setBookedTours] = useState<IBooking[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true) // trạng thái loading
  const pathname = usePathname()

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true) // bắt đầu loading
      try {
        const response = await bookingService.getMyBooking()
        setBookedTours(response)
      } catch (error) {
        console.error('Lỗi khi fetch dữ liệu đặt tour:', error)
      } finally {
        setIsLoading(false) // dừng loading
      }
    }
    fetchData()
  }, [pathname])

  return (
    <div className="h-fit w-full max-w-4xl flex-1 p-6 lg:w-[896px]">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Danh sách tour của tôi</h1>
        <p className="text-muted-foreground">Quản lý các tour đã đặt và lịch sử của bạn</p>
      </div>

      {isLoading ? (
        <div className="flex items-center justify-center">
          <Spinner
            size="lg"
            color="primary"
            classNames={{
              base: 'h-12 w-12 border-4 border-t-transparent rounded-full animate-spin',
            }}
          />
        </div>
      ) : bookedTours.length === 0 ? (
        <p className="text-muted-foreground">Bạn chưa đặt tour nào.</p>
      ) : (
        bookedTours.map((tour) => <BookedList {...tour} key={tour.bookingId} />)
      )}
    </div>
  )
}
