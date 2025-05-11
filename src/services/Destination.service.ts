import { IDestinationEntity } from "@/models/response/tour";
import { EntityRepository } from "./EntityRepository.service";

const END_POINT_DESTINATION = `${process.env.NEXT_PUBLIC_BOOKING_SERVICE}/destinations`

class DestinationService extends EntityRepository<IDestinationEntity> {
}
const destinationService = new DestinationService(END_POINT_DESTINATION)

export default destinationService