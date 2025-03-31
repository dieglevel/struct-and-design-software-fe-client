"use client";

import Image from "next/image";
import React from "react";
import banner from "@/assets/images/banner.png";
import notify from "@/assets/images/notify.png";
import share from "@/assets/images/share.png";
import cover from '@/assets/images/cover.png';
import location from "@/assets/images/location.png";
import { Button, Input } from "@/components/ui";
import ReactStars from "react-stars";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/utils";
import { Calendar, CalendarIcon } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ClockIcon, TickIcon } from "@/assets/svgs";
import { useState, useEffect } from "react";

interface TourProps {
  id: string;
  title: string;
  location: string;
  duration: string;
  nights: number;
  days: number;
  rating: number;
  price: number;
  image: string;
  discount?: number;
  isFavorite?: boolean;
}

const tours: TourProps[] = [
  {
    id: "1",
    title: "Tour Phú Quốc",
    location: "Phú Quốc",
    duration: "3 ngày 2 đêm",
    nights: 2,
    days: 3,
    rating: 4,
    price: 2980000,
    image: "https://picsum.photos/282/220",
    discount: 10,
    isFavorite: false,
  },
  {
    id: "2",
    title: "Tour Hạ Long",
    location: "Hạ Long",
    duration: "4 ngày 3 đêm",
    nights: 3,
    days: 4,
    rating: 5,
    price: 3940000,
    image: "https://picsum.photos/282/220",
    isFavorite: true,
  },
  {
    id: "3",
    title: "Tour Ninh Bình",
    location: "Ninh Bình",
    duration: "3 ngày 2 đêm",
    nights: 2,
    days: 3,
    rating: 5,
    price: 2445000,
    image: "https://picsum.photos/282/220",
    isFavorite: false,
  },
  {
    id: "4",
    title: "Tour Hội An",
    location: "Hội An",
    duration: "3 ngày 2 đêm",
    nights: 2,
    days: 3,
    rating: 4,
    price: 1945000,
    image: "https://picsum.photos/282/220",
    discount: 10,
    isFavorite: true,
  },
  {
    id: "5",
    title: "Tour Hà Giang",
    location: "Hà Giang",
    duration: "2 ngày 1 đêm",
    nights: 1,
    days: 2,
    rating: 4,
    price: 1530000,
    image: "https://picsum.photos/282/220",
    isFavorite: true,
  },
  {
    id: "6",
    title: "Tour Nha Trang",
    location: "Nha Trang",
    duration: "5 ngày 4 đêm",
    nights: 4,
    days: 5,
    rating: 5,
    price: 5940000,
    image: "https://picsum.photos/282/220",
    discount: 15,
    isFavorite: false,
  },
  {
    id: "7",
    title: "Tour Huế",
    location: "Huế",
    duration: "4 ngày 3 đêm",
    nights: 3,
    days: 4,
    rating: 5,
    price: 3945000,
    image: "https://picsum.photos/282/220",
    discount: 10,
    isFavorite: false,
  },
  {
    id: "8",
    title: "Tour Quy Nhơn",
    location: "Quy Nhơn",
    duration: "6 ngày 5 đêm",
    nights: 5,
    days: 6,
    rating: 5,
    price: 7945000,
    image: "https://picsum.photos/282/220",
    discount: 10,
    isFavorite: false,
  },
];

