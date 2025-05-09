import tourService from "@/services/Tour.service"
import { ITour } from "@/types/entities/Tour"
import { useSnackbar } from "notistack"
import { useState } from "react"

function useTour() {
    const { enqueueSnackbar } = useSnackbar()
    const [tour, setTour] = useState<ITour>()


    const handleGetTourById = async (id?: string) => {
        const res: any = await tourService.getById(`${id}`)
        if (res?.statusCode > 200) {
            enqueueSnackbar({ variant: 'error', message: "Server bug" })
        }
        setTour(res.data)
    }
    const handleSearchTourMinMax = async (min: string | number, max: string | number) => {
        const response: any = await tourService.searchTourMinMaxPrice(min, max)
        if (response?.statusCode > 200) {
            enqueueSnackbar({ variant: 'error', message: "Server bug" })
        }
        return response.data
    }
    return {
        tour,
        handleGetTourById,
        handleSearchTourMinMax
    }
}

export default useTour