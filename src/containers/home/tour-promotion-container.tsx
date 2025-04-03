import { Button } from "@/components/ui";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { ClockIcon } from "@/assets/svgs";
import { useState, useEffect } from "react";
import ReactStars from "react-stars";
import api from "@/libs/axios/axios.config";
import { BaseResponse } from "@/types";
import { ITourEntity } from "@/models/response/tour";


export const TourPromotionComponent = () => {
  const [clientTour, setClientTour] = useState<BaseResponse<ITourEntity[]>>();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("vi-VN").format(price);
  };

  const getTour = async () => {
    try {
      const res = await api.get(`${process.env.NEXT_PUBLIC_BOOKING_SERVICE}/tours`);
      if (res.data.data) {
        return res.data;
      }
    } catch (error) {
      console.error("Lỗi khi gọi API lấy tour:", error);
    }
  };

  useEffect(() => {
    const fetchTour = async () => {
      const tours = await getTour();
      console.log(tours)
      setClientTour(tours);
    };
    fetchTour();
  }, []);

  if (!clientTour) return null;
  return (
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
        {clientTour.data.slice(0,8).map((tour) => {
          return (
            <div key={tour.tourId} className="overflow-hidden group">
              <Card className="border-none shadow-sm bg-white/80 rounded-md">
                <CardHeader className="p-0 relative">
                  <Image
                    src={tour.thumbnail}
                    alt={tour.name}
                    width={280}
                    height={220}
                    
                    className="rounded-t-md self-center w-full h-[220px] object-cover"
                  />
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col space-y-2">
                    <h3 className="font-light text-[#00315C] mt-4 self-start min-h-12 line-clamp-2">
                      {tour.name}
                    </h3>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-2">
                        <ClockIcon />
                        <p className="text-[#707070] text-sm font-light">
                          {tour.duration}
                        </p>
                      </div>
                      <ReactStars value={5} edit={false} />
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
  );
};
