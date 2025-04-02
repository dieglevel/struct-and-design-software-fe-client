import Image from 'next/image'
import banner from '@/assets/images/banner.png'

export const BannerTourComponent = () => {
  return (
    <section className="relative flex min-h-[500px] w-full">
      <Image src={banner} fill style={{ objectFit: 'cover', objectPosition: 'center' }} alt="Background" />

      {/* Content */}
      <div className="container relative z-10 mx-auto flex flex-1 flex-col justify-center px-4">
        <div className="mt-8 space-y-2 text-center">
          <h1 className="text-4xl font-bold text-[#0A2472]">ĐANG CHỜ ĐỢI CHÚNG TA!</h1>
          <p className="text-lg text-[#0A2472]/80">TRẢI NGHIỆM TRỌN VẸN - GIÁ CẢ PHẢI CHĂNG</p>
        </div>
      </div>
    </section>
  )
}
