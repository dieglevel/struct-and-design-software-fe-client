import Tour from "@/containers/tour";


import {
    AchievementComponent,
    BannerTourComponent,
    DiscoverContainerComponent,
    RecentlyContainerComponent,
    SuggestionTourContainerComponent,
    SummerTourContainerComponent,
    TourSearchContainerComponent,
} from "../../../components/dashboard/tour";

const Tour = () => {
    return (
        <>
            <TourSearchContainerComponent />
            <div className="mx-4 md:mx-16">
                <DiscoverContainerComponent />
                <SummerTourContainerComponent />
                <BannerTourComponent />
                <SuggestionTourContainerComponent />
                <AchievementComponent />
                <RecentlyContainerComponent />
            </div>
        </>
    );

};

export default Page;
