'use client'
import { TravelerType } from '@/app/(dashboard)/tour-booking-form/context/types'
import { Button } from '@/components/ui/button'

interface TravelerCountProps {
  traveler: TravelerType
  onUpdateCount: (id: number, increment: boolean) => void
}

export function TravelerCount({ traveler, onUpdateCount }: TravelerCountProps) {
  return (
    <div className="rounded-md border p-3">
      <div className="mb-1 flex items-center gap-2">
        {traveler.icon}
        <span className="text-sm font-medium">{traveler.name}</span>
      </div>
      <div className="mb-2 text-xs text-gray-500">{traveler.ageDescription}</div>
      <div className="flex items-center">
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 rounded-md"
          onClick={() => onUpdateCount(traveler.id, false)}
          disabled={traveler.count <= traveler.minCount}
        >
          <span className="text-lg">-</span>
        </Button>
        <div className="w-8 text-center">{traveler.count}</div>
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 rounded-md"
          onClick={() => onUpdateCount(traveler.id, true)}
        >
          <span className="text-lg">+</span>
        </Button>
      </div>
    </div>
  )
}
