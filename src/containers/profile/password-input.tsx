import { Input } from '@/components/ui'
import { Label } from '@/components/ui/label'
import { Eye, EyeOff } from 'lucide-react'
import React from 'react'

interface inputProps {
  label: string
  fieldName: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  show: boolean
  onToggle: () => void
}

export const PasswordInput = ({ ...input }: inputProps) => {
  return (
    <div className="space-y-2">
      <Label htmlFor={input.fieldName} className="text-[#0a3b66]">
        {input.label}
      </Label>
      <div className="relative">
        <Input
          id={input.fieldName}
          name={input.fieldName}
          type={input.show ? 'text' : 'password'}
          value={input.value}
          onChange={input.onChange}
          className="border-gray-300 pr-10"
        />
        <button
          type="button"
          onClick={input.onToggle}
          className="absolute inset-y-0 right-3 flex items-center text-gray-500"
        >
          {input.show ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      </div>
    </div>
  )
}
