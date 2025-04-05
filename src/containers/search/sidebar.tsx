import { ArrowTop } from '@/assets/svgs'
import { ArrowBottom } from '@/assets/svgs/common/arrow-bottom'
import { Badge } from '@/components/ui/badge'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { ArrowDown } from 'lucide-react'
import React, { useState } from 'react'

const RangeBadge = [
  {
    id: 1,
    label: 'Dưới 5 triệu',
    min: 0,
    max: 50000000,
  },
  {
    id: 2,
    label: 'Từ 5 - 10 triệu',
    min: 50000000,
    max: 100000000,
  },
  {
    id: 3,
    label: 'Từ 10 - 20 triệu',
    min: 100000000,
    max: 200000000,
  },
  {
    id: 4,
    label: 'Trên 20 triệu',
    min: 200000000,
  },
]

const DestinationBadge = [
  {
    id: 1,
    label: 'Hà Nội',
  },
  {
    id: 2,
    label: 'Đà Nẵng',
  },
  {
    id: 3,
    label: 'Hồ Chí Minh',
  },
  {
    id: 4,
    label: 'Nha Trang',
  },
]

export default function SideBarComponent() {
  const [departureOpen, setDepartureOpen] = useState(false)


  return (
    <div className="h-full w-full max-w-[280px] rounded-lg border bg-white p-4">
      <h2 className="mb-4 text-lg font-bold uppercase">Bộ lọc tìm kiếm</h2>
      <div>
        <h3 className="mb-2 text-sm font-semibold">Ngân sách:</h3>
        <div>
          {RangeBadge.map((item) => (
            <Badge
              key={item.id}
              className="m-2 cursor-pointer bg-white px-3 py-2 text-[#707070] hover:bg-[#F27052] hover:text-white"
            >
              {item.label}
            </Badge>
          ))}
        </div>

        <h3 className="mb-2 text-sm font-semibold">Điểm khởi hành:</h3>
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger
              className="w-full"
              asChild
              onPointerDown={() => setDepartureOpen(!departureOpen)}
              onPointerUp={() => setDepartureOpen(!departureOpen)}
            >
              <div className="flex cursor-pointer items-center justify-between rounded-md border p-3">
                <p>Tất cả</p>
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
