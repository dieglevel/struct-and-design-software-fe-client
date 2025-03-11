"use client";

import Image from "next/image";
import React from "react";
import banner from "@/assets/images/banner.png";
import notify from "@/assets/images/notify.png";
import share from "@/assets/images/share.png";
import location from "@/assets/images/location.png";
import { Button, Input } from "@/components/ui";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/utils";
import { Calendar, CalendarIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Home = () => {
  return (
    <div className="relative flex flex-col items-center justify-center">
      <div className="w-full min-h-[500px] relative flex">
        <Image
          src={banner}
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          alt="Background"
        />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 flex flex-col flex-1 justify-center">
          <div className="mt-8 text-center space-y-2">
            <h1 className="text-4xl font-bold text-[#0A2472]">
              ĐANG CHỜ ĐỢI CHÚNG TA!
            </h1>
            <p className="text-lg text-[#0A2472]/80">
              TRẢI NGHIỆM TRỌN VẸN - GIÁ CẢ PHẢI CHĂNG
            </p>
          </div>
        </div>
      </div>
      {/* search */}
      <div className="transform -translate-y-1/2 px-4 z-20 bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg w-3/4 relative ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {/* Departure */}
          <div className="space-y-2">
            <label className="text-base font-bold text-[#00315C]">
              Khởi hành từ
            </label>
            <Input placeholder="Nhập địa điểm..." />
          </div>

          {/* Destination */}
          <div className="space-y-2">
            <label className="text-base font-bold text-[#00315C]">
              Điểm đến
            </label>
            <Input placeholder="Bạn muốn đi đâu?" />
          </div>

          {/* Start Date */}
          <div className="space-y-2">
            <label className="text-base font-bold text-[#00315C]">
              Ngày đi
            </label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn("w-full justify-start text-left font-normal")}
                >
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
            <label className="text-base font-bold text-[#00315C]">
              Ngày về
            </label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn("w-full justify-start text-left font-normal")}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar mode="single" />
              </PopoverContent>
            </Popover>
          </div>

          <div className="mt-6 flex justify-center">
            <Button className="bg-[#FF6B6B] hover:bg-[#FF6B6B]/90 text-white px-8 font-bold">
              Tìm kiếm
            </Button>
          </div>
        </div>

        {/* Search Button */}
      </div>
      {/* About me */}
      <div className="w-full py-12 bg-[url('/placeholder.svg?height=400&width=1200')] bg-cover bg-center relative">
        {/* Background overlay with stripes */}
        <div className="absolute inset-0 bg-white/90 bg-[linear-gradient(90deg,rgba(240,240,240,0.5)_1px,transparent_1px)] bg-[length:20px_100%] z-0"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-2">
              3 BƯỚC ĐỂ CÓ MỘT CHUYẾN ĐI HOÀN HẢO
            </p>
            <h2 className="text-3xl font-bold text-blue-900 md:text-4xl">
              TÌM CHUYẾN ĐI CHO BẠN
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <Card className="border-none shadow-sm bg-white/80 backdrop-blur-sm">
              <CardContent className="pt-6 text-center">
                <div className="flex justify-center items-center mb-8">
                <Image
                    src={notify}
                    alt="Notify"
                    width={80}
                    height={80}
                  />
                </div>
                <h3 className="text-lg font-bold text-blue-900 mb-2">
                  Hãy cho chúng tôi biết bạn muốn làm gì?
                </h3>
                <p className="text-gray-600 text-sm">
                  Lorem ipsum is that it has a more-or-less normal distribution
                  of letters, as opposed to using
                </p>
              </CardContent>
            </Card>

            {/* Step 2 */}
            <Card className="border-none shadow-sm bg-white/80 backdrop-blur-sm">
              <CardContent className="pt-6 text-center">
                <div className="flex justify-center items-center mb-8">
                  <Image
                    src={location}
                    alt="Location"
                    width={80}
                    height={80}
                  />
                </div>
                <h3 className="text-lg font-bold text-blue-900 mb-2">
                  Chia sẻ địa điểm du lịch của bạn
                </h3>
                <p className="text-gray-600 text-sm">
                  Lorem ipsum is that it has a more-or-less normal distribution
                  of letters, as opposed to using
                </p>
              </CardContent>
            </Card>

            {/* Step 3 */}
            <Card className="border-none shadow-sm bg-white/80 backdrop-blur-sm">
              <CardContent className="pt-6 text-center">
                <div className="flex justify-center items-center mb-8">
                <Image
                    src={share}
                    alt="Share"
                    width={80}
                    height={80}
                  />
                </div>
                <h3 className="text-lg font-bold text-blue-900 mb-2">
                  Chia sẻ sở thích du lịch của bạn
                </h3>
                <p className="text-gray-600 text-sm">
                  Lorem ipsum is that it has a more-or-less normal distribution
                  of letters, as opposed to using
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
