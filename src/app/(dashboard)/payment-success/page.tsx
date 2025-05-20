'use client'
import { LogoICon } from '@/assets/svgs'
import checked from '@/assets/images/checked.png'
import Image from 'next/image'
import { redirect } from 'next/navigation'
function PaymentSuccessPage() {
  return (
    <div className="flex h-[80vh] flex-col items-center justify-center space-y-6 bg-white px-4">
      <div className="flex flex-col items-center space-y-1">
        <LogoICon className="w-30 m-auto h-40" />
      </div>
      <div className="text-6xl text-colorbrand-burntSienna-600">
        <Image src={checked} height={120} width={120} alt="check-payment" />
      </div>

      <h2 className="text-xl font-semibold text-[#1C3554]">Thanh toán thành công</h2>
      <button
        onClick={() => {
          redirect('/home')
        }}
        className="bg-text-colorbrand-burntSienna-600 rounded px-6 py-2 font-semibold text-white transition-all hover:bg-colorbrand-burntSienna-400"
      >
        Quay lại trang chủ
      </button>
      <a href="intent://payment-success#Intent;scheme=travelsummornersrift;package=com.anonymous.structureanddesignsoftware;end">
        Open App
      </a>
    </div>
  )
}

export default PaymentSuccessPage
