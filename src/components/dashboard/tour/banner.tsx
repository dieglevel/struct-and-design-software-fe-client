import Image from "next/image";
import tourBanner from "@/assets/images/tour-banner.png";

export const BannerTourComponent = () => {
    return (
        <div className="relative w-full my-8">
            <Image src={tourBanner} className="object-cover w-full h-96 " alt="Tour Banner" />
            <div className="flex items-center justify-center flex-col text-center mt-5 w-96 absolute top-1/2 left-1/2 -bottom-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <h3 className="font-serif">Rộn ràng hè sang</h3>
                <div className="bg-colorbrand-burntSienna-500 py-3 px-8 rounded-full my-8">
                    <h1 className="text-4xl text-white text">Hơn 1000 tours</h1>
                </div>
                <h3 className="text-gray-500 font-bold text-2xl">
                    Mới lạ - Chất lượng từ Bắc vào Nam
                </h3>
            </div>
        </div>
    );
};
