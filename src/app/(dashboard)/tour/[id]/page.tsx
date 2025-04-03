import tourDetailBanner from '@/assets/images/tour_detail_header.png'
import Image from 'next/image'
export default function TourDetailPage(param: { id: string }) {
  return (
    <div className="relative h-52 w-full">
      <Image src={tourDetailBanner} alt="Tour Banner" className="h-full w-full object-cover" />
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black text-center opacity-50">
        <h1 className="text-3xl font-bold text-white">Tour detail</h1>
        <p className="mt-2 text-sm text-white">
          <a href="/tour">Tour</a> &gt; Tour Detail
        </p>
      </div>
    </div>
  )
}
