'use client'

import { useState } from 'react'
import { AlertTriangle, CheckCircle, Info, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Checkbox } from '@/components/ui/checkbox'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

export default function DeleteAccount() {
  const [password, setPassword] = useState('')
  const [confirmText, setConfirmText] = useState('')
  const [acknowledgements, setAcknowledgements] = useState({
    data: false,
    subscriptions: false,
    permanent: false,
  })
  const [deleteStatus, setDeleteStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const allAcknowledged = Object.values(acknowledgements).every(Boolean)
  const canDelete = password.length > 0 && confirmText === 'XÓA TÀI KHOẢN' && allAcknowledged

  const handleDeleteAccount = async () => {
    if (!canDelete) return

    setDeleteStatus('loading')

    try {
      // Here you would call your server action to delete the account
      // await deleteAccountAction(password)

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      setDeleteStatus('success')
    } catch (error) {
      setDeleteStatus('error')
    }
  }

  if (deleteStatus === 'success') {
    return (
      <div className="mx-auto w-full max-w-4xl p-6">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-xl font-bold text-[#0a3b66]">Tài khoản đã được xóa</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center space-y-4">
            <CheckCircle className="h-16 w-16 text-green-500" />
            <p className="text-center">
              Tài khoản của bạn đã được xóa thành công. Cảm ơn bạn đã sử dụng dịch vụ của chúng tôi.
            </p>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button className="bg-[#0a3b66] hover:bg-[#072a4a]" onClick={() => (window.location.href = '/')}>
              Trở về trang chủ
            </Button>
          </CardFooter>
        </Card>
      </div>
    )
  }

  return (
    <div className="mx-auto w-full max-w-4xl p-6">
      <Card className="border-red-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 border-b pb-2 text-xl font-bold uppercase text-[#0a3b66]">
            <Trash2 className="h-5 w-5 text-[#ee7762]" />
            Xóa tài khoản
          </CardTitle>
          <CardDescription className="mt-4 font-medium text-red-500">
            Cảnh báo: Hành động này không thể hoàn tác
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          <Alert variant="destructive" className="border-red-300 bg-red-50">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Cảnh báo</AlertTitle>
            <AlertDescription>
              Việc xóa tài khoản sẽ xóa vĩnh viễn tất cả dữ liệu của bạn và bạn sẽ không thể khôi phục lại.
            </AlertDescription>
          </Alert>

          <div className="space-y-4">
            <h3 className="font-semibold text-[#0a3b66]">Hậu quả của việc xóa tài khoản:</h3>

            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="data-acknowledgement"
                  checked={acknowledgements.data}
                  onCheckedChange={(checked) => setAcknowledgements((prev) => ({ ...prev, data: checked === true }))}
                />
                <div className="grid gap-1.5 leading-none">
                  <Label
                    htmlFor="data-acknowledgement"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Tôi hiểu rằng tất cả dữ liệu cá nhân, lịch sử hoạt động và tài liệu của tôi sẽ bị xóa vĩnh viễn.
                  </Label>
                </div>
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox
                  id="subscriptions-acknowledgement"
                  checked={acknowledgements.subscriptions}
                  onCheckedChange={(checked) =>
                    setAcknowledgements((prev) => ({ ...prev, subscriptions: checked === true }))
                  }
                />
                <div className="grid gap-1.5 leading-none">
                  <Label
                    htmlFor="subscriptions-acknowledgement"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Tôi hiểu rằng tất cả các đăng ký và thanh toán định kỳ sẽ bị hủy.
                  </Label>
                </div>
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox
                  id="permanent-acknowledgement"
                  checked={acknowledgements.permanent}
                  onCheckedChange={(checked) =>
                    setAcknowledgements((prev) => ({ ...prev, permanent: checked === true }))
                  }
                />
                <div className="grid gap-1.5 leading-none">
                  <Label
                    htmlFor="permanent-acknowledgement"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Tôi hiểu rằng hành động này là vĩnh viễn và không thể hoàn tác.
                  </Label>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-[#0a3b66]">
              Nhập mật khẩu để xác nhận
            </Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border-gray-300"
              placeholder="Nhập mật khẩu của bạn"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirm-text" className="text-[#0a3b66]">
              Nhập "XÓA TÀI KHOẢN" để xác nhận
            </Label>
            <Input
              id="confirm-text"
              value={confirmText}
              onChange={(e) => setConfirmText(e.target.value)}
              className="border-gray-300"
              placeholder="XÓA TÀI KHOẢN"
            />
          </div>

          <Alert className="border-blue-200 bg-blue-50">
            <Info className="h-4 w-4 text-blue-500" />
            <AlertTitle className="text-blue-700">Cần hỗ trợ?</AlertTitle>
            <AlertDescription>
              Nếu bạn gặp vấn đề hoặc cần hỗ trợ, vui lòng liên hệ với đội ngũ hỗ trợ của chúng tôi trước khi xóa tài
              khoản.
            </AlertDescription>
          </Alert>
        </CardContent>

        <CardFooter className="flex justify-end">
          <div className="flex space-x-4">
            <Button variant="outline" className="border-gray-300" onClick={() => window.history.back()}>
              Hủy
            </Button>

            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button
                  variant="destructive"
                  className="bg-[#ee7762] px-8 text-white hover:bg-[#e06652]"
                  disabled={!canDelete}
                >
                  {deleteStatus === 'loading' ? 'Đang xử lý...' : 'Xóa tài khoản'}
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Bạn có chắc chắn muốn xóa tài khoản?</AlertDialogTitle>
                  <AlertDialogDescription>
                    Hành động này không thể hoàn tác. Tài khoản của bạn và tất cả dữ liệu liên quan sẽ bị xóa vĩnh viễn.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Hủy</AlertDialogCancel>
                  <AlertDialogAction
                    className="bg-[#ee7762] text-white hover:bg-[#e06652]"
                    onClick={handleDeleteAccount}
                  >
                    Xác nhận xóa
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
