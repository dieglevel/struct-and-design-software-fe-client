'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import banner from '@/assets/images/banner.png'

const BannerSale = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="relative h-[500px] w-full overflow-hidden rounded-b-3xl bg-blue-950 text-white"
    >
      {/* Background image */}
      <Image src={banner} alt="Banner Sale" layout="fill" objectFit="cover" className="z-0 opacity-80" />

      {/* Overlay content */}
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-4 text-center">
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-4 text-4xl font-bold md:text-5xl"
        >
          <span> SALE DU LỊCH MÙA HÈ</span>
          <motion.span
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5, ease: 'easeOut' }}
            className="font-bold text-[#F97916]"
          >
            {' '}GIẢM ĐẾN 50%
          </motion.span>
        </motion.h1>
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mb-6 max-w-xl text-lg"
        >
          Đặt tour ngay hôm nay và khám phá những điểm đến tuyệt vời với ưu đãi siêu hấp dẫn!
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="rounded-full bg-orange-500 px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-orange-600"
        >
          Khám phá ngay
        </motion.button>
      </div>
    </motion.div>
  )
}

export default BannerSale
