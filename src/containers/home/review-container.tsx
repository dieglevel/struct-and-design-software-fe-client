import { Card } from "@/components/ui/card";
import Image from "next/image";
import React from "react";
import avatar from "@/assets/images/avatar.png";

export const ReviewContainer = () => {
  return (
    <section className="container mx-auto px-4 py-8 md:py-12">
      <div className="self-center text-center mb-8 md:mb-16">
        <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-2 uppercase">
          khách hàng v - travel nói gì
        </h3>
      </div>
      <div className="flex justify-center">
        <Card className="relative md:translate-x-16 w-full max-w-4xl">
          <div className="absolute top-0 left-1/2 -translate-x-1/4 -translate-y-1/4 md:top-1/2 md:-translate-y-1/2 md:left-0 md:-translate-x-1/4 lg:-translate-x-1/2">
            <Image
              src={avatar}
              alt={`Testimonial`}
              width={385}
              height={410}
              className="w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 xl:w-96 xl:h-auto object-cover"
            />
          </div>

          <div className="overflow-hidden flex flex-col border border-[#F27052]/30 rounded-lg mx-auto shadow-[0_4px_24px_rgba(242,112,82,0.15),0_1px_6px_rgba(242,112,82,0.2)] w-full min-h-[300px] md:min-h-[400px] lg:min-h-[480px] items-center justify-center mt-16 md:mt-0">
            {/* Content section */}
            <div className="p-4 md:p-6 lg:p-8 flex flex-col justify-center relative w-full">
              <div className="text-left w-full md:w-3/4 md:ml-auto">
                <div className="mb-4 md:mb-6 flex">
                  <span className="text-4xl md:text-6xl lg:text-8xl text-[#497E91] font-serif mr-2 md:mr-5">
                    &ldquo;
                  </span>
                  <h3 className="text-lg md:text-2xl lg:text-4xl font-bold text-gray-800 mb-2 md:mb-4 translate-y-2 md:translate-y-5">
                    Lorem Ipsum is simply dummy printing
                  </h3>
                </div>

                <p className="text-gray-600 mb-4 md:mb-6 text-xs md:text-sm lg:text-base">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <div className="text-right">
                  <p className="text-[#00315C] font-bold text-sm md:text-base">
                    _Esther Howard_
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
