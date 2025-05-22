'use client'
import { BookingContext } from '@/app/(dashboard)/tour-booking-form/context'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useContext } from 'react'


export function ContactInformation() {
  const { me } = useContext(BookingContext)
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-gray-700">THÔNG TIN LIÊN LẠC</h2>
      <div className="rounded-md bg-orange-50 p-3 text-sm">
        <span className="font-medium text-orange-500">Điền đúng</span> thông tin để liên lạc, nhận xác nhận và thông báo
        từ công ty
      </div>
      <div className="space-y-4">
        <div>
          <Label htmlFor="fullName" className="text-sm">
            Họ tên *
          </Label>
          <Input id="fullName" value={me?.fullName ?? ''} placeholder="Nhập họ tên" className="mt-1" onChange={() => {}} />
        </div>
        <div>
          <Label htmlFor="phone" className="text-sm">
            Điện thoại *
          </Label>
          <Input id="phone" value={me?.phone ?? ''} placeholder="Nhập số điện thoại" className="mt-1" onChange={() => {}} />
        </div>
      </div>
    </div>  
  )
}
