'use client'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

interface Props {
  open: boolean
  onClose: () => void
}

export default function LoginRequiredDialog({ open, onClose }: Props) {
  const router = useRouter()

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent onInteractOutside={(e) => e.preventDefault()} onPointerDownOutside={(e) => e.preventDefault()}>
        <DialogHeader>
          <DialogTitle className="text-orange-600">Chưa đăng nhập</DialogTitle>
          <DialogDescription>Bạn cần đăng nhập để đặt tour. Vui lòng đăng nhập để tiếp tục.</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button onClick={() => router.push('/tour')} variant="outline">
              Quay lại
            </Button>
          </DialogClose>
          <Button onClick={() => router.push('/login')}>Đăng nhập</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
