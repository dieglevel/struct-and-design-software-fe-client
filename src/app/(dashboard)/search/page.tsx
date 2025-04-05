"use client";

import { BannerTourComponent, ResultComponent } from "@/containers/search";
import SideBarComponent from "@/containers/search/sidebar";


export default function TourPage() {
  return (
    <>
      <BannerTourComponent/>  
      <div className="mx-4 md:mx-16 container flex flex-row gap-4 py-8">
          <SideBarComponent/>
          <ResultComponent/>
      </div>
    </>
  )
}
