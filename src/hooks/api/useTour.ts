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

    // const handleGetTours = async () => {
    //   setLoading(true)
    //   try {
    //     const start = Date.now()
    //     const totalRequests = 6 // số request muốn test

    //     for (let i = 1; i <= totalRequests; i++) {
    //       tourService
    //         .getAll()
    //         .then((res: any) => {
    //           const time = Date.now() - start
    //           console.log(`✅ Request ${i} done at +${time}ms`)

    //           if (res?.statusCode > 200) {
    //             enqueueSnackbar({ variant: 'error', message: 'Server bug' })
    //           } else {
    //             // Bạn có thể setTours cho lần đầu, hoặc append, tùy mục đích
    //             if (i === 1) setTours(res.data)
    //           }
    //         })
    //         .catch((error) => {
    //           console.error(`❌ Request ${i} failed:`, error)
    //           enqueueSnackbar({ variant: 'error', message: 'Client bug' })
    //         })
    //     }
    //   } finally {
    //     // Để đảm bảo loading false sau khi tất cả request kết thúc, bạn cần await tất cả.
    //     // Cách đơn giản: setLoading(false) sau 1 khoảng delay, hoặc dùng Promise.all

    //     setTimeout(() => setLoading(false), 2500) // tạm thời 2.5s cho 6 request
    //   }
    // }

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