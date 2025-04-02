import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import notify from '@/assets/images/notify.png'
import share from '@/assets/images/share.png'
import location from '@/assets/images/location.png'

export const SubComponent = () => {
  return (
    <section className="relative w-full bg-cover bg-center py-12">
      {/* Background overlay with stripes */}
      <div className="absolute inset-0 z-0"></div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-wider text-primary">
            3 BƯỚC ĐỂ CÓ MỘT CHUYẾN ĐI HOÀN HẢO
          </p>
          <h2 className="text-3xl font-bold text-blue-900 md:text-4xl">TÌM CHUYẾN ĐI CHO BẠN</h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Step 1 */}
          <Card className="border-none bg-[#F6F6F6] shadow-sm backdrop-blur-sm">
            <CardContent className="pt-6 text-center">
              <div className="mb-8 flex items-center justify-center">
                <Image src={notify} alt="Notify" width={80} height={80} />
              </div>
              <h3 className="mb-2 text-lg font-bold text-blue-900">Hãy cho chúng tôi biết bạn muốn làm gì?</h3>
              <p className="text-sm text-gray-600">
                Lorem ipsum is that it has a more-or-less normal distribution of letters, as opposed to using
              </p>
            </CardContent>
          </Card>

          {/* Step 2 */}
          <Card className="border-none bg-[#F6F6F6] shadow-sm backdrop-blur-sm">
            <CardContent className="pt-6 text-center">
              <div className="mb-8 flex items-center justify-center">
                <Image src={location} alt="Location" width={80} height={80} />
              </div>
              <h3 className="mb-2 text-lg font-bold text-blue-900">Chia sẻ địa điểm du lịch của bạn</h3>
              <p className="text-sm text-gray-600">
                Lorem ipsum is that it has a more-or-less normal distribution of letters, as opposed to using
              </p>
            </CardContent>
          </Card>

          {/* Step 3 */}
          <Card className="border-none bg-[#F6F6F6] shadow-sm backdrop-blur-sm">
            <CardContent className="pt-6 text-center">
              <div className="mb-8 flex items-center justify-center">
                <Image src={share} alt="Share" width={80} height={80} />
              </div>
              <h3 className="mb-2 text-lg font-bold text-blue-900">Chia sẻ sở thích du lịch của bạn</h3>
              <p className="text-sm text-gray-600">
                Lorem ipsum is that it has a more-or-less normal distribution of letters, as opposed to using
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
