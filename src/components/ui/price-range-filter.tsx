/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { DualRangeSlider } from '@/components/ui/dual-range-slider'
import useSearch from '@/hooks/ui/useSearch'
import { FORMAT_MONEY } from '@/utils/formatMoney'
import { useEffect, useState, useCallback } from 'react'

interface PriceRangeFilterProps {
  minPrice?: number
  maxPrice?: number
  defaultMin?: number
  defaultMax?: number
  onApply?: (values: [number, number]) => void
  onReset?: () => void
  className?: string
  resetSignal?: boolean
}

export function PriceRangeFilter({
  minPrice = 0,
  maxPrice = 4000000,
  defaultMin = minPrice,
  defaultMax = maxPrice,
  onApply,
  resetSignal,
  className,
}: PriceRangeFilterProps) {
  const [values, setValues] = useState<[number, number]>([defaultMin, defaultMax])
  const { setMinMaxQuery } = useSearch()
  const handleValueChange = useCallback(
    (newValues: number[]) => {
      if (newValues[0] !== values[0] || newValues[1] !== values[1]) {
        setValues([newValues[0], newValues[1]])
        if (onApply) {
          onApply([newValues[0], newValues[1]])
        }
      }
    },
    [values, onApply],
  )

  useEffect(() => {
    if (resetSignal === true) {
      setValues([0, 20000001])
      setMinMaxQuery(`0`, `20000001`)
    }
  }, [resetSignal])

  return (
    <div className={`w-full space-y-4 ${className}`}>
      <div className="mb-2 flex justify-between gap-2">
        <div className="whitespace-nowrap rounded-full border bg-background px-4 py-2 text-sm">
          {FORMAT_MONEY(values[0])}
        </div>
        <div className="whitespace-nowrap rounded-full border bg-background px-4 py-2 text-sm">
          {FORMAT_MONEY(values[1])}
          {values[1] >= maxPrice ? '+' : ''}
        </div>
      </div>

      <DualRangeSlider
        key={`${values[0]}-${values[1]}`}
        min={minPrice}
        max={maxPrice}
        step={100000}
        value={values}
        onValueChange={handleValueChange}
        className="py-2"
      />
    </div>
  )
}
