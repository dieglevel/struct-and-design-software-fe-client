import tourService from "@/services/Tour.service"
import { ITour } from "@/types/entities/Tour"
import { useParams } from "next/navigation"
import { useSnackbar } from "notistack"
import { useState } from "react"

function useTour() {
    const { enqueueSnackbar } = useSnackbar()
    const { id } = useParams()
    const [tour, setTour] = useState<ITour>()


    const handleGetTourById = async () => {
        const res: any = await tourService.getById(`${id}`)
        if (res?.statusCode > 200) {
            enqueueSnackbar({ variant: 'success', message: "Server bug" })
        }
        setTour(res.data)
    }

    return {
        tour,
        handleGetTourById
    }
}

export default useTour