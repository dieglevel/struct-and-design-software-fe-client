import { Button, Input } from '@/components/ui'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { CalendarIcon } from 'lucide-react'
import { cn } from '@/utils'
import { format } from 'date-fns'
import { vi } from 'date-fns/locale'
import { useState } from 'react'
import { Calendar } from '@/components/ui/calendar'

export const SearchComponent = () => {
  const [date, setDate] = useState<Date | undefined>(new Date('2001-11-10'))

  return (
    <section className="relative z-20 w-3/4 -translate-y-1/2 transform rounded-lg bg-white/80 p-6 px-4 shadow-lg backdrop-blur-sm">
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
              <Button
                variant="outline"
                className={cn(
                  'w-full justify-start border-gray-300 text-left font-normal',
                  !date && 'text-muted-foreground',
                )}
              >
                {date ? format(date, 'dd/MM/yyyy') : 'Chọn ngày'}
                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar mode="single" selected={date} onSelect={setDate} locale={vi} />
            </PopoverContent>
          </Popover>
        </div>

        {/* End Date */}
        <div className="space-y-2">
          <label className="text-base font-bold text-[#00315C]">Ngày về</label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  'w-full justify-start border-gray-300 text-left font-normal',
                  !date && 'text-muted-foreground',
                )}
              >
                {date ? format(date, 'dd/MM/yyyy') : 'Chọn ngày'}
                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar mode="single" selected={date} onSelect={setDate} locale={vi} />
            </PopoverContent>
          </Popover>
        </div>

        <div className="mt-6 flex justify-center">
          <Button className="bg-[#FF6B6B] px-8 font-bold text-white hover:bg-[#FF6B6B]/90">Tìm kiếm</Button>
        </div>
      </div>

      {/* Search Button */}
    </section>
  )
}
