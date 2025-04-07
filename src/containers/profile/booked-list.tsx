import Image from 'next/image'
import React from 'react'
import { IBookedTourEntity } from '@/models/response/booked'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import dynamic from 'next/dynamic'

const ReactStars = dynamic(() => import('react-stars'), { ssr: false })


export const BookedList = (booking: IBookedTourEntity) => {
  return (
    <Card key={booking.bookingId} className="mt-8 flex h-full w-full overflow-hidden">
      <div className="flex h-full w-full">
        <div className="relative m-4 h-28 w-1/6 self-center">
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

        {/* Render ReactStars chỉ khi client */}
        <div >
          <ReactStars value={5} edit={false} />
          <p></p>
        </div>
      </div>
    </Card>
  )
}
