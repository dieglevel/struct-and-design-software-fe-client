'use client'

import { useState } from 'react'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Calendar, Users, User, Baby } from 'lucide-react'
import Image from 'next/image'

interface TravelerType {
  id: string
  name: string
  ageDescription: string
  icon: React.ReactNode
  count: number
  minCount: number
}


export default function TourBookingForm() {
  const [adultCount, setAdultCount] = useState(1)
    const [verifyId, setVerifyId] = useState(false)
  const [childCount, setChildCount] = useState(0)
  const [additionalTravelers, setAdditionalTravelers] = useState<{ id: number; type: string }[]>([])
  const [totalPrice, setTotalPrice] = useState(23990000)
  const [travelers, setTravelers] = useState<TravelerType[]>([
    {
      id: 'adult',
      name: 'Người lớn',
      ageDescription: 'Từ 12 tuổi',
      icon: <User className="h-4 w-4" />,
      count: 2,
      minCount: 1,
    },
    {
      id: 'child',
      name: 'Trẻ em',
      ageDescription: 'Từ 2-11 tuổi',
      icon: <User className="h-4 w-4" />,
      count: 1,
      minCount: 0,
    },
    {
      id: 'infant',
      name: 'Em bé',
      ageDescription: 'Dưới 2 tuổi',
      icon: <Baby className="h-4 w-4" />,
      count: 1,
      minCount: 0,
    },
  ])

  const updateTravelerCount = (id: string, increment: boolean) => {
    setTravelers(
      travelers.map((traveler) => {
        if (traveler.id === id) {
          const newCount = increment ? traveler.count + 1 : traveler.count - 1
          return {
            ...traveler,
            count: Math.max(traveler.minCount, newCount),
          }
        }
        return traveler
      }),
    )
  }

  const handleAddTraveler = (type: string) => {
    setAdditionalTravelers([...additionalTravelers, { id: Date.now(), type }])
  }

  const increaseCount = (type: 'adult' | 'child') => {
    if (type === 'adult') {
      setAdultCount(adultCount + 1)
    } else {
      setChildCount(childCount + 1)
    }
  }

  const decreaseCount = (type: 'adult' | 'child') => {
    if (type === 'adult' && adultCount > 1) {
      setAdultCount(adultCount - 1)
    } else if (type === 'child' && childCount > 0) {
      setChildCount(childCount - 0)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-center text-2xl font-bold text-orange-500">ĐẶT TOUR</h1>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Left Column - Booking Form */}
        <div className="space-y-8 lg:col-span-2">
          {/* Contact Information */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-700">THÔNG TIN LIÊN LẠC</h2>
            <div className="rounded-md bg-orange-50 p-3 text-sm">
              <span className="font-medium text-orange-500">Điền đúng</span> thông tin để liên lạc, nhận xác nhận và
              thông báo từ công ty
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="fullName" className="text-sm">
                  Họ tên *
                </Label>
                <Input id="fullName" placeholder="Nhập họ tên" className="mt-1" />
              </div>
              <div>
                <Label htmlFor="fullName" className="text-sm">
                  Điện thoại *
                </Label>
                <Input id="fullName" placeholder="Nhập họ tên" className="mt-1" />
              </div>

            </div>
          </div>

          {/* Travelers Information */}
          <div className="space-y-4">
            <Card className="border-0 shadow-none">
              <CardContent className="p-0">
                <div className="space-y-4">
                  <h2 className="text-base font-medium text-gray-700">HÀNH KHÁCH</h2>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    {travelers.map((traveler) => (
                      <div key={traveler.id} className="rounded-md border p-3">
                        <div className="mb-1 flex items-center gap-2">
                          {traveler.icon}
                          <span className="text-sm font-medium">{traveler.name}</span>
                        </div>
                        <div className="mb-2 text-xs text-gray-500">{traveler.ageDescription}</div>
                        <div className="flex items-center">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 rounded-md"
                            onClick={() => updateTravelerCount(traveler.id, false)}
                            disabled={traveler.count <= traveler.minCount}
                          >
                            <span className="text-lg">-</span>
                          </Button>
                          <div className="w-8 text-center">{traveler.count}</div>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 rounded-md"
                            onClick={() => updateTravelerCount(traveler.id, true)}
                          >
                            <span className="text-lg">+</span>
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

              <div className="space-y-6">
                <h2 className="text-base font-medium text-gray-700">THÔNG TIN HÀNH KHÁCH</h2>

                {travelers.map((traveler, index) => (
                  <Card key={traveler.id} className="border shadow-sm">
                    <CardContent className="p-4">
                      <div className="space-y-4">
                        <div className="flex items-center gap-2">
                          {traveler.icon}
                          {/* <span className="font-medium">{traveler.}</span> */}
                          <span className="text-xs text-gray-500">({traveler.ageDescription})</span>
                        </div>

                        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
                          <div className="md:col-span-1">
                            <Label htmlFor={`name-${traveler.id}`} className="mb-1 block text-sm">
                              Họ tên <span className="text-red-500">*</span>
                            </Label>
                            <Input id={`name-${traveler.id}`} placeholder="Nhập họ tên" />
                          </div>

                          <div className="md:col-span-1">
                            <Label htmlFor={`gender-${traveler.id}`} className="mb-1 block text-sm">
                              Giới tính <span className="text-red-500">*</span>
                            </Label>
                            <Select>
                              <SelectTrigger id={`gender-${traveler.id}`}>
                                <SelectValue placeholder="Nam" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="male">Nam</SelectItem>
                                <SelectItem value="female">Nữ</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          <div className="md:col-span-2">
                            <Label htmlFor={`dob-${traveler.id}`} className="mb-1 block text-sm">
                              Ngày sinh <span className="text-red-500">*</span>
                            </Label>
                            <div className="flex gap-2">
                              <Select>
                                <SelectTrigger>
                                  <SelectValue placeholder="Ngày" />
                                </SelectTrigger>
                                <SelectContent>
                                  {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                                    <SelectItem key={day} value={day.toString()}>
                                      {day}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <Select>
                                <SelectTrigger>
                                  <SelectValue placeholder="Tháng" />
                                </SelectTrigger>
                                <SelectContent>
                                  {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
                                    <SelectItem key={month} value={month.toString()}>
                                      {month}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <Select>
                                <SelectTrigger>
                                  <SelectValue placeholder="Năm" />
                                </SelectTrigger>
                                <SelectContent>
                                  {Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i).map((year) => (
                                    <SelectItem key={year} value={year.toString()}>
                                      {year}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <button className="rounded border p-2">
                                <Calendar className="h-4 w-4" />
                              </button>
                            </div>
                          </div>
                        </div>

                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

            {/* Terms and Conditions */}
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <Checkbox id="terms" />
                <div className="grid gap-1.5 leading-none">
                  <Label htmlFor="terms" className="text-sm font-normal">
                    Tôi đồng ý với <span className="text-blue-600">Chính sách</span> bảo vệ dữ liệu cá nhân và các{' '}
                    <span className="text-blue-600">điều khoản khác</span>.
                  </Label>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Tour Summary */}
        <div className="lg:col-span-1">
          <div className="sticky top-4 space-y-6">
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-gray-700">TÓM TẮT CHUYẾN ĐI</h2>

              <Card>
                <CardContent className="space-y-4 p-4">
                  <div className="flex gap-3">
                    <div className="flex-shrink-0">
                      <Image
                        src="/placeholder.svg?height=80&width=120"
                        alt="Tour image"
                        width={120}
                        height={80}
                        className="rounded-md object-cover"
                      />
                    </div>
                    <div className="text-sm">
                      <p className="font-medium">Tour Đà Nẵng - Hội An - Huế - Động Thiên Đường - Cồn Vàm</p>
                      <p className="text-gray-500">Mã tour: 1234567</p>
                    </div>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-gray-500" />
                      <span>Ngày đi: 12/08/2023</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-gray-500" />
                      <span>Số khách hàng: 1 Phụ thu: 0</span>
                    </div>

                    <div className="mt-2 border-t pt-2">
                      <div className="flex justify-between">
                        <span>Phí người lớn:</span>
                        <div className="text-right">
                          <div>24.990.000 đ</div>
                          <div className="text-xs text-gray-500">1 x 24.990.000 đ</div>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <span>Giảm giá:</span>
                      <span>1.000.000 đ</span>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <span>Mã giảm giá:</span>
                      <div className="flex items-center gap-2">
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
                <div className="flex items-center justify-between">
                  <span className="font-semibold">Tổng tiền</span>
                  <span className="text-xl font-bold text-orange-500">
                    {new Intl.NumberFormat('vi-VN').format(totalPrice)} đ
                  </span>
                </div>
                <div className="mt-1 text-right text-xs text-gray-500">Đã bao gồm thuế và phí</div>
              </div>

              <Button className="w-full bg-orange-500 text-white hover:bg-orange-600">Tiếp tục đặt chỗ</Button>

              <Button variant="outline" className="w-full border-orange-500 text-orange-500 hover:bg-orange-50">
                Liên hệ tư vấn
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
