import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import notify from '@/assets/images/notify.png'
import share from '@/assets/images/share.png'
import location from '@/assets/images/location.png'
import { motion } from 'motion/react'

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.2,
    },
  }),
}
const steps = [
  {
    img: notify,
    title: 'Hãy cho chúng tôi biết bạn muốn làm gì?',
    desc: 'Lorem ipsum is that it has a more-or-less normal distribution of letters, as opposed to using',
  },
  {
    img: location,
    title: 'Chia sẻ địa điểm du lịch của bạn',
    desc: 'Lorem ipsum is that it has a more-or-less normal distribution of letters, as opposed to using',
  },
  {
    img: share,
    title: 'Chia sẻ sở thích du lịch của bạn',
    desc: 'Lorem ipsum is that it has a more-or-less normal distribution of letters, as opposed to using',
  },
]
export const SubComponent = () => {
  return (
    <div className="container relative z-10 mx-auto px-4">
      {/* Title Section with Animation */}
      <motion.div
        className="mb-12 text-center"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="mb-2 text-sm font-medium uppercase tracking-wider text-primary">
          3 BƯỚC ĐỂ CÓ MỘT CHUYẾN ĐI HOÀN HẢO
        </p>
        <h2 className="text-3xl font-bold text-blue-900 md:text-4xl">TÌM CHUYẾN ĐI CHO BẠN</h2>
      </motion.div>

      {/* Steps with Framer Motion */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            className="transition-all duration-300 ease-in-out"
          >
            <Card className="border-none bg-[#F6F6F6] shadow-sm backdrop-blur-sm">
              <CardContent className="pt-6 text-center">
                <div className="mb-8 flex items-center justify-center">
                  <Image src={step.img} alt={step.title} width={80} height={80} />
                </div>
                <h3 className="mb-2 text-lg font-bold text-blue-900">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.desc}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
