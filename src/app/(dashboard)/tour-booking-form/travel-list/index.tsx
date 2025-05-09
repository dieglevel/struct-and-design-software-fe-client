import { Card, CardContent } from '@/components/ui/card'
import React, { useContext, useEffect, useState } from 'react'
import { BookingContext } from '../context'
import { TermsConditions, TravelerCount, TravelerDetails } from '@/containers/tourBooking'
import { IPassengerType, TravelerType } from '../context/types'
import { generateTravelerDetail } from '../context/helper'

function TravelList() {
  const { travelers, passengerDetails, updateTravelerCount } = useContext(BookingContext)
  const [listDetailTraveler, setListDetailTraveler] = useState<Partial<TravelerType & IPassengerType>[]>(
    generateTravelerDetail(travelers ?? [], passengerDetails ?? []),
  )
useEffect(() => {
  const list = generateTravelerDetail(travelers ?? [], passengerDetails ?? [])
  setListDetailTraveler(list)
}, [passengerDetails, travelers])

  return (
    <div>
      <div className="space-y-4">
        <Card className="border-0 shadow-none">
          <CardContent className="p-0">
            <div className="space-y-4">
              <h2 className="text-base font-medium text-gray-700">HÀNH KHÁCH ({listDetailTraveler.length ?? 0})</h2>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {travelers.map((traveler: TravelerType) => (
                  <TravelerCount key={traveler.id} traveler={traveler} onUpdateCount={updateTravelerCount} />
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <h2 className="text-base font-medium text-gray-700">THÔNG TIN HÀNH KHÁCH</h2>
          {listDetailTraveler
            .filter((traveler): traveler is TravelerType => traveler.id !== undefined)
            .map((traveler: TravelerType) => (
              <TravelerDetails key={traveler.passengerId} passengerId={traveler.passengerId} traveler={traveler} />
            ))}
        </div>
        <TermsConditions />
      </div>
    </div>
  )
}

export default TravelList
