import Image from 'next/image'
import tourBanner from '@/assets/images/tour-banner.png'
import Link from 'next/link'

export const BannerTourComponent = () => {
  return (
    <div className="relative h-52 w-full">
      <Image src={tourBanner} alt="Tour Banner" className="h-full w-full object-cover" />
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black text-center opacity-50">
        <h1 className="text-3xl font-bold text-white">Tour detail</h1>
        <p className="mt-2 text-sm text-white">
          <Link href="/home">Trang chủ</Link> &gt; Tìm kiếm
        </p>
      </div>
    </div>
  )
}
