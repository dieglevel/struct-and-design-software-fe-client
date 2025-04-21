'use client'
import { LogoICon } from '@/assets/svgs'
import { RegisterRequestDTO } from '@/models/request/register.request.dto'
import { input } from '@mui/material'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
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
import { useState } from 'react'
import { redirect } from 'next/navigation'
import api from '@/libs/axios/axios.config'

const registerSchema = yup.object().shape({
  fullName: yup.string().required('Họ và tên không được để trống'),
  email: yup.string().email('Email không hợp lệ').required('Email không được để trống'),
  phone: yup.string().matches(/^\d+$/, 'Số điện thoại không hợp lệ').required('Số điện thoại không được để trống'),
  username: yup.string().required('Username không được để trống'),
  password: yup.string().min(6, 'Mật khẩu phải có ít nhất 6 ký tự').required('Mật khẩu không được để trống'),
  role: yup.string().default('user'),
})

const RegisterPage = () => {
  const [isModalOpen, setModalOpen] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterRequestDTO>({
    resolver: yupResolver(registerSchema),
  })

  const onSubmit = async (data: RegisterRequestDTO) => {
    try {
      const res = await api.post(
        `${process.env.NEXT_PUBLIC_USER_SERVICE}/users/register`,
        Object.assign(data, {
          role: 'USER',
        }),
      )
      if (res.data) {
        setIsSuccess(true)
      }
    } catch (error) {
      setModalOpen(true)
    }
  }

  return (
    <div className="flex w-[30%] flex-col items-center justify-center rounded-md bg-white pb-2 shadow-sm">
      <LogoICon width={140} height={140} />
      <div className="mb-2">
        <h1 className="text-center text-2xl font-bold text-colorbrand-midnightBlue-950">Đăng ký</h1>
        <p className="text-center text-sm font-thin text-colorbrand-grayWhite-500">
          Đồng hành với bạn trong các chuyến đi.
        </p>
      </div>
      <div className="w-full px-6">
        <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
          {/* Họ và Tên */}
          <label className="my-1 text-sm font-bold text-colorbrand-midnightBlue-950">
            Họ và tên
            <span className="pl-1 text-lg text-colorbrand-burntSienna-600">*</span>
          </label>
          <input
            {...register('fullName')}
            placeholder="Nhập họ và tên"
            className="bg-colorbrand-burnSienna-50 w-full rounded-sm border-1 border-slate-200 px-4 py-2 outline-none"
          />
          <p className="text-[12px] mt-1 text-red-500">{errors.fullName?.message}</p>

          <div className="my-1 flex gap-4">
            {/* Email */}
            <div className="flex-1">
              <label className="text-sm font-bold text-colorbrand-midnightBlue-950">
                Email
                <span className="pl-1 text-lg text-colorbrand-burntSienna-600">*</span>
              </label>
              <input
                {...register('email')}
                placeholder="Nhập email"
                className="bg-colorbrand-burnSienna-50 w-full rounded-sm border-1 border-slate-200 px-4 py-2 outline-none"
              />
              <p className="text-[12px] mt-1 text-red-500">{errors.email?.message}</p>
            </div>

            {/* Số điện thoại */}
            <div className="flex-1">
              <label className="text-sm font-bold text-colorbrand-midnightBlue-950">
                Số điện thoại
                <span className="pl-1 text-lg text-colorbrand-burntSienna-600">*</span>
              </label>
              <input
                {...register('phone')}
                placeholder="Nhập số điện thoại"
                className="bg-colorbrand-burnSienna-50 w-full rounded-sm border-1 border-slate-200 px-4 py-2 outline-none"
              />
              <p className="text-[12px] mt-1 text-red-500">{errors.phone?.message}</p>
            </div>
          </div>

          {/* Username */}
          <label className="my-1 text-sm font-bold text-colorbrand-midnightBlue-950">
            Tên đăng nhập
            <span className="pl-1 text-lg text-colorbrand-burntSienna-600">*</span>
          </label>
          <input
            {...register('username')}
            placeholder="Nhập username"
            className="bg-colorbrand-burnSienna-50 w-full rounded-sm border-1 border-slate-200 px-4 py-2 outline-none"
          />
          <p className="text-[12px] mt-1 text-red-500">{errors.username?.message}</p>

          {/* Mật khẩu */}
          <label className="my-1 text-sm font-bold text-colorbrand-midnightBlue-950">
            Mật khẩu
            <span className="pl-1 text-lg text-colorbrand-burntSienna-600">*</span>
          </label>
          <input
            {...register('password')}
            type="password"
            placeholder="Nhập mật khẩu"
            className="bg-colorbrand-burnSienna-50 w-full rounded-sm border-1 border-slate-200 px-4 py-2 outline-none"
          />
          <p className="text-[12px] mt-1 text-red-500">{errors.password?.message}</p>

          {/* Nút Đăng ký */}
          <button type="submit" className="m-auto mt-4 w-full rounded-md bg-colorbrand-burntSienna-500 p-2 text-white">
            Đăng ký
          </button>

          <div className="mt-5 flex flex-row justify-center gap-2">
            <p className="text-sm text-colorbrand-grayWhite-500">Đã có tài khoản?</p>
            <a href="./login" className="text-sm text-colorbrand-burntSienna-500">
              Đăng nhập
            </a>
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

      <AlertDialog open={isSuccess} onOpenChange={() => setIsSuccess(false)}>
        <AlertDialogTrigger />
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Đăng nhập thành công</AlertDialogTitle>
            <AlertDialogDescription>
              Bạn đã đăng ký tài khoản thành công. Vui lòng đăng nhập để tiếp tục.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction
              onClick={() => {
                localStorage.removeItem('token')
                redirect('/login')
              }}
            >
              Tới trang login
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}

export default RegisterPage
