'use client'

import { BookedList } from '@/containers/profile'
import bookingService from '@/services/Booking.service'
import { IBooking } from '@/types/entities/Booking'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'


export default function BookedPage() {
//   const [activeTab, setActiveTab] = useState<string>('all')
  const [bookedTours, setBookedTours] = useState<IBooking[]>([])
  const pathname = usePathname()

  useEffect(() => {
    const fetchData = async () => {
      const response = await bookingService.getMyBooking()
      setBookedTours(response)
    }
    fetchData()
  }, [pathname])

  return (
    <div className="w-full max-w-4xl flex-1  p-6 lg:w-[896px]">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Danh sách tour của tôi</h1>
        <p className="text-muted-foreground">Quản lý các tour đã đặt và lịch sử của bạn</p>
      </div>
        
        
      {bookedTours.map((tour) => {
        return(
            <BookedList {...tour} key={tour.bookingId} />
        )
      })}

      {/* <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="mb-6">
          <TabsTrigger value="all">Tất cả</TabsTrigger>
          <TabsTrigger value="upcoming">Sắp tới</TabsTrigger>
          <TabsTrigger value="completed">Đã hoàn thành</TabsTrigger>
          <TabsTrigger value="cancelled">Đã hủy</TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="space-y-4">
          <Card>
            <CardContent className="flex h-40 flex-col items-center justify-center text-center">
              <p className="mb-2 text-muted-foreground">Bạn chưa có đặt tour nào</p>
              <Button>Tìm tour ngay</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs> */}
    </div>
  )
}
