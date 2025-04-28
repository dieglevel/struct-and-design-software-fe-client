import Image from 'next/image'
import React from 'react'
import { IBookedTourEntity } from '@/models/response/booked'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import dynamic from 'next/dynamic'
import { FORMAT_MONEY } from '@/utils/formatMoney'
import { Button } from '@/components/ui'

const ReactStars = dynamic(() => import('react-stars'), { ssr: false })


export const BookedList = (booking: IBookedTourEntity) => {
  return (
    <Card key={booking.bookingId} className="justif mt-8 flex h-full w-full justify-between overflow-hidden px-4">
      <div className="flex w-full">
        <div className="relative h-28 w-1/5 self-center">
          <Image src={booking.image} alt={booking.tourName} fill className="object-cover" />
        </div>

        <div>
          <CardHeader className="px-4 pb-2">
            <CardTitle className="line-clamp-1 w-3/4">{booking.tourName}</CardTitle>
          </CardHeader>
          <CardContent className="px-4">
            <p className="text-base text-[#707070]">
              Số vé: {booking.totalAdults} người lớn {booking.totalChildren} trẻ em <br />
              Ngày bắt đầu: {booking.startDate} <br />
              Ngày kết thúc: {booking.endDate}
            </p>
          </CardContent>
        </div>
      </div>

      {/* Render ReactStars chỉ khi client */}
      <div className="flex w-2/5 items-center justify-between">
        <div>
          <ReactStars size={20} value={5} edit={false} />
          <p className="text-base font-bold text-[#00315C] mt-4">{FORMAT_MONEY(booking.pricePerPerson)}</p>
        </div>
        <div className="flex flex-col">
          <Button className="mb-4 bg-[#F27052] font-bold">Xem chi tiết</Button>
          <Button variant="outline" className="border-[#F27052] font-bold text-[#F27052] hover:bg-[#f26f52a2] hover:text-white">
            Đánh giá
          </Button>
        </div>
      </div>
    </Card>
  )
}
