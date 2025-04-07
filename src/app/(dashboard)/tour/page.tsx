import {
  AchievementComponent,
  BannerTourComponent,
  CheapTourContainerComponent,
  DiscoverContainerComponent,
  HotTourContainerComponent,
  NewestTourContainerComponent,
  TourSearchContainerComponent,
} from '@/containers/tour/components'

export default function TourPage() {
  return (
    <>
      <TourSearchContainerComponent />
      <div className="mx-4 md:mx-16">
        <DiscoverContainerComponent />
        <CheapTourContainerComponent />
        <BannerTourComponent />
        <NewestTourContainerComponent />
        <AchievementComponent />
        <HotTourContainerComponent />
      </div>
    </>
  )
}
