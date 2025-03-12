import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import notify from "@/assets/images/notify.png";
import share from "@/assets/images/share.png";
import location from "@/assets/images/location.png";

export const SubComponent = () => {
  return (
    <section className="w-full py-12 bg-cover bg-center relative">
      {/* Background overlay with stripes */}
      <div className="absolute inset-0 z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-2">
            3 BƯỚC ĐỂ CÓ MỘT CHUYẾN ĐI HOÀN HẢO
          </p>
          <h2 className="text-3xl font-bold text-blue-900 md:text-4xl">
            TÌM CHUYẾN ĐI CHO BẠN
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <Card className="border-none shadow-sm backdrop-blur-sm bg-[#F6F6F6]">
            <CardContent className="pt-6 text-center">
              <div className="flex justify-center items-center mb-8">
                <Image src={notify} alt="Notify" width={80} height={80} />
              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">
                Hãy cho chúng tôi biết bạn muốn làm gì?
              </h3>
              <p className="text-gray-600 text-sm">
                Lorem ipsum is that it has a more-or-less normal distribution of
                letters, as opposed to using
              </p>
            </CardContent>
          </Card>

          {/* Step 2 */}
          <Card className="border-none shadow-sm backdrop-blur-sm bg-[#F6F6F6]">
            <CardContent className="pt-6 text-center">
              <div className="flex justify-center items-center mb-8">
                <Image src={location} alt="Location" width={80} height={80} />
              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">
                Chia sẻ địa điểm du lịch của bạn
              </h3>
              <p className="text-gray-600 text-sm">
                Lorem ipsum is that it has a more-or-less normal distribution of
                letters, as opposed to using
              </p>
            </CardContent>
          </Card>

          {/* Step 3 */}
          <Card className="border-none shadow-sm backdrop-blur-sm bg-[#F6F6F6]">
            <CardContent className="pt-6 text-center">
              <div className="flex justify-center items-center mb-8">
                <Image src={share} alt="Share" width={80} height={80} />
              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">
                Chia sẻ sở thích du lịch của bạn
              </h3>
              <p className="text-gray-600 text-sm">
                Lorem ipsum is that it has a more-or-less normal distribution of
                letters, as opposed to using
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
