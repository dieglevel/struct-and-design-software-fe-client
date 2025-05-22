/* eslint-disable react-hooks/exhaustive-deps */
import { Input } from '@/components/ui'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import useAuth from '@/hooks/api/useAuth'
import { useFetchCommunes, useFetchDistrict, useFetchProvince } from '@/hooks/api/useProvince'
import { Label } from '@radix-ui/react-label'
import React, { useEffect, useState } from 'react'

function InfoPassengerBooking({ handleSetAddress }: any) {
  const { me } = useAuth()
  const provinces: { idProvince: string; name: string }[] = useFetchProvince()
  const [selectedProvince, setSelectedProvince] = useState('')
  const [selectedDistrict, setSelectedDistrict] = useState('')
  const [selectedCommune, setSelectedCommune] = useState('')
  const [detailedAddress, setDetailedAddress] = useState('')
  const districts: { idDistrict: string; name: string }[] = useFetchDistrict(selectedProvince)
  const communes: { idCommune: string; name: string }[] = useFetchCommunes(selectedDistrict)

  const handleProvinceChange = (value: string) => {
    if (value && value !== 'loading') {
      setSelectedProvince(value)
      setSelectedDistrict('')
      setSelectedCommune('')
    }
  }

  const handleDistrictChange = (value: string) => {
    if (value && value !== 'loading' && value !== 'no-selection') {
      setSelectedDistrict(value)
      setSelectedCommune('')
    }
  }

  const handleCommuneChange = (value: string) => {
    if (value && value !== 'loading' && value !== 'no-selection') {
      setSelectedCommune(value)
    }
  }
  const getFullAddress = () => {
    const province = provinces.find((p) => p.idProvince === selectedProvince)?.name || ''
    const district = districts.find((d) => d.idDistrict === selectedDistrict)?.name || ''
    const commune = communes.find((c) => c.idCommune === selectedCommune)?.name || ''
    return [detailedAddress, commune, district, province].filter(Boolean).join(', ')
  }
  useEffect(() => {
    handleSetAddress(getFullAddress())
  }, [selectedCommune, selectedProvince, selectedDistrict])
  return (
    <div>
      <div className="rounded-md border-1 border-slate-200 px-4 py-6">
        <h2 className="text-lg font-bold text-gray-700">Thông tin khách đặt</h2>
        <div className="flex items-start justify-start gap-2">
          <div className="mt-2 flex-1 items-start">
            <Label htmlFor="fullName" className="text-md mb-2 block text-slate-600">
              Họ tên: <span className="font-500 text-slate-700"> {me?.fullName ?? ''}</span>
            </Label>
            <Label htmlFor="phone" className="text-md mb-2 block text-slate-600">
              Điện thoại:<span className="font-500 text-slate-700"> {me?.phone ?? ''}</span>
            </Label>
            <Label htmlFor="email" className="text-md mb-2 block text-slate-600">
              Email: <span className="font-500 text-slate-700"> {me?.email ?? ''}</span>
            </Label>
            <div className="text-md mb-2 block w-[300px] text-slate-600">
              <Label htmlFor="note" className="font-500 text-slate-700">
                Ghi chú
              </Label>
              <Input name="note" placeholder="Ghi chú" value={'Không có ghi chú'} onChange={() => {}} />
            </div>
          </div>
          <div className="flex flex-1 flex-col items-start gap-1">
            <div className="w-full">
              <Label htmlFor="province" className="text-sm text-slate-600">
                Tỉnh/Thành phố
              </Label>
              <Select onValueChange={handleProvinceChange} value={selectedProvince}>
                <SelectTrigger>
                  <SelectValue placeholder="Chọn tỉnh/thành phố" />
                </SelectTrigger>
                <SelectContent>
                  {provinces.length === 0 ? (
                    <SelectItem value="loading" disabled>
                      Đang tải...
                    </SelectItem>
                  ) : (
                    provinces.map((province, index: number) => (
                      <SelectItem key={index} value={province.idProvince}>
                        {province.name}
                      </SelectItem>
                    ))
                  )}
                </SelectContent>
              </Select>
            </div>
            <div className="w-full">
              <Label htmlFor="district" className="text-sm text-slate-600">
                Quận/Huyện
              </Label>
              <Select onValueChange={handleDistrictChange} value={selectedDistrict} disabled={!selectedProvince}>
                <SelectTrigger>
                  <SelectValue placeholder="Chọn quận/huyện" />
                </SelectTrigger>
                <SelectContent>
                  {!selectedProvince ? (
                    <SelectItem value="no-selection" disabled>
                      Chọn tỉnh/thành phố trước
                    </SelectItem>
                  ) : districts.length === 0 ? (
                    <SelectItem value="loading" disabled>
                      Đang tải...
                    </SelectItem>
                  ) : (
                    districts.map((district) => (
                      <SelectItem key={district.idDistrict} value={String(district.idDistrict)}>
                        {district.name}
                      </SelectItem>
                    ))
                  )}
                </SelectContent>
              </Select>
            </div>
            <div className="w-full">
              <Label htmlFor="commune" className="text-sm text-slate-600">
                Phường/Xã
              </Label>
              <Select onValueChange={handleCommuneChange} value={selectedCommune} disabled={!selectedDistrict}>
                <SelectTrigger>
                  <SelectValue placeholder="Chọn phường/xã" />
                </SelectTrigger>
                <SelectContent>
                  {!selectedDistrict ? (
                    <SelectItem value="no-selection" disabled>
                      Chọn quận/huyện trước
                    </SelectItem>
                  ) : communes.length === 0 ? (
                    <SelectItem value="loading" disabled>
                      Đang tải...
                    </SelectItem>
                  ) : (
                    communes.map((commune) => (
                      <SelectItem key={commune.idCommune} value={String(commune.idCommune)}>
                        {commune.name}
                      </SelectItem>
                    ))
                  )}
                </SelectContent>
              </Select>
            </div>
            <div className="w-full">
              <Label htmlFor="detailedAddress" className="text-sm text-slate-600">
                Địa chỉ chi tiết
              </Label>
              <Input
                name="detailedAddress"
                placeholder="Nhập địa chỉ chi tiết"
                value={detailedAddress}
                onChange={(e) => setDetailedAddress(e.target.value)}
              />
            </div>

            <div className="w-full">
              <Label htmlFor="fullAddress" className="text-sm text-slate-600">
                Địa chỉ đầy đủ
              </Label>
              <Input name="fullAddress" value={getFullAddress()} disabled />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoPassengerBooking
