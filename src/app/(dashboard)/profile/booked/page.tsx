'use client'

import { IBookedTourEntity } from '@/models/response/booked/booked.interface'
import { BookedList } from '@/containers/profile'

const bookedTours: IBookedTourEntity[] = [
  {
    bookingId: '1',
    tourName: 'Tour Nha Trang - Khám Phá Biển Đảo',
    location: 'Phạm Văn Đồng, TP Nha Trang',
    startDate: '2025-10-12',
    endDate: '2025-10-31',
    totalAdults: 2,
    totalChildren: 1,
    pricePerPerson: 5000000,
    image: 'http://res.cloudinary.com/dwip7dplu/image/upload/v1743495910/travel/aiozwipu7gmsnzoedjdw.webp',
  },
  {
    bookingId: '2',
    tourName: 'Tour Vinpearl Nha Trang – Nghỉ Dưỡng Cao Cấp',
    location: 'Vinpearl Land, Nha Trang',
    startDate: '2025-08-05',
    endDate: '2025-08-10',
    totalAdults: 3,
    totalChildren: 0,
    pricePerPerson: 4255000,
    image: 'http://res.cloudinary.com/dwip7dplu/image/upload/v1743495910/travel/aiozwipu7gmsnzoedjdw.webp',
  },
]

export default function BookedPage() {
//   const [activeTab, setActiveTab] = useState<string>('all')

  return (
    <div className="w-full max-w-4xl flex-1  p-6 lg:w-[896px]">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Đặt phòng của tôi</h1>
        <p className="text-muted-foreground">Quản lý các đặt phòng và lịch sử của bạn</p>
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
