import tourService from "@/services/Tour.service"
import { ITour } from "@/types/entities/Tour"
import { useSnackbar } from "notistack"
import { useState } from "react"

function useTour() {
    const { enqueueSnackbar } = useSnackbar()
    const [tour, setTour] = useState<ITour>()
    const [tours, setTours] = useState<ITour[]>([])
    const [loading, setLoading] = useState(false)


    const handleGetTourById = async (id?: string) => {
        console.log("heeee", id)
      try {
        const res: any = await tourService.getById(`${id}`)
        if (res?.statusCode > 200) {
          enqueueSnackbar({ variant: 'error', message: 'Server bug' })
        } else {
          setTour(res.data)
        }
      } catch (error) {
        console.error('❌ handleGetTourById error:', error)
        enqueueSnackbar({ variant: 'error', message: 'Client bug' })
      }
    }

    const handleSearchTourMinMax = async (min: string | number, max: string | number) => {
      try {
        const response: any = await tourService.searchTourMinMaxPrice(min, max)
        if (response?.statusCode > 200) {
          enqueueSnackbar({ variant: 'error', message: 'Server bug' })
        }
        return response.data
      } catch (error) {
        console.error('❌ handleSearchTourMinMax error:', error)
        enqueueSnackbar({ variant: 'error', message: 'Client bug' })
        return [] // fallback để không gây lỗi render
      }
    }

    const handleGetTours = async () => {
      setLoading(true)
      try {
        const res: any = await tourService.getAll()
        if (res?.statusCode > 200) {
          enqueueSnackbar({ variant: 'error', message: 'Server bug' })
        } else {
          setTours(res.data)
        }
      } catch (error) {
        console.error('❌ handleGetTours error:', error)
        enqueueSnackbar({ variant: 'error', message: 'Client bug' })
      } finally {
        setLoading(false)
      }
    }

    return {
      tour,
      tours,
      loading,
      handleGetTourById,
      handleGetTours,
      handleSearchTourMinMax,
    }      
}

export default useTour