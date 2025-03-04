"use client";

import {
    BannerTourComponent,
    DiscoverContainerComponent,
    SuggestionTourContainerComponent,
    SummerTourContainerComponent,
    TourSearchContainerComponent,
} from "./components";

const Tour = () => {
    return (
        <>
            <TourSearchContainerComponent />
            <div className="mx-4 md:mx-16">
                <DiscoverContainerComponent />
                <SummerTourContainerComponent />
                <BannerTourComponent />
                <SuggestionTourContainerComponent />
            </div>
        </>
    );
};

export default Tour;
