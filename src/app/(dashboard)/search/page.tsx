'use client'
import { BannerTourComponent, ResultComponent } from '@/containers/search'
import SideBarComponent from '@/containers/search/sidebar'
import { Suspense } from 'react'

export default function TourPage() {
  return (
    <>
      <Suspense fallback={null}>
        <BannerTourComponent />
        <div className="container flex flex-row px-10 py-8">
          <SideBarComponent />
          <ResultComponent />
        </div>
      </Suspense>
    </>
  )
}
