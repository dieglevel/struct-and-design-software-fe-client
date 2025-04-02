'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { PasswordInput } from '@/containers/profile'

export default function ChangePassword() {
  const [showPasswords, setShowPasswords] = useState({
    oldPass: false,
    newPass: false,
    rewriteNewPass: false,
  })

  const [formData, setFormData] = useState({
    oldPass: '',
    newPass: '',
    rewriteNewPass: '',
  })

  const togglePassword = (fieldName: 'oldPass' | 'newPass' | 'rewriteNewPass') => {
    setShowPasswords((prev) => ({
      ...prev,
      [fieldName]: !prev[fieldName],
    }))
  }

  return (
    <div className="w-full max-w-4xl flex-1 self-center rounded-lg p-6 lg:w-[896]">
      <h2 className="mb-6 border-b pb-2 text-xl font-bold uppercase text-[#0a3b66]">Đổi mật khẩu</h2>
      <form className="w-full space-y-6">
        <div className="grid grid-cols-1 gap-6">
          <PasswordInput
            label="Mật khẩu cũ"
            fieldName="oldPass"
            value={formData.oldPass}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, oldPass: e.target.value })}
            show={showPasswords.oldPass}
            onToggle={() => togglePassword('oldPass')}
          />
          <PasswordInput
            label="Mật khẩu mới"
            fieldName="newPass"
            value={formData.newPass}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, newPass: e.target.value })}
            show={showPasswords.newPass}
            onToggle={() => togglePassword('newPass')}
          />
          <PasswordInput
            label="Nhập lại mật khẩu"
            fieldName="rewriteNewPass"
            value={formData.rewriteNewPass}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFormData({ ...formData, rewriteNewPass: e.target.value })
            }
            show={showPasswords.rewriteNewPass}
            onToggle={() => togglePassword('rewriteNewPass')}
          />
        </div>

        <div className="flex justify-end">
          <Button type="submit" className="bg-[#ee7762] px-8 text-white hover:bg-[#e06652]">
            Cập nhật
          </Button>
        </div>
      </form>
    </div>
  )
}
