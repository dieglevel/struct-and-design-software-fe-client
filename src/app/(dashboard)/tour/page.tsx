import {
  AchievementComponent,
  BannerTourComponent,
  CheapTourContainerComponent,
  DiscoverContainerComponent,
  RecentlyContainerComponent,
  SuggestionTourContainerComponent,
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
        {/* <SuggestionTourContainerComponent /> */}
        <AchievementComponent />
        {/* <RecentlyContainerComponent /> */}
      </div>
    </>
  )
}
