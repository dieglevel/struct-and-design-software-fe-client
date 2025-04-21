'use client'
import React from 'react'
import {
  DestinationFavoriteContainer,
  DiscoverComponent,
  ReviewContainer,
  SearchComponent,
  SlideReview,
  TourPromotionComponent,
  SubComponent,
} from '@/containers/home'
import { motion, useScroll } from 'motion/react'

import BannerSale from '@/containers/home/bannerSale'
const Home = () => {
  const { scrollYProgress } = useScroll()

  return (
    <>
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: 4,
          borderRadius: '0 2px 0 2px',
          originX: 0,
          zIndex: 9999,
          backgroundColor: '#F97916',
        }}
      />
      <BannerSale />
      {/* search */}
      {/* <BannerTourComponent /> */}
      <div className="relative flex flex-col items-center justify-center">
        <SearchComponent />
        {/* About me */}
        <SubComponent />
        {/* tour promotion */}
        <TourPromotionComponent />
        {/* discover */}
        <DiscoverComponent />
        <DestinationFavoriteContainer />
        <ReviewContainer />
        <SlideReview />
      </div>
    </>
  )
}

export default Home
