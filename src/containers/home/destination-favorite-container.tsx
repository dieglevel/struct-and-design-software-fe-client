import Image, { StaticImageData } from "next/image";
import React from "react";
import hoiAn from "@/assets/images/hoiAn.jpg";

interface Destination {
    id: number;
    title: string;
    subtitle: string;
    image: StaticImageData;
}

const destinations: Destination[] = [
  {
    id: 1,
    title: "Hội An",
    subtitle: "1800+ lượt khách",
    image: hoiAn,
  },
  {
    id: 2,
    title: "Hội An",
    subtitle: "1800+ lượt khách",
    image: hoiAn,
  },
  {
    id: 3,
    title: "Hội An",
    subtitle: "1800+ lượt khách",
    image: hoiAn,
  },
  {
    id: 4,
    title: "Hội An",
    subtitle: "1800+ lượt khách",
    image: hoiAn,
  },
  {
    id: 5,
    title: "Hội An",
    subtitle: "1800+ lượt khách",
    image: hoiAn,
  },
  {
    id: 6,
    title: "Hội An",
    subtitle: "1800+ lượt khách",
    image: hoiAn,
  },
];

export const DestinationFavoriteContainer = () => {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="self-center text-center mb-16">
        <h3 className="text-3xl font-bold text-blue-900 mb-2 uppercase">
          điểm đến yêu thích
        </h3>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-3 md:grid-rows-2 gap-8 h-[1060px]">
        {destinations.map((destination, index) => (
          <button
            className={`relative rounded-lg overflow-hidden bg-gradient-to-b from-[#ffffff5b]  to-[#1a191980] ${
              index%2===0 && index > 0 ? "col-span-2" : ""}`}
            key={destination.id}
          >
            <Image
              src={destination.image}
              alt={destination.title}
              fill
              className="object-cover -z-10"
            />
            <div className="absolute bottom-4 left-4">
              <p className="text-white font-bold text-xl">
                {destination.title}
              </p>
              <p className="text-[#FFC515] text-lg">{destination.subtitle}</p>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
};
