"use client";

import { BannerTourComponent, ResultComponent } from "@/containers/search";
import SideBarComponent from "@/containers/search/sidebar";


export default function TourPage() {
  return (
    <>
      <BannerTourComponent/>  
      <div className="container mx-auto flex flex-row  py-8">
          <SideBarComponent/>
          <ResultComponent/>
      </div>
    </>
  )
}
