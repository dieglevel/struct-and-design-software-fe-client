'use client'

import type React from 'react'

import { useEffect, useState } from 'react'
import { format } from 'date-fns'
import { vi } from 'date-fns/locale'

import { cn } from '@/utils'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { CalendarIcon } from 'lucide-react'
import useAuth from '@/hooks/api/useAuth'

interface UserFormData {
  fullName: string
  email: string
  phone: string
  birthday: Date | undefined
}

export default function Information() {
  const { me, handleGetMe } = useAuth()

  useEffect(() => {
    handleGetMe()
  }, [handleGetMe])

  const [userData, setUserData] = useState<UserFormData>({
    fullName: '',
    email: '',
    phone: '',
    birthday: undefined,
  })

  useEffect(() => {
    if (me) {
      setUserData({
        fullName: me.fullName || '',
        email: me.email || '',
        phone: me.phone || '',
        birthday: me.birthday ? new Date(me.birthday) : undefined,
      })
    }
  }, [me])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // if (updateProfile) {
    //   updateProfile(userData)
    // }
  }

  return (
    <div className="w-full max-w-4xl flex-1 self-center rounded-lg p-6 lg:w-[896]">
      <h2 className="mb-6 border-b pb-2 text-xl font-bold uppercase text-[#0a3b66]">Thông tin cá nhân</h2>
      <form className="w-full space-y-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="fullName" className="text-[#0a3b66]">
              Họ và tên
            </Label>
            <Input
              id="fullName"
              name="fullName"
              onChange={(e) => setUserData({ ...userData, fullName: e.target.value })}
              value={userData.fullName}
              className="border-gray-300"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="dateOfBirth" className="text-[#0a3b66]">
              Ngày sinh
            </Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    'w-full justify-start border-gray-300 text-left font-normal',
                    !userData.birthday && 'text-muted-foreground',
                  )}
                >
                  {userData.birthday ? format(userData.birthday, 'dd/MM/yyyy') : 'Chọn ngày sinh'}
                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={userData.birthday}
                  onSelect={(date) => setUserData({ ...userData, birthday: date })}
                  locale={vi}
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-[#0a3b66]">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              onChange={(e) => setUserData({ ...userData, email: e.target.value })}
              value={userData.email}
              className="border-gray-300"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phoneNumber" className="text-[#0a3b66]">
              Số điện thoại
            </Label>
            <Input
              id="phoneNumber"
              name="phoneNumber"
              onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
              value={userData.phone}
              className="border-gray-300"
            />
          </div>
        </div>

        <div className="flex justify-end">
          <Button type="submit" className="bg-[#ee7762] px-8 text-white hover:bg-[#e06652]">
            Cập nhật
          </Button>
        </div>
      </form>
    </div>
  )
}
