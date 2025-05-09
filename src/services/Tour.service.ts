import { ITour } from "@/types/entities/Tour";
import { EntityRepository } from "./EntityRepository.service";
import api from "@/libs/axios/axios.config";

const END_POINT = `${process.env.NEXT_PUBLIC_BOOKING_SERVICE}/tours`

class TourService extends EntityRepository<ITour> {

    searchTourMinMaxPrice = async (minPrice: number | string, maxPrice: number | string) => {
        return await api.get(`${END_POINT}/search?minPrice=${minPrice}&maxPrice=${maxPrice}`)
    }
}

const tourService = new TourService(END_POINT)

export default tourService