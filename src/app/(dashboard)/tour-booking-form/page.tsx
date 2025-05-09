'use client'
import { ContactInformation } from '@/containers/tourBooking/contact-info'
import BookingFormProvider from './context'
import { TourSummary } from '@/containers/tourBooking/tour-summary'
import TravelList from './travel-list'
import { Suspense, useState } from 'react'
import PaymentBookingPage from './payment-booking'

export default function TourBookingPage() {
  const [isPayment, setIsPayment] = useState(false)
  const nextPayment = () => {
    setIsPayment(true)
  }
  return (
    <Suspense fallback={null}>
      <BookingFormProvider>
        <main className="min-h-screen bg-white">
          {!isPayment && (
            <div className="container mx-auto px-4 py-8">
              <h1 className="mb-8 text-center text-2xl font-bold text-orange-500">ĐẶT TOUR</h1>
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                <div className="space-y-8 lg:col-span-2">
                  <ContactInformation />
                  <TravelList />
                </div>
                <div className="lg:col-span-1">
                  <TourSummary nextPayment={nextPayment} />
                </div>
              </div>
            </div>
          )}
          {isPayment && <PaymentBookingPage />}
        </main>
      </BookingFormProvider>
    </Suspense>
  )
}
