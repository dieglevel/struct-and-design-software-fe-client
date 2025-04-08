import { ArrowTop } from '@/assets/svgs'
import { ArrowBottom } from '@/assets/svgs/common/arrow-bottom'
import { Badge } from '@/components/ui/badge'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { DualRangeSlider } from '@/components/ui/dual-range-slider'
import { PriceRangeFilter } from '@/components/ui/price-range-filter'
import React, { useEffect, useState } from 'react'


const DestinationBadge = [
  {
    id: 1,
    label: 'Tất cả',
  },
  {
    id: 2,
    label: 'Otaku Festival',
  },
  {
    id: 3,
    label: 'Manga Festival',
  },
  {
    id: 4,
    label: 'Cosplay',
  },
  {
    id: 5,
    label: 'Nahidaaaaa',
  },
]

export default function SideBarComponent() {
  const [departureOpen, setDepartureOpen] = useState(false)
  const [values, setValues] = useState<[number, number]>([0, 7000000])
  

  return (
    <div className="h-full w-full max-w-[280px] rounded-lg border bg-white p-4">
      <h2 className="mb-4 text-lg font-bold uppercase">Bộ lọc tìm kiếm</h2>
      <div>
        <h3 className="mb-2 text-sm font-semibold">Ngân sách:</h3>
        <div>
          <PriceRangeFilter minPrice={0} maxPrice={7000001} onApply={setValues} />
        </div>

        <h3 className="mb-2 text-sm font-semibold">Danh mục:</h3>
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger
              className="w-full"
              asChild
              onPointerDown={() => setDepartureOpen(!departureOpen)}
              onPointerUp={() => setDepartureOpen(!departureOpen)}
            >
              <div className="flex cursor-pointer items-center justify-between rounded-md border p-3">
                <p>{}</p>
                {departureOpen ? <ArrowBottom className="h-4 w-4" /> : <ArrowTop className="h-4 w-4" />}
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {DestinationBadge.map((item) => (
                <DropdownMenuItem
                  onClick={() => setDepartureOpen(false)}
                  key={item.id}
                  className="cursor-pointer hover:bg-[#F27052] hover:text-white md:min-w-56"
                >
                  {item.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        
      </div>
    </div>
  )
}
