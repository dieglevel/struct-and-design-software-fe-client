'use client'

import { ArrowTop } from '@/assets/svgs'
import { ArrowBottom } from '@/assets/svgs/common/arrow-bottom'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { PriceRangeFilter } from '@/components/ui/price-range-filter'
import { Search } from 'lucide-react'
import { useEffect, useReducer, useState } from 'react'

interface IFilter {
  priceRange: [number, number]
  category: string
  destination: string
}

const DestinationBadge = [
  {
    id: '1',
    label: 'Tất cả',
  },
  {
    id: '2',
    label: 'Otaku Festival',
  },
  {
    id: '3',
    label: 'Manga Festival',
  },
  {
    id: '4',
    label: 'Cosplay',
  },
  {
    id: '5',
    label: 'Nahidaaaaa',
  },
]

type FilterAction =
  | { type: 'SET_PRICE_RANGE'; payload: [number, number] }
  | { type: 'SET_CATEGORY'; payload: string }
  | { type: 'SET_DESTINATION'; payload: string }
  | { type: 'RESET' }

const initialState: IFilter = {
  priceRange: [0, 7000001],
  category: '',
  destination: '',
}

function filterReducer(state: IFilter, action: FilterAction): IFilter {
  switch (action.type) {
    case 'SET_PRICE_RANGE':
      return { ...state, priceRange: action.payload }
    case 'SET_CATEGORY':
      return { ...state, category: action.payload }
    case 'SET_DESTINATION':
      return { ...state, destination: action.payload }
    case 'RESET':
      return initialState
    default:
      return state
  }
}

export default function SideBarComponent() {
  const [departureOpen, setDepartureOpen] = useState(false)
  const [state, dispatch] = useReducer(filterReducer, initialState)

  function setCategory(idCategory: string) {
    setDepartureOpen(false)
    dispatch({ type: 'SET_CATEGORY', payload: idCategory })
  }

  function setDestination(idDestination: string) {
    setDepartureOpen(false)
    dispatch({ type: 'SET_DESTINATION', payload: idDestination })
  }

  function handleSearch() {
    console.log('Searching with filters:', state)
    // Implement your search logic here
  }

  function handleReset() {
    dispatch({ type: 'RESET' })
  }

  useEffect(() => {
    console.log(state)
  }, [state])

  return (
    <div className="h-full min-w-72 rounded-lg border bg-white p-4">
      <h2 className="mb-4 text-lg font-bold uppercase">Bộ lọc tìm kiếm</h2>
      <div className="space-y-4">
        <div>
          <h3 className="mb-2 text-sm font-semibold">Ngân sách:</h3>
          <div>
            <PriceRangeFilter
              minPrice={initialState.priceRange[0]}
              maxPrice={initialState.priceRange[1]}
              onApply={(newRange: [number, number]) => dispatch({ type: 'SET_PRICE_RANGE', payload: newRange })}
            />
          </div>
        </div>

        <div>
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
                  <p>{DestinationBadge.find((item) => item.id === state.category)?.label || 'Tất cả'}</p>
                  {departureOpen ? <ArrowBottom className="h-4 w-4" /> : <ArrowTop className="h-4 w-4" />}
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {DestinationBadge.map((item) => (
                  <DropdownMenuItem
                    onClick={() => setCategory(item.id)}
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

        <div>
          <h3 className="mb-2 text-sm font-semibold">Điểm đến:</h3>
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger
                className="w-full"
                asChild
                onPointerDown={() => setDepartureOpen(!departureOpen)}
                onPointerUp={() => setDepartureOpen(!departureOpen)}
              >
                <div className="flex cursor-pointer items-center justify-between rounded-md border p-3">
                  <p>{DestinationBadge.find((item) => item.id === state.destination)?.label || 'Tất cả'}</p>
                  {departureOpen ? <ArrowBottom className="h-4 w-4" /> : <ArrowTop className="h-4 w-4" />}
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {DestinationBadge.map((item) => (
                  <DropdownMenuItem
                    onClick={() => setDestination(item.id)}
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

        <div className="flex flex-col gap-2 pt-4">
          <button
            onClick={handleSearch}
            className="flex w-full items-center justify-center gap-2 rounded-md bg-[#F27052] py-3 font-medium text-white transition-colors hover:bg-[#e05e3e] active:bg-[#d04e2e]"
          >
            <Search className="h-4 w-4" />
            Tìm kiếm
          </button>

          <button
            onClick={handleReset}
            className="w-full rounded-md border border-gray-300 py-2 text-sm text-gray-600 transition-colors hover:bg-gray-50"
          >
            Đặt lại bộ lọc
          </button>
        </div>
      </div>
    </div>
  )
}
