import React from 'react'
import { Card } from '@/components/ui/card'
import dynamic from 'next/dynamic'
import { Button } from '@/components/ui'
import { IBooking } from '@/types/entities/Booking'

const ReactStars = dynamic(() => import('react-stars'), { ssr: false })


export const BookedList = (booking: IBooking) => {
  return (
    <Card key={booking.bookingId} className="mt-8 flex w-full flex-col overflow-hidden p-4 shadow-md">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-[#00315C]">{booking.userFullName}</h2>
          <p className="text-sm text-gray-500">
            Trạng thái: <span className="font-medium text-green-600">{booking.status}</span>
          </p>
        </div>
        <div className="text-right text-sm text-gray-500">
          <p>Booking ID:</p>
          <p className="font-mono text-xs text-gray-400">{booking.bookingId}</p>
        </div>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-semibold text-[#F27052]">{booking.tourSchedule.name}</h3>
        <p className="text-sm text-gray-600">{booking.tourSchedule.description}</p>
        <p className="mt-1 text-sm text-gray-500">
          Từ ngày: <span className="font-medium">{new Date(booking.tourSchedule.startDate || "").toLocaleDateString()}</span>{' '}
          - đến ngày: <span className="font-medium">{new Date(booking.tourSchedule.endDate || "").toLocaleDateString()}</span>
        </p>
      </div>

      <div className="mb-4 text-sm text-gray-700">
        <p>Số lượng vé:</p>
        <ul className="list-inside list-disc">
          <li>Người lớn: {booking.tickets.filter((t) => t.ticketType === 'ADULT').length}</li>
          <li>Trẻ em: {booking.tickets.filter((t) => t.ticketType === 'CHILD').length}</li>
        </ul>
      </div>

      <div className="mb-4 text-sm text-gray-700">
        <p>
          <span className="font-medium">Yêu cầu:</span> {booking.note || 'Không có yêu cầu nào'}
        </p>
      </div>

      <div className="flex items-center justify-between">
        <div>
          <ReactStars size={20} value={5} edit={false} />
          <p className="mt-2 text-lg font-bold text-[#00315C]">{booking.totalPrice.toLocaleString()} VND</p>
        </div>

        <div className="flex flex-col gap-2">
          <Button className="bg-[#F27052] font-bold">Xem chi tiết</Button>
          <Button
            variant="outline"
            className="border-[#F27052] font-bold text-[#F27052] hover:bg-[#f26f52a2] hover:text-white"
          >
            Đánh giá
          </Button>
        </div>
      </div>
    </Card>
  )
}
