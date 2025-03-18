"use client";

import React from "react";
import {
  BannerTourComponent,
  DestinationFavoriteContainer,
  DiscoverComponent,
  ReviewContainer,
  SearchComponent,
  SlideReview,
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
        <ReviewContainer />
        <SlideReview/>
      </div>
    </>
  );
};

export default Home;