const Home = () => {
  const [clientTour, setClientTour] = useState<TourProps[]>([]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("vi-VN").format(price);
  };

  useEffect(() => {
    setClientTour(tours);
  }, []);

  if (!clientTour) return null;

  return (
    <div className="relative flex flex-col items-center justify-center bg-[#f6f6f6]">
      <section className="w-full min-h-[500px] relative flex">
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
      </section>
      {/* search */}
      <section className="transform -translate-y-1/2 px-4 z-20 bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg w-3/4 relative ">
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
      </section>
      {/* About me */}
      <section className="w-full py-12 bg-cover bg-center relative">
        {/* Background overlay with stripes */}
        <div className="absolute inset-0 z-0"></div>

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
            <Card className="border-none shadow-sm backdrop-blur-sm bg-[#F6F6F6]">
              <CardContent className="pt-6 text-center">
                <div className="flex justify-center items-center mb-8">
                  <Image src={notify} alt="Notify" width={80} height={80} />
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
            <Card className="border-none shadow-sm backdrop-blur-sm bg-[#F6F6F6]">
              <CardContent className="pt-6 text-center">
                <div className="flex justify-center items-center mb-8">
                  <Image src={location} alt="Location" width={80} height={80} />
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
            <Card className="border-none shadow-sm backdrop-blur-sm bg-[#F6F6F6]">
              <CardContent className="pt-6 text-center">
                <div className="flex justify-center items-center mb-8">
                  <Image src={share} alt="Share" width={80} height={80} />
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
      </section>
      {/* uu dai tour */}
      <section className="container mx-auto px-4 py-12">
        {/* title */}
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-[#00315C] items-center text-2xl">
            ƯU ĐÃI HOT HÔM NAY
          </h2>
          <div className="flex items-center">
            <span className="text-[#497E91] pr-3">
              CHƯƠNG TRÌNH DIỄN RA TRONG{" "}
            </span>
            <div className="flex grid-cols-1 ">
              <span className="bg-[#F27052] px-2 py-2 text-white rounded-sm font-bold">
                10
              </span>
              <span className="text-[#F27052] font-bold items-center justify-center flex px-1">
                :
              </span>
              <span className="bg-[#F27052] px-2 py-2 text-white rounded-sm font-bold">
                20
              </span>
              <span className="text-[#F27052] font-bold items-center justify-center flex px-1">
                :
              </span>
              <span className="bg-[#F27052] px-2 py-2 text-white rounded-sm font-bold">
                30
              </span>
            </div>
          </div>
        </div>
        {/* tour */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-8">
          {clientTour.map((tour) => {
            return (
              <div key={tour.id} className="overflow-hidden group">
                <Card className="border-none shadow-sm bg-white/80 rounded-md">
                  <CardHeader className="p-0 relative">
                    <Image
                      src={tour.image}
                      alt={tour.title}
                      width={282}
                      height={220}
                      className="rounded-t-md self-center w-full h-[220px] object-cover"
                    />
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col space-y-2">
                      <h3 className="font-light text-[#00315C] mt-4 self-start">
                        {tour.title}
                      </h3>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                          <ClockIcon />
                          <p className="text-[#707070] text-sm font-light">
                            {tour.duration}
                          </p>
                        </div>
                        <ReactStars value={tour.rating} edit={false} />
                      </div>
                    </div>
                    <div className="bg-[#D1D1D1] w-full border my-4"></div>
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-[#00315C]">
                        {formatPrice(tour.price)} đ
                      </span>
                      <Button className="text-orange-500 border-orange-500 hover:bg-orange-50 font-bold bg-white">
                        Xem chi tiết
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </section>
      <section className="container mx-auto px-4 py-12">
        <div className="self-center text-center">
          <p className="text-[#497E91] text-base">
            CHẤT LƯỢNG VÀ UY TÍN LÀ ƯU TIÊN HÀNG ĐẦU
          </p>
          <h3 className="text-3xl font-bold text-blue-900 mb-2">
            HỢP TÁC CÙNG CHÚNG TÔI
          </h3>
        </div>
        <div className="container flex justify-between items-center">
          <div>
            <div className="py-4">
              <div className="flex items-center py-3">
                <TickIcon className="mr-4" />
                <p className="text-[#00315C] text-lg">Đăng ký hoàn toàn miễn phí trong 15 phút</p>
              </div>
              <div className="flex items-center py-3">
                <TickIcon className="mr-4" />
                <p className="text-[#00315C] text-lg">Tiếp cận hàng triệu khách hàng tiềm năng</p>
              </div>
              <div className="flex items-center py-3">
                <TickIcon className="mr-4" />
                <p className="text-[#00315C] text-lg">Dễ dàng quản lý mọi nơi</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between lg:justify-start gap-10 sm:gap-20">
              <div className="flex flex-col items-center max-w-[282px]">
                <p className="text-[#F27052] font-bold text-8xl">20K+</p>
                <p className="text-[#888888] text-base max-w-[200px] mx-auto mt-4 text-center">Nhà cung cấp dịch vụ du lịch, nhà hàng</p>
              </div>
              <div className="border h-20 border-[#E7E7E7] self-center hidden sm:block"></div>
              <div className="flex flex-col items-center max-w-[282px]">
                <p className="text-[#F27052] font-bold text-8xl">15K+</p>
                <p className="text-[#888888] text-base mt-4 text-center">Khách hàng tiếp cận</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full bg-[#DEEBEF]">
              <Image
                src={cover}
                alt="Happy couple traveling"
                width={487}
                height={501}
                className="object-cover absolute z-9999 -top-3"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
