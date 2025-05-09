'use client'
import { BookingContext } from '@/app/(dashboard)/tour-booking-form/context'
import { calculatePriceBreakdown, formatPrice } from '@/app/(dashboard)/tour-booking-form/context/helper'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Calendar, Users } from 'lucide-react'
import Image from 'next/image'
import { useContext, useEffect, useState } from 'react'
import vnpay from '@/assets/images/vnpay.webp'
import cash from '@/assets/images/cash.png'
import { cn } from '@/utils'
import InfoPassengerBooking from '@/containers/tourBooking/info-passenger-booking'
import TablePassengersBooking from '@/containers/tourBooking/table-passenger-booking'
import { ITourSchedule } from '@/types/entities/TourSchedule'

function PaymentBookingPage() {
  const { tour, quantity, discount, totalBeforeDiscount, travelers, handleCreateBooking } = useContext(BookingContext)
  const [paymentMethod, setPaymentMethod] = useState('vnpay')

  const adultPrice = tour?.tourScheduleResponses?.[0]?.adultPrice ?? 0
  const childPrice = tour?.tourScheduleResponses?.[0]?.childPrice ?? 0
  const infantPrice = tour?.tourScheduleResponses?.[0]?.babyPrice ?? 0

  const priceBreakdown = calculatePriceBreakdown(travelers, adultPrice, childPrice, infantPrice)
  const totalPrice = totalBeforeDiscount

  useEffect(() => {}, [])
  const [address, setAddress] = useState('')
  const handleSetAddress = (address: string) => {
    setAddress(address)
  }
  return (
    <div className="flex gap-10 px-10 pb-6 pt-2">
      <div className="left-pay mx-auto mt-2 max-w-6xl flex-1">
        <InfoPassengerBooking handleSetAddress={handleSetAddress} />
        <TablePassengersBooking />
      </div>
      <div className="right-payment sticky top-4 space-y-6">
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-700">Thông tin booking</h2>
          <Card>
            <CardContent className="space-y-4 p-4">
              <div className="flex gap-3">
                <div className="flex-shrink-0">
                  <Image
                    src={tour?.thumbnail ?? ''}
                    alt="Tour image"
                    width={120}
                    height={80}
                    className="rounded-md object-cover"
                  />
                </div>
                <div className="text-sm">
                  <p className="font-medium">{tour?.name}</p>
                  <p className="text-gray-500">Mã tour: {tour?.tourId?.slice(0, 7)}</p>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-gray-500" />
                  <span>
                    Ngày đi: {new Date(tour?.tourScheduleResponses?.[0]?.startDate ?? '').toLocaleDateString('vi-VN')}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-gray-500" />
                  <span>Số hành khách: {quantity} người</span>
                </div>
                <div className="mt-2 border-t pt-2">
                  <div className="space-y-2">
                    {/* Adult Fees */}
                    {priceBreakdown.adult.count > 0 && (
                      <div className="flex justify-between">
                        <span>Phí người lớn:</span>
                        <div className="text-right">
                          <div>{formatPrice(priceBreakdown.adult.total)}</div>
                          <div className="text-xs text-gray-500">
                            {priceBreakdown.adult.count} x {formatPrice(priceBreakdown.adult.pricePerUnit)}
                          </div>
                        </div>
                      </div>
                    )}
                    {/* Child Fees */}
                    {priceBreakdown.child.count > 0 && (
                      <div className="flex justify-between">
                        <span>Phí trẻ em:</span>
                        <div className="text-right">
                          <div>{formatPrice(priceBreakdown.child.total)}</div>
                          <div className="text-xs text-gray-500">
                            {priceBreakdown.child.count} x {formatPrice(priceBreakdown.child.pricePerUnit)}
                          </div>
                        </div>
                      </div>
                    )}
                    {/* Infant Fees */}
                    {priceBreakdown.infant.count > 0 && (
                      <div className="flex justify-between">
                        <span>Phí em bé:</span>
                        <div className="text-right">
                          <div>{formatPrice(priceBreakdown.infant.total)}</div>
                          <div className="text-xs text-gray-500">
                            {priceBreakdown.infant.count} x {formatPrice(priceBreakdown.infant.pricePerUnit)}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex justify-between">
                  <span>Giảm giá:</span>
                  <span>{formatPrice(discount)}</span>
                </div>
                <div className="flex items-center justify-between pt-2">
                  <span>Mã giảm giá: </span>
                  <div className="ml-2 flex items-center gap-2">
                    <Input placeholder="Nhập mã giảm giá" className="h-8 text-sm" />
                    <Button size="sm" variant="outline" className="h-8">
                      Áp dụng
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <div className="rounded-md bg-gray-50 p-4">
            <div className="flex flex-col">
              <span className="font-semibold text-slate-600">Phương thức thanh toán</span>
              <div className="mt-2 flex gap-4">
                <button
                  onClick={() => setPaymentMethod('vnpay')}
                  className={cn(`flex items-center justify-center rounded-md object-cover p-2 text-slate-500`, {
                    'border-1 border-green-300 bg-green-50': paymentMethod === 'vnpay',
                    'border-1 border-slate-200': paymentMethod === 'basePrice',
                  })}
                >
                  <Image alt="vnpay" src={vnpay} className="mr-2" width={26} height={26} /> VNPAY
                </button>
                <button
                  className={cn(
                    `flex h-[50px] w-[120px] items-center justify-center rounded-md bg-white object-cover text-slate-500`,
                    {
                      'border-1 border-green-300 bg-green-50': paymentMethod === 'basePrice',
                      'border-1 border-slate-200': paymentMethod === 'vnpay',
                    },
                  )}
                  onClick={() => setPaymentMethod('basePrice')}
                >
                  <Image alt="cash" src={cash} className="mr-2 text-slate-50" width={26} height={26} /> Tiền mặt
                </button>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <span className="font-semibold text-slate-600">Tổng tiền</span>
              <span className="text-2xl font-bold text-orange-600">{formatPrice(totalPrice - discount)}</span>
            </div>
            <div className="mt-1 text-right text-xs text-gray-500">Đã bao gồm thuế và phí</div>
          </div>
          <Button
            onClick={() => handleCreateBooking(tour?.tourScheduleResponses?.[0] as ITourSchedule, address)}
            className="w-full bg-orange-500 text-white hover:bg-orange-600"
          >
            Thanh toán
          </Button>
          <Button variant="outline" className="w-full border-orange-500 text-orange-500 hover:bg-orange-50">
            Liên hệ tư vấn
          </Button>
        </div>
      </div>
    </div>
  )
}

export default PaymentBookingPage
