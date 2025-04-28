'use client'

import * as React from 'react'
import { DualRangeSlider } from '@/components/ui/dual-range-slider'
import { Button } from '@/components/ui/button'
import { FORMAT_MONEY } from '@/utils/formatMoney'

interface PriceRangeFilterProps {
  minPrice?: number
  maxPrice?: number
  defaultMin?: number
  defaultMax?: number
  onApply?: (values: [number, number]) => void
  onReset?: () => void
  className?: string
}

export function PriceRangeFilter({
  minPrice = 0,
  maxPrice = 4000000,
  defaultMin = minPrice,
  defaultMax = maxPrice,
  onApply,
  className,
}: PriceRangeFilterProps) {
  const [values, setValues] = React.useState<[number, number]>([defaultMin, defaultMax])
  const [displayValues, setDisplayValues] = React.useState<[number, number]>([defaultMin, defaultMax])

  const handleValueChange = (newValues: number[]) => {
    setValues([newValues[0], newValues[1]])
    if (onApply) {
      onApply([newValues[0], newValues[1]])
    }
  }


  // Format the display header
  const formatHeader = () => {
    return `${FORMAT_MONEY(displayValues[0])} - ${FORMAT_MONEY(displayValues[1])}${displayValues[1] >= maxPrice ? '+' : ''}`
  }

  return (
    <div className={`w-full space-y-4 ${className}`}>
      {/* Price pills */}
      <div className="mb-2 flex justify-between gap-2">
        <div className="whitespace-nowrap rounded-full border bg-background px-4 py-2 text-sm">
          {FORMAT_MONEY(values[0])}
        </div>
        <div className="whitespace-nowrap rounded-full border bg-background px-4 py-2 text-sm">
          {FORMAT_MONEY(values[1])}
          {values[1] >= maxPrice ? '+' : ''}
        </div>
      </div>

      {/* Slider */}
      <DualRangeSlider
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
