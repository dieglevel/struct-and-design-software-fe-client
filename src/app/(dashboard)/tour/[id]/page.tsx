import tourDetailBanner from "@/assets/images/tour_detail_header.png";
import Image from "next/image";
export default function TourDetailPage(param: { id: string }) {
    return (
        <div className="w-full h-52 relative">
            <Image
                src={tourDetailBanner}
                alt="Tour Banner"
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-50 flex flex-col justify-center items-center text-center">
                <h1 className="text-3xl font-bold text-white">Tour detail</h1>
                <p className="text-sm text-white mt-2">
                    <a href="/tour">Tour</a> &gt; Tour Detail
                </p>
            </div>
        </div>
    );
}
