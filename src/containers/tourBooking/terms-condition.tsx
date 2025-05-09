'use client'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'

export function TermsConditions() {
  return (
    <div className="space-y-3">
      <div className="flex items-start space-x-2">
        <Checkbox id="terms" />
        <div className="grid gap-1.5 leading-none">
          <Label htmlFor="terms" className="text-sm font-normal">
            Tôi đồng ý với <span className="text-blue-600">Chính sách</span> bảo vệ dữ liệu cá nhân và các{' '}
            <span className="text-blue-600">điều khoản khác</span>.
          </Label>
        </div>
      </div>
    </div>
  )
}
