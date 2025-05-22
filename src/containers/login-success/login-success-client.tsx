'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { LogoICon } from '@/assets/svgs'
import { CheckCircle } from 'lucide-react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import useAuth from '@/hooks/api/useAuth'

const parseUserResponse = (str: string) => {
  const inner = str.replace(/^UserResponse\$\$/, '').replace(/\$\$$/, '')
  const entries = inner.split(', ').map((part: string) => part.split('='))
  const obj: { [key: string]: string } = {}
  for (const [key, value] of entries) {
    obj[key] = decodeURIComponent(value)
  }
  return obj
}

export default function LoginSuccessClient() {
  const { handleLoginSuccess } = useAuth()
  const searchParams = useSearchParams()
  const [countdown, setCountdown] = useState(3)

  const token = searchParams.get('token')
  const user = searchParams.get('user')
  const authenticate = searchParams.get('authenticate')

  useEffect(() => {
    if (token && user && authenticate) {
      const timer = setInterval(() => {
        setCountdown((prev) => prev - 1)
      }, 1000)

      const loginTimer = setTimeout(() => {
        clearInterval(timer)
        handleLogin()
      }, 3000)

      return () => {
        clearInterval(timer)
        clearTimeout(loginTimer)
      }
    }
  }, [token, user, authenticate])

  const handleLogin = async () => {
    if (token && user && authenticate) {
      try {
        const data = {
          token,
          user: parseUserResponse(user),
        }
        await handleLoginSuccess(data)
      } catch (error) {
        console.error('Parsing error:', error)
      }
    }
  }

  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center px-4 py-12">
      <Card className="w-full max-w-md border-none shadow-lg">
        <CardHeader className="flex flex-col items-center space-y-1 pt-8">
          <div className="mb-2">
            <LogoICon className="h-24 w-24" />
          </div>
        </CardHeader>
        <CardContent className="flex flex-col items-center space-y-6 px-8 pb-6 pt-2 text-center">
          <div className="rounded-full bg-green-50 p-3">
            <CheckCircle className="h-16 w-16 text-green-500" />
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-[#1C3554]">Đăng nhập thành công</h2>
            <p className="text-muted-foreground">Bạn đã đăng nhập thành công vào tài khoản của mình</p>
          </div>
          {countdown > 0 && (
            <div className="w-full space-y-2">
              <div className="h-1 w-full overflow-hidden rounded-full bg-gray-200">
                <div
                  className="h-full bg-green-500 transition-all duration-1000"
                  style={{ width: `${(countdown / 3) * 100}%` }}
                />
              </div>
              <p className="text-sm text-muted-foreground">Tự động chuyển hướng sau {countdown} giây</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
