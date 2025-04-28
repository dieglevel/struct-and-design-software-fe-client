'use client'

import { BannerTourComponent, ResultComponent } from '@/containers/search'
import SideBarComponent from '@/containers/search/sidebar'

export default function TourPage() {
  return (
    <>
      <BannerTourComponent />
      <div className="container flex flex-row px-10 py-8">
        <SideBarComponent />
        <ResultComponent />
      </div>
    </>
  )
}
