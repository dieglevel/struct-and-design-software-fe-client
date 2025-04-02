'use client'
import { LogoICon } from '@/assets/svgs'
import { RegisterRequestDTO } from '@/models/request/register.request.dto'
import { TextField } from '@mui/material'
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
      console.log(res.data)
      if (res.data.data) {
        setIsSuccess(true)
      }
    } catch (error) {
      setModalOpen(true)
    }
  }

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center rounded-md border-2 border-colorbrand-grayWhite-200 p-5">
      <LogoICon className="w-30 h-40" />
      <div className="pb-10">
        <h1 className="pt-10 text-center text-2xl font-bold text-colorbrand-midnightBlue-950">Đăng ký</h1>
        <p className="text-center text-base font-thin text-colorbrand-grayWhite-500">
          Đồng hành với bạn trong các chuyến đi.
        </p>
      </div>
      <div className="w-full lg:w-1/2">
        <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
          {/* Họ và Tên */}
          <label className="my-2 text-base font-bold text-colorbrand-midnightBlue-950">Họ và tên *</label>
          <TextField
            {...register('fullName')}
            placeholder="Nhập họ và tên"
            className="w-full rounded-md border-2 border-gray-200 p-2"
          />
          <p className="text-sm text-red-500">{errors.fullName?.message}</p>

          {/* Email */}
          <label className="my-2 text-base font-bold text-colorbrand-midnightBlue-950">Email *</label>
          <TextField
            {...register('email')}
            placeholder="Nhập email"
            className="w-full rounded-md border-2 border-gray-200 p-2"
          />
          <p className="text-sm text-red-500">{errors.email?.message}</p>

          {/* Số điện thoại */}
          <label className="my-2 text-base font-bold text-colorbrand-midnightBlue-950">Số điện thoại *</label>
          <TextField
            {...register('phone')}
            placeholder="Nhập số điện thoại"
            className="w-full rounded-md border-2 border-gray-200 p-2"
          />
          <p className="text-sm text-red-500">{errors.phone?.message}</p>

          {/* Username */}
          <label className="my-2 text-base font-bold text-colorbrand-midnightBlue-950">Username *</label>
          <TextField
            {...register('username')}
            placeholder="Nhập username"
            className="w-full rounded-md border-2 border-gray-200 p-2"
          />
          <p className="text-sm text-red-500">{errors.username?.message}</p>

          {/* Mật khẩu */}
          <label className="my-2 text-base font-bold text-colorbrand-midnightBlue-950">Mật khẩu *</label>
          <TextField
            {...register('password')}
            type="password"
            placeholder="Nhập mật khẩu"
            className="w-full rounded-md border-2 border-gray-200 p-2"
          />
          <p className="text-sm text-red-500">{errors.password?.message}</p>

          {/* Nút Đăng ký */}
          <button type="submit" className="m-auto mt-10 w-1/2 rounded-md bg-colorbrand-burntSienna-500 p-2 text-white">
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
