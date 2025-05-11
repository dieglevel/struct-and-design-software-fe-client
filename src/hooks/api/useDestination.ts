import { IDestinationEntity } from "@/models/response/tour"
import destinationService from "@/services/Destination.service"
import { BaseResponse } from "@/types"
import { useState } from "react"

function useDestination() {
    const [destinations, setDestinations] = useState<BaseResponse<IDestinationEntity[]>>()
    const [loading, setLoading] = useState(false)


    const handleGetDestinations = async () => {
        setLoading(true)
        try {
            const res: any = await destinationService.getAll()
            setDestinations(res.data)
        } catch (error) {
            console.error('Lỗi khi gọi API lấy tour:', error)
        }
        finally {
            setLoading(false)
        }
    }

    return {
        handleGetDestinations, loading, destinations
    }
}

export default useDestination