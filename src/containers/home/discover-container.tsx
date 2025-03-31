import { TickIcon } from "@/assets/svgs";
import Image from "next/image";
import cover from "@/assets/images/cover.png";

export const DiscoverComponent = () => {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="self-center text-center mb-16">
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
              <p className="text-[#00315C] text-lg">
                Đăng ký hoàn toàn miễn phí trong 15 phút
              </p>
            </div>
            <div className="flex items-center py-3">
              <TickIcon className="mr-4" />
              <p className="text-[#00315C] text-lg">
                Tiếp cận hàng triệu khách hàng tiềm năng
              </p>
            </div>
            <div className="flex items-center py-3">
              <TickIcon className="mr-4" />
              <p className="text-[#00315C] text-lg">Dễ dàng quản lý mọi nơi</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-between lg:justify-start gap-10 sm:gap-20">
            <div className="flex flex-col items-center max-w-[282px]">
              <p className="text-[#F27052] font-bold text-8xl">20K+</p>
              <p className="text-[#888888] text-base max-w-[200px] mx-auto mt-4 text-center">
                Nhà cung cấp dịch vụ du lịch, nhà hàng
              </p>
            </div>
            <div className="border h-20 border-[#E7E7E7] self-center hidden sm:block"></div>
            <div className="flex flex-col items-center max-w-[282px]">
              <p className="text-[#F27052] font-bold text-8xl">15K+</p>
              <p className="text-[#888888] text-base mt-4 text-center">
                Khách hàng tiếp cận
              </p>
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
  );
};
