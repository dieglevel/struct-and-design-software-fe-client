import Image from 'next/image'
import tourBanner from '@/assets/images/tour-banner.png'

export const BannerTourComponent = () => {
  return (
    <div className="relative w-full pt-16">
      <Image src={tourBanner} className="h-96 w-full object-cover" alt="Tour Banner" />
      <div className="absolute -bottom-1/2 left-1/2 top-1/2 mt-5 flex w-96 -translate-x-1/2 -translate-y-1/2 transform flex-col items-center justify-center text-center">
        <h3 className="font-serif">Rộn ràng hè sang</h3>
        <div className="my-8 rounded-full bg-colorbrand-burntSienna-500 px-8 py-3">
          <h1 className="text text-4xl text-white">Hơn 1000 tours</h1>
        </div>
        <h3 className="text-2xl font-bold text-gray-500">Mới lạ - Chất lượng từ Bắc vào Nam</h3>
      </div>
    </div>
  )
}
