'use client'
import { LogoICon } from '@/assets/svgs'
import { TickSuccessChangePasswordIcon } from '@/assets/svgs/auth'
import { Button } from '@/components/ui'
import { useRouter } from 'next/navigation'

const ChangePasswordSuccessPage = () => {
  const route = useRouter()
  function onLogin(e: React.FormEvent) {
    e.preventDefault()
    route.push('/dashboard/home')
  }
  return (
    <div>
      <LogoICon className="w-30 m-auto h-40" />
      <TickSuccessChangePasswordIcon className="m-auto h-40 w-20" />
      <h1 className="text-center text-2xl">Đổi mật khẩu thành công</h1>
      <div className="flex items-center justify-center">
        <Button onClick={onLogin} className="mt-5 w-48 bg-colorbrand-burntSienna-500 hover:bg-colorbrand-grayWhite-700">
          Đăng nhập
        </Button>
      </div>
    </div>
  )
}
export default ChangePasswordSuccessPage
