'use client'

import { useEffect, useState, Suspense } from 'react'
import { ContactInformation } from '@/containers/tourBooking/contact-info'
import BookingFormProvider from './context'
import { TourSummary } from '@/containers/tourBooking/tour-summary'
import TravelList from './travel-list'
import PaymentBookingPage from './payment-booking'
import useAuth from '@/hooks/api/useAuth'
import LoginRequiredDialog from '@/containers/tourBooking/LoginRequiredDialog'
import { Spinner } from '@heroui/react'


export default function TourBookingPage() {
  const [isPayment, setIsPayment] = useState(false)
  const [showDialog, setShowDialog] = useState(false)
  
  const { me } = useAuth()
  
  const isLoadingMe = !me || !me.email

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      setShowDialog(true)
    } else if (me && me.email) {
      setShowDialog(false)
    }
  }, [me])
  

  const nextPayment = () => setIsPayment(true)

  if (isLoadingMe) return (
    <div className="flex h-screen items-center justify-center">
      <Spinner
        size="lg"
        color="primary"
        classNames={{
          base: 'h-12 w-12 border-4 border-t-transparent rounded-full animate-spin',
        }}
      />
    </div>
  )


  return (
    <Suspense fallback={null}>
      <BookingFormProvider>
        <main className="min-h-screen bg-white">
          <LoginRequiredDialog open={showDialog} onClose={() => setShowDialog(false)} />
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
