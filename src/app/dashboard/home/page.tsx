"use client";

import React from "react";
import {
  BannerTourComponent,
  DestinationFavoriteContainer,
  DiscoverComponent,
  SearchComponent,
  TourPromotionComponent,
} from "./components";
import { SubComponent } from "./components/sub-container";

const Home = () => {
  return (
    <>
      {/* search */}
      <BannerTourComponent />
      <div className="relative flex flex-col items-center justify-center ">
        <SearchComponent />
        {/* About me */}
        <SubComponent />
        {/* tour promotion */}
        <TourPromotionComponent />
        {/* discover */}
        <DiscoverComponent />
        <DestinationFavoriteContainer />
      </div>
    </>
  );
};

export default Home;
