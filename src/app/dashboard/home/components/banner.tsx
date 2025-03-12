import Image from "next/image";
import banner from "@/assets/images/banner.png";

export const BannerTourComponent = () => {
    return (
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
    );
};