'use client'
import { LogoICon } from '@/assets/svgs'
import { useRouter } from 'next/navigation'
import React from 'react'
const InputOTPPage = () => {
  const router = useRouter()
  function confirmOTP(e: React.FormEvent) {
    e.preventDefault()
    router.push('/auth/change-password')
  }
  return (
    <div className="h-full max-h-[80%] w-full max-w-[80%] md:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/5">
      <LogoICon className="w-30 p-b m-auto h-[160px]" />
      <div className="pb-10">
        <h1 className="pt-10 text-center text-2xl font-bold text-colorbrand-midnightBlue-950">Quên mật khẩu?</h1>
        <p className="text-center text-base font-thin text-colorbrand-grayWhite-500 md:text-nowrap">
          Đừng lo chúng tôi sẽ giúp bạn khôi phục tài khoản.
        </p>
      </div>
      <div className="">
        <form className="flex flex-col">
          <label className="my-2 text-base font-bold text-colorbrand-midnightBlue-950">Nhập mã xác thực</label>
          <input
            type="text"
            placeholder="Nhập mã xác thực"
            className="rounded-md border-2 border-colorbrand-grayWhite-200 p-2"
          />
          <div className="flex flex-row justify-end gap-2">
            <p className="my-2 text-base text-colorbrand-grayWhite-200">Không nhận được mã?</p>
            <button className="text-colorbrand-burntSienna-500">
              <p className="text-colorbrand-burntSienna-600">Gửi lại</p>
            </button>
          </div>
          <div className="flex flex-col">
            <button
              onClick={confirmOTP}
              className="m-auto mt-10 w-1/2 rounded-md bg-colorbrand-burntSienna-500 p-2 text-colorbrand-grayWhite-50"
            >
              Tiếp theo
            </button>
            <div className="mt-5 flex flex-row justify-center gap-2">
              <p className="text-center text-sm text-colorbrand-grayWhite-500">Hoặc</p>
              <a href="./register" className="text-sm text-colorbrand-burntSienna-500">
                Tạo tài khoản mới
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
export default InputOTPPage
