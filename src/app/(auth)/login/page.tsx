'use client'
import { LoginRequestDTO } from '@/models/request'
import { LogoICon } from '../../../assets/svgs'
import { useForm } from 'react-hook-form'
import api from '@/libs/axios/axios.config'
import { useEffect, useState } from 'react'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
const LoginPage = () => {
  const { register, handleSubmit } = useForm<LoginRequestDTO>()
  const [isModalOpen, setModalOpen] = useState(false) // Trạng thái modal

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      window.location.href = '/home'
    }
  }, [])

  const onSubmit = async (data: LoginRequestDTO) => {
    try {
      const res = await api.post(`${process.env.NEXT_PUBLIC_USER_SERVICE}/auth/token`, data)
      if (res.data.data.token) {
        localStorage.setItem('token', res.data.data.token)
        window.location.reload()
      }
    } catch (error) {
      setModalOpen(true)
    }
  }

  return (
    <div className="h-full max-h-[80%] w-full max-w-[80%] md:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/5">
      <LogoICon className="w-30 p-b m-auto h-[160px]" />
      <div className="pb-10">
        <h1 className="pt-10 text-center text-2xl font-bold text-colorbrand-midnightBlue-950">Đăng nhập</h1>
        <p className="text-center text-base font-thin text-colorbrand-grayWhite-500 md:text-nowrap">
          Cùng V-Travel đồng h
        </p>
        ành với bạn trong các chuyến đi.
      </div>
      <div className="">
        <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
          <label className="my-2 text-base font-bold text-colorbrand-midnightBlue-950">
            Tên đăng nhập
            <span className="pl-1 text-lg text-colorbrand-burntSienna-600">*</span>
          </label>

          <input
            type="text"
            {...register('username', { required: true })}
            placeholder="Nhập tên đăng nhập"
            className="rounded-md border-2 border-colorbrand-grayWhite-200 p-2"
          />
          <label className="my-2 text-base font-bold text-colorbrand-midnightBlue-950">
            Nhập mật khẩu
            <span className="pl-1 text-lg text-colorbrand-burntSienna-600">*</span>
          </label>
          <input
            type="password"
            {...register('password', { required: true })}
            placeholder="Nhập mật khẩu"
            className="rounded-md border-2 border-colorbrand-grayWhite-200 p-2"
          />
          <div className="flex flex-row items-center justify-between">
            <div className="my-2 flex items-center gap-2">
              <input type="radio" name="keepStatusLogin" id="keepStatusLogin" className="h-4 w-4" />
              <label htmlFor="keepStatusLogin" className="text-sm text-colorbrand-grayWhite-500">
                Duy trì đăng nhập
              </label>
            </div>
            <a href="./forget-password" className="text-colorbrand-burntSienna-500">
              Quên mật khẩu?
            </a>
          </div>
          <div className="flex flex-col">
            <button
              className="m-auto mt-10 w-1/2 rounded-md bg-colorbrand-burntSienna-500 p-2 text-colorbrand-grayWhite-50"
              type="submit"
            >
              Đăng nhập
            </button>
            <div className="mt-5 flex flex-row justify-center gap-2">
              <p className="text-center text-sm text-colorbrand-grayWhite-500">Bạn chưa có tài khoản?</p>
              <a href="./register" className="text-sm text-colorbrand-burntSienna-500">
                Đăng ký ngay
              </a>
            </div>
          </div>
        </form>
      </div>
      <AlertDialog open={isModalOpen} onOpenChange={setModalOpen}>
        <AlertDialogTrigger />
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Đăng nhập thất bại</AlertDialogTitle>
            <AlertDialogDescription>
              Kiểm tra lại tên đăng nhập hoặc mật khẩu của bạn và thử lại.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={() => setModalOpen(false)}>Đóng</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
export default LoginPage
