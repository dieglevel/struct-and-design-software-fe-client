import { ExperienceIcon } from "@/assets/svgs/tour";
import { AdviseIcon } from "@/assets/svgs/tour/advise";
import { PaymentIcon } from "@/assets/svgs/tour/payment";

export const AchievementComponent = () => {
    return (
        <div className="pt-16">
            <div className="flex justify-between px-28">
                <div className="flex items-center ">
                    <AdviseIcon className="w-16" />
                    <div>
                        <h3 className="text-colorbrand-midnightBlue-900 text-lg font-bold">
                            Tư vấn chuyên nghiệp
                        </h3>
                        <p>Hỗ trợ nhiệt tình, chăm sóc chu đáo</p>
                    </div>
                </div>
                <div className="flex items-center">
                    <ExperienceIcon className="w-16" />
                    <div>
                        <h3 className="text-colorbrand-midnightBlue-900 text-lg font-bold">
                            Tư vấn chuyên nghiệp
                        </h3>
                        <p>Hỗ trợ nhiệt tình, chăm sóc chu đáo</p>
                    </div>
                </div>
                <div className="flex items-center">
                    <PaymentIcon className="w-16" />
                    <div>
                        <h3 className="text-colorbrand-midnightBlue-900 text-lg font-bold">
                            Tư vấn chuyên nghiệp
                        </h3>
                        <p>Hỗ trợ nhiệt tình, chăm sóc chu đáo</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
