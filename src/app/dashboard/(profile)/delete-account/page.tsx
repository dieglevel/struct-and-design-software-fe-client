"use client"

import type React from "react"

import { useState } from "react"
import { format } from "date-fns"
import { vi } from "date-fns/locale"

import { cn } from "@/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon } from "lucide-react"

interface FormData {
  fullName: string
  email: string
  phoneNumber: string
  date: Date | undefined
}

export default function DeleteAccount() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "Phung Anh Minh",
    email: "Dieglevel@gmail.com",
    phoneNumber: "0388 245 392",
    date: new Date("2001-11-10"),
  }
)



  return (
    <div className="w-full max-w-4xl lg:w-[896] self-center p-6 rounded-lg flex-1">
      <h2 className="text-xl font-bold text-[#0a3b66] mb-6 pb-2 border-b uppercase">Xóa tài khoản</h2>
      <form className="space-y-6 w-full ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="fullName" className="text-[#0a3b66]">
              Họ và tên
            </Label>
            <Input
              id="fullName"
              name="fullName"
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              value={formData.fullName}
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
                    "w-full justify-start text-left font-normal border-gray-300",
                    !formData.date && "text-muted-foreground",
                  )}
                >
                  {formData.date ? format(formData.date, "dd/MM/yyyy") : "Chọn ngày"}
                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar mode="single" selected={formData.date} onSelect={(e) => setFormData({ ...formData,  date:e})} initialFocus locale={vi} />
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
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
              onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
              value={formData.phoneNumber}
              className="border-gray-300"
            />
          </div>
        </div>

        <div className="flex justify-end">
          <Button type="submit" className="bg-[#ee7762] hover:bg-[#e06652] text-white px-8">
            Cập nhật
          </Button>
        </div>
      </form>
    </div>
  )
}

