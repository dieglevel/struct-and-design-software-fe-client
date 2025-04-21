import tourService from "@/services/Tour.service"
import { useParams } from "next/navigation"
import { useSnackbar } from "notistack"
import { useEffect, useState } from "react"

function useTour() {
    const { enqueueSnackbar } = useSnackbar()
    const { id } = useParams()
    const [tour, setTour] = useState()

    
    const handleGetTourById = async () => {
        const res = await tourService.getById(`${id}`)
        if (res?.statusCode > 200) {
            enqueueSnackbar({ variant: 'success', message: "Server bug" })
        }
        setTour(res.data)
    }
    useEffect(() => {
        handleGetTourById()
    }, [id])


    return {
        tour,
        handleGetTourById
    }
}

export default useTour