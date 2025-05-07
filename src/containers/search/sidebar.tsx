/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { ArrowTop } from '@/assets/svgs'
import { ArrowBottom } from '@/assets/svgs/common/arrow-bottom'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { PriceRangeFilter } from '@/components/ui/price-range-filter'
import useSearch from '@/hooks/ui/useSearch'
import { useSearchParams } from 'next/navigation'
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
    value: 'all',
  },
  {
    id: '2',
    label: ' 1 ngày',
    value: '1-ngay',
  },
  {
    id: '3',
    label: ' 2 ngày',
    value: '2-ngay',
  },
  {
    id: '4',
    label: ' 3 ngày',
    value: '3-ngay',
  },
  {
    id: '5',
    label: '4 ngày',
    value: '4-ngay',
  },
  {
    id: '6',
    label: '5 ngày',
    value: '5-ngay',
  },
  {
    id: '7',
    label: '> 6 ngày',
    value: 'tren-6-ngay',
  },
]

type FilterAction =
  | { type: 'SET_PRICE_RANGE'; payload: [number, number] }
  | { type: 'SET_CATEGORY'; payload: string }
  | { type: 'SET_DESTINATION'; payload: string }
  | { type: 'RESET' }

const initialState: IFilter = {
  priceRange: [0, 20000001],
  category: '',
  destination: '',
}

function filterReducer(state: IFilter, action: FilterAction): IFilter {
  switch (action.type) {
    case 'SET_PRICE_RANGE':
      return { ...state, priceRange: action.payload }
    case 'SET_DESTINATION':
      return { ...state, destination: action.payload }
    case 'RESET':
      return { ...initialState }
    default:
      return state
  }
}

export default function SideBarComponent() {
  const { setMinMaxQuery, setQueryField, getQueryField } = useSearch()
  const [departureOpen, setDepartureOpen] = useState(false)

  const [state, dispatch] = useReducer(filterReducer, {
    ...initialState,
    priceRange: [
      !parseInt(getQueryField('min')) ? 0 : parseInt(getQueryField('min')),
      !parseInt(getQueryField('max')) ? 20000001 : parseInt(getQueryField('max')),
    ],
  })
  const [resetSignal, setResetSignal] = useState(false)

  function setDestination(idDestination: string) {
    setDepartureOpen(false)
    dispatch({ type: 'SET_DESTINATION', payload: idDestination })
  }

  function handleReset() {
    setDepartureOpen(false)
    dispatch({ type: 'RESET' })
    setResetSignal(true)
    setQueryField('day', 'all')
  }
  const searchParams = useSearchParams()

  useEffect(() => {
    const priceGte = parseInt(searchParams.get('price_gte') || '0', 10)
    const priceLte = parseInt(searchParams.get('price_lte') || '20000001', 10)
    const day = searchParams.get('day') || 'all'
    dispatch({ type: 'SET_PRICE_RANGE', payload: [priceGte, priceLte] })
    const destinationByValue = DestinationBadge.find((item) => item.value === day)
    if (destinationByValue) {
      dispatch({ type: 'SET_DESTINATION', payload: destinationByValue.id })
    }
  }, [searchParams])

  useEffect(() => {
    if (getQueryField('min').length > 0 || getQueryField.length > 0) {
      setResetSignal(false)
    } else {
    }
  }, [getQueryField('min'), getQueryField('max')])

  return (
    <div className="sticky top-10 h-full min-w-72 rounded-lg border bg-white p-4">
      <h2 className="mb-4 text-lg font-bold uppercase text-slate-600">Bộ lọc tìm kiếm</h2>
      <div className="space-y-4">
        <div>
          <h3 className="mb-2 text-sm font-semibold text-slate-500">Ngân sách:</h3>
          <div>
            <PriceRangeFilter
              minPrice={state.priceRange[0]}
              maxPrice={state.priceRange[1]}
              onApply={(newRange) => {
                dispatch({ type: 'SET_PRICE_RANGE', payload: newRange })
                setMinMaxQuery(`${newRange[0]}`, `${newRange[1]}`)
              }}
              resetSignal={resetSignal}
            />
          </div>
        </div>

        <div>
          <h3 className="mb-2 text-sm font-semibold text-slate-500">Số ngày:</h3>
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger
                className="w-full"
                asChild
                onPointerDown={() => setDepartureOpen(!departureOpen)}
                onPointerUp={() => setDepartureOpen(!departureOpen)}
              >
                <div className="flex cursor-pointer items-center justify-between rounded-md border p-3">
                  <p>{DestinationBadge.find((item) => item.id === state.destination)?.label ?? 'Tất cả'}</p>
                  {departureOpen ? <ArrowBottom className="h-4 w-4" /> : <ArrowTop className="h-4 w-4" />}
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {DestinationBadge.map((item) => (
                  <DropdownMenuItem
                    onClick={() => {
                      setDestination(item.id)
                      setQueryField('day', item.value)
                    }}
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

        <div className="flex flex-col gap-4 pt-10">
          <button
            onClick={handleReset}
            className="w-full rounded-md border border-gray-300 py-2 text-sm text-gray-600 text-slate-500 transition-colors hover:bg-gray-50"
          >
            Đặt lại bộ lọc
          </button>
        </div>
      </div>
    </div>
  )
}
