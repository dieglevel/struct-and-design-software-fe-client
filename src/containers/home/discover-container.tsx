import { TickIcon } from '@/assets/svgs'
import Image from 'next/image'
import cover from '@/assets/images/cover.png'

export const DiscoverComponent = () => {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="mb-16 self-center text-center">
        <p className="text-base text-[#497E91]">CHẤT LƯỢNG VÀ UY TÍN LÀ ƯU TIÊN HÀNG ĐẦU</p>
        <h3 className="mb-2 text-3xl font-bold text-blue-900">HỢP TÁC CÙNG CHÚNG TÔI</h3>
      </div>
      <div className="container flex items-center justify-between">
        <div>
          <div className="py-4">
            <div className="flex items-center py-3">
              <TickIcon className="mr-4" />
              <p className="text-lg text-[#00315C]">Đăng ký hoàn toàn miễn phí trong 15 phút</p>
            </div>
            <div className="flex items-center py-3">
              <TickIcon className="mr-4" />
              <p className="text-lg text-[#00315C]">Tiếp cận hàng triệu khách hàng tiềm năng</p>
            </div>
            <div className="flex items-center py-3">
              <TickIcon className="mr-4" />
              <p className="text-lg text-[#00315C]">Dễ dàng quản lý mọi nơi</p>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-10 sm:flex-row sm:gap-20 lg:justify-start">
            <div className="flex max-w-[282px] flex-col items-center">
              <p className="text-8xl font-bold text-[#F27052]">20K+</p>
              <p className="mx-auto mt-4 max-w-[200px] text-center text-base text-[#888888]">
                Nhà cung cấp dịch vụ du lịch, nhà hàng
              </p>
            </div>
            <div className="hidden h-20 self-center border border-[#E7E7E7] sm:block"></div>
            <div className="flex max-w-[282px] flex-col items-center">
              <p className="text-8xl font-bold text-[#F27052]">15K+</p>
              <p className="mt-4 text-center text-base text-[#888888]">Khách hàng tiếp cận</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end">
          <div className="relative h-[300px] w-[300px] rounded-full bg-[#DEEBEF] md:h-[450px] md:w-[450px]">
            <Image
              src={cover}
              alt="Happy couple traveling"
              width={487}
              height={501}
              className="z-9999 absolute -top-3 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
