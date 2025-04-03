'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogFooter, DialogTitle } from '@/components/ui/dialog'
import { X } from 'lucide-react'

export default function DeleteAccountModal() {
  const [open, setOpen] = useState(false)

  const handleDelete = () => {
    // Add your delete account logic here
    console.log('Account deleted')
    setOpen(false)
  }

  return (
    <div className="space-y-4">
      <Button onClick={() => setOpen(true)}>Xóa tài khoản</Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="overflow-hidden border-2 border-blue-100 p-0 sm:max-w-md">
          <div className="flex items-center justify-between bg-blue-500 p-2 text-white">
            <span>Thành công</span>
            <Button onClick={() => setOpen(false)} className="h-6 w-6 text-white hover:bg-blue-600 hover:text-white">
              <X className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex flex-col items-center space-y-4 p-6 text-center">
            <div className="flex justify-center">
              <div className="rounded-full border-2 border-red-500 p-3">
                <X className="h-6 w-6 text-red-500" />
              </div>
            </div>

            <div className="space-y-2">
              <DialogTitle className="text-navy-blue text-center font-medium">Xác nhận xóa tài khoản?</DialogTitle>
              <p className="text-sm text-gray-600">Thao tác này không thể khôi phục.</p>
            </div>

            <DialogFooter className="flex w-full flex-row justify-center gap-2 sm:justify-center">
              <Button onClick={() => setOpen(false)} className="border-gray-300 text-gray-700">
                Hủy
              </Button>
              <Button onClick={handleDelete} className="bg-red-500 text-white hover:bg-red-600">
                Đồng ý
              </Button>
            </DialogFooter>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
