'use client'

import * as React from 'react'
import * as SliderPrimitive from '@radix-ui/react-slider'

import { cn } from '@/utils'

interface DualRangeSliderProps extends React.ComponentProps<typeof SliderPrimitive.Root> {
  labelPosition?: 'top' | 'bottom'
  label?: (value: number | undefined) => React.ReactNode
}

const DualRangeSlider = React.forwardRef<React.ElementRef<typeof SliderPrimitive.Root>, DualRangeSliderProps>(
  ({ className, label, labelPosition = 'top', ...props }, ref) => {
    // Get initial values and set default min/max if not provided
    const initialValue = Array.isArray(props.defaultValue || props.value)
      ? props.defaultValue || props.value
      : [props.min || 0, props.max || 100]

    // Store current values in state
    const [currentValues, setCurrentValues] = React.useState(initialValue)

    // Override the onValueChange to implement custom behavior
    const onValueChangeOriginal = props.onValueChange

    const MIN_LIMIT = 0

    const handleValueChange = (newValues: number[]) => {
      let [min, max] = newValues

      if (min >= max) {
        min = max - 1
      }

      if (max <= min) {
        max = min + 1
      }

      // Đảm bảo min không nhỏ hơn giới hạn tối thiểu
      if (min < MIN_LIMIT) {
        min = MIN_LIMIT
        max = MIN_LIMIT + 1
      }

      const safeValues = [min, max]
      setCurrentValues(safeValues)

      if (onValueChangeOriginal) {
        onValueChangeOriginal(safeValues)
      }
    }


    return (
      <SliderPrimitive.Root
        ref={ref}
        className={cn('relative flex w-full touch-none select-none items-center', className)}
        {...props}
        value={currentValues}
        onValueChange={handleValueChange}
      >
        <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-secondary">
          <SliderPrimitive.Range className="absolute h-full bg-primary" />
        </SliderPrimitive.Track>

        {/* Min Handle */}
        <SliderPrimitive.Thumb className="relative block h-4 w-4 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
          {label && (
            <span
              className={cn(
                'absolute flex w-full justify-center',
                labelPosition === 'top' && '-top-7',
                labelPosition === 'bottom' && 'top-4',
              )}
            >
              {label(currentValues[0])}
            </span>
          )}
        </SliderPrimitive.Thumb>

        {/* Max Handle */}
        <SliderPrimitive.Thumb className="relative block h-4 w-4 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
          {label && (
            <span
              className={cn(
                'absolute flex w-full justify-center',
                labelPosition === 'top' && '-top-7',
                labelPosition === 'bottom' && 'top-4',
              )}
            >
              {label(currentValues[1])}
            </span>
          )}
        </SliderPrimitive.Thumb>
      </SliderPrimitive.Root>
    )
  },
)
DualRangeSlider.displayName = 'DualRangeSlider'

export { DualRangeSlider }
