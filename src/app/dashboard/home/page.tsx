"use client"

import Image from 'next/image';
import React, { useState } from 'react';
import banner from '@/assets/images/banner.png'; // Đường dẫn alias '@' có thể cần config
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button, Input } from '@/components/ui';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/utils';
import { Calendar, CalendarIcon } from 'lucide-react';


const Home = () => {

  const [startDate, setStartDate] = useState  <Date>()
  const [endDate, setEndDate] = useState<Date>()

  return (
    <div className="w-full min-h-[500px] relative">
      <Image
        src={banner}
        fill
        style={{ objectFit: "cover", objectPosition: "center" }}
        alt="Background"
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-8">

      <div className="mt-8 text-center space-y-2">
            <h1 className="text-4xl font-bold text-[#0A2472]">ĐANG CHỜ ĐỢI CHÚNG TA!</h1>
            <p className="text-lg text-[#0A2472]/80">TRẢI NGHIỆM TRỌN VẸN - GIÁ CẢ PHẢI CHĂNG</p>
          </div>  

        <Tabs defaultValue="tour" className="w-full max-w-3xl mx-auto">
          <TabsList className="grid w-full max-w-[200px] grid-cols-2">
            <TabsTrigger value="tour">
              <span className="flex items-center gap-2">Tour</span>
            </TabsTrigger>
            <TabsTrigger value="hotel">
              <span className="flex items-center gap-2">Khách sạn</span>
            </TabsTrigger>
          </TabsList>

          

          <div className="mt-8 bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Departure */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Khởi hành từ</label>
                <Input placeholder="Nhập địa điểm..." />
              </div>

              {/* Destination */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Điểm đến</label>
                <Input placeholder="Bạn muốn đi đâu?" />
              </div>

              {/* Start Date */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Ngày đi</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !startDate && "text-muted-foreground",
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {startDate ? format(startDate, "dd/MM/yyyy") : "DD/MM/YYYY"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar mode="single" selected={startDate} onSelect={setStartDate} initialFocus />
                  </PopoverContent>
                </Popover>
              </div>

              {/* End Date */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Ngày về</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn("w-full justify-start text-left font-normal", !endDate && "text-muted-foreground")}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {endDate ? format(endDate, "dd/MM/yyyy") : "DD/MM/YYYY"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar mode="single" selected={endDate} onSelect={setEndDate} initialFocus />
                  </PopoverContent>
                </Popover>
              </div>
            </div>

            {/* Search Button */}
            <div className="mt-6 flex justify-center">
              <Button className="bg-[#FF6B6B] hover:bg-[#FF6B6B]/90 text-white px-8">Tìm kiếm</Button>
            </div>
          </div>
        </Tabs>
      </div>
    </div>
  )
};

export default Home;
