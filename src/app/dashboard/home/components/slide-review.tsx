"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import avatar1 from "@/assets/images/avatar1.png";
import ReactStars from "react-stars";
import { type CarouselApi } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay"

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: "John Doe",
    avatar: avatar1,
    rating: 5,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 2,
    name: "Jane Smith",
    avatar: avatar1,
    rating: 5,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 3,
    name: "Michael Brown",
    avatar: avatar1,
    rating: 5,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 4,
    name: "Sarah Johnson",
    avatar: avatar1,
    rating: 5,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 5,
    name: "Raiden",
    avatar: avatar1,
    rating: 5,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 6,
    name: "Kazuma",
    avatar: avatar1,
    rating: 5,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 7,
    name: "Hutao",
    avatar: avatar1,
    rating: 5,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 8,
    name: "Zhong li",
    avatar: avatar1,
    rating: 5,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 9,
    name: "Nahida",
    avatar: avatar1,
    rating: 5,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 10,
    name: "Tu Nguyen",
    avatar: avatar1,
    rating: 5,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

export const SlideReview = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    const handleSelect = () => {
      setCurrent(api.selectedScrollSnap() + 1);
    };

    api.on("select", handleSelect);

    return () => {
      api.off("select", handleSelect);
    };
  }, [api]);

  return (
    <div className="w-full py-12">
      <div className="container mx-auto px-4">
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="pl-4 basis-1/4">
                <div className="p-1">
                  <Card className="border-none shadow-none">
                    <CardContent className="flex flex-col items-center p-6">
                      <div className="flex w-full">
                        <div className="mb-4 mr-5 rounded-full overflow-hidden h-20 w-20">
                          <Image
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            width={160}
                            height={80}
                            className="object-cover"
                          />
                        </div>
                        <div className="flex flex-col justify-center">
                          <div className="">{testimonial.name}</div>
                          <ReactStars
                            count={5}
                            size={24}
                            value={testimonial.rating}
                            edit={false}
                          />
                        </div>
                      </div>

                      <p className="text-sm text-gray-600">
                        {testimonial.text}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="flex justify-center mt-6 gap-2 w-full h-14">
          {Array.from({ length: Math.ceil(count / 4) }).map((_, i) => {
            const isActive = Math.floor(current / 4) === i;
            return (
              <button
                key={i}
                className={`
                    h-1.5 rounded-full transition-all
                    ${
                      isActive
                        ? "w-6 bg-orange-500"
                        : "w-1.5 bg-gray-300 hover:bg-gray-400"
                    }
                  `}
                onClick={() => api?.scrollTo(i * 4)}
                aria-label={`Go to slide ${i + 1}`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
