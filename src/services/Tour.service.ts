import { ITour } from "@/types/entities/Tour";
import { EntityRepository } from "./EntityRepository.service";

const END_POINT = `${process.env.NEXT_PUBLIC_BOOKING_SERVICE}/tours`

class TourService extends EntityRepository<ITour> {
}

const tourService = new TourService(END_POINT)

export default tourService