import Image from 'next/image'
import React from 'react'
import banner from '@/assets/images/banner.png' // Đường dẫn alias '@' có thể cần config
import { Button, Input } from '@/components/ui'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { cn } from '@/utils'
import { Calendar, CalendarIcon } from 'lucide-react'
export const TourSearchContainerComponent = () => {
  return (
    <div className="relative flex flex-col items-center justify-center">
      <div className="relative flex min-h-[500px] w-full">
        <Image src={banner} fill style={{ objectFit: 'cover', objectPosition: 'center' }} alt="Background" />
      </div>
      {/* search */}
      <div className="relative z-20 w-3/4 -translate-y-1/2 transform rounded-lg bg-white/80 p-6 px-4 shadow-lg backdrop-blur-sm">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5">
          {/* Departure */}
          <div className="space-y-2">
            <label className="text-base font-bold text-[#00315C]">Khởi hành từ</label>
            <Input placeholder="Nhập địa điểm..." />
          </div>

          {/* Destination */}
          <div className="space-y-2">
            <label className="text-base font-bold text-[#00315C]">Điểm đến</label>
            <Input placeholder="Bạn muốn đi đâu?" />
          </div>

          {/* Start Date */}
          <div className="space-y-2">
            <label className="text-base font-bold text-[#00315C]">Ngày đi</label>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className={cn('w-full justify-start text-left font-normal')}>
                  <CalendarIcon className="mr-2 h-4 w-4" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar mode="single" />
              </PopoverContent>
            </Popover>
          </div>

          {/* End Date */}
          <div className="space-y-2">
            <label className="text-base font-bold text-[#00315C]">Ngày về</label>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className={cn('w-full justify-start text-left font-normal')}>
                  <CalendarIcon className="mr-2 h-4 w-4" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar mode="single" />
              </PopoverContent>
            </Popover>
          </div>

          <div className="mt-6 flex justify-center">
            <Button className="bg-[#FF6B6B] px-8 font-bold text-white hover:bg-[#FF6B6B]/90">Tìm kiếm</Button>
          </div>
        </div>

        {/* Search Button */}
      </div>
    </div>
  )
}
