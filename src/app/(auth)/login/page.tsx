'use client'
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
import { LoginRequestDTO } from '@/models/request'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { LogoICon } from '../../../assets/svgs'
import useAuth from '@/hooks/api/useAuth'
import Image from 'next/image'

import googleIcon from '@/assets/images/google.png'

import github from '@/assets/images/github.png'

const LoginPage = () => {
  const { register, handleSubmit } = useForm<LoginRequestDTO>()
  const [isModalOpen, setModalOpen] = useState(false) // Trạng thái modal
  const { handleLogin, handleLoginGoogle, handleLoginGitHub } = useAuth()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      window.location.href = '/home'
    }
  }, [])

  const onSubmit = async (data: LoginRequestDTO) => {
    await handleLogin({ ...data })
  }

  return (
    <div className="w-full rounded-md bg-white py-2 shadow-sm md:w-1/2 lg:w-1/3 xl:w-1/3 2xl:w-[30%]">
      <LogoICon className="w-30 p-b m-auto h-[160px]" />
      <div className="pb-4">
        <h1 className="pt-6 text-center text-2xl font-bold text-colorbrand-midnightBlue-950">Đăng nhập</h1>
        <p className="text-center text-sm font-thin text-colorbrand-grayWhite-500 md:text-nowrap">
          Cùng V-Travel đồng hành với bạn trong các chuyến đi.
        </p>
      </div>
      <div className="px-6">
        <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
          <label className="my-2 text-base font-bold text-colorbrand-midnightBlue-950">
            Tên đăng nhập
            <span className="pl-1 text-lg text-colorbrand-burntSienna-600">*</span>
          </label>

          <input
            type="text"
            {...register('username', { required: true })}
            placeholder="Nhập tên đăng nhập"
            className="rounded-md border-1 border-colorbrand-grayWhite-200 bg-colorbrand-burntSienna-50 p-2 px-4 text-slate-600 outline-none"
          />
          <label className="my-2 text-base font-bold text-colorbrand-midnightBlue-950">
            Mật khẩu
            <span className="pl-1 text-lg text-colorbrand-burntSienna-600">*</span>
          </label>
          <input
            type="password"
            {...register('password', { required: true })}
            placeholder="Nhập mật khẩu"
            className="rounded-md border-1 border-colorbrand-grayWhite-200 bg-colorbrand-burntSienna-50 p-2 px-4 text-slate-600 outline-none"
          />
          <div className="flex flex-row justify-end pt-2">
            <a href="./forget-password" className="text-colorbrand-burntSienna-500">
              Quên mật khẩu?
            </a>
          </div>
          <div className="flex flex-col">
            <button
              className="m-auto mt-4 w-full rounded-md bg-colorbrand-burntSienna-500 p-2 text-colorbrand-grayWhite-50"
              type="submit"
            >
              Đăng nhập
            </button>
            <span className="my-2 text-center text-sm text-slate-600">Hoặc</span>
            <div className="flex gap-2">
              <button
                className="m-auto flex w-full items-center justify-center gap-2 rounded-md border-[1px] border-slate-200 bg-white p-2 text-slate-700"
                onClick={handleLoginGoogle}
              >
                <Image alt="" height={24} width={24} src={googleIcon} />
                Đăng nhập google
              </button>{' '}
              <button
                onClick={handleLoginGitHub}
                className="m-auto flex w-full items-center justify-center gap-2 rounded-md border-[1px] border-slate-200 bg-white p-2 text-slate-700"
              >
                <Image alt="" height={24} width={24} src={github} />
                Đăng nhập github
              </button>
            </div>

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
