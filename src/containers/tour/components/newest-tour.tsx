'use client'
import { TopRightIcon } from '@/assets/svgs'
import { MAX_PRICE_TOUR, MIN_PRICE_TOUR } from '@/constants'
import api from '@/libs/axios/axios.config'
import { TourResponseDTO } from '@/models/response/dashboard'
import { FORMAT_MONEY } from '@/utils/formatMoney'
import { ClockCircleOutlined } from '@ant-design/icons'
import { Divider } from '@heroui/divider'
import { Image } from '@heroui/image'
import { Rating } from '@mui/material'
import { useRouter } from 'next/navigation'
import { ReactNode, useEffect, useState } from 'react'
export const NewestTourContainerComponent = () => {
    const [data_summer, setData] = useState<TourResponseDTO[]>([])
  const route = useRouter()
  const goDetail = (id: string) => {
    route.push(`tour/${id}`)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(
          `${process.env.NEXT_PUBLIC_BOOKING_SERVICE}/tours/search?minPrice=${MIN_PRICE_TOUR}&maxPrice=${MAX_PRICE_TOUR}`,
        )
        setData(response.data)
        console.log('fetchData',response.data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    fetchData()
  })

  return (
    <div>
      <h1 className="my-6 text-xl font-bold uppercase text-colorbrand-midnightBlue-900 md:my-16 md:text-2xl">
        Tour mới đăng<div className="border-gray w-20 border-2"></div>
      </h1>
      <div className="grid grid-cols-2 place-items-center gap-4 lg:gap-14 md:grid-cols-3 lg:grid-cols-4">
        {data_summer?.length> 0 &&
        (
            data_summer.map((item, index): ReactNode => {
          return (
            <div
              key={index}
              className="rounded-lg bg-white shadow-lg hover:cursor-pointer"
              onClick={() => {
                goDetail('726a784b-3720-43f4-a2a4-c513734b3f1f')
              }}
            >
              {/* discount and favorite */}
              {/* <div className="rounded-t-lg relative">
                                <div className=" px-4 absolute translate-y-3 top-0 left-0 right-0 z-[11] flex justify-between ">
                                    <div className="bg-white rounded-lg p-2">
                                        <h3 className="font-bold font-serif">{`-${item.discount}%`}</h3>
                                    </div>
                                    {item.isFavorite ? (
                                        <FavoriteIcon className="w-6 md:w-8" />
                                    ) : (
                                        <UnFavoriteIcon className="w-6 md:w-8" />
                                    )}
                                </div>
                            </div> */}
              <div className="h-32 w-full overflow-hidden rounded-t-lg md:h-48 lg:h-60">
                <Image
                  alt="Hình ảnh địa điểm"
                  src={item.thumbnail}
                  className="aspect-[4/3] w-full object-cover"
                  key={index}
                  radius="none"
                />
              </div>
              <div className="  flex flex-col justify-between">
                <h3 className="text-sm text-colorbrand-midnightBlue-900 md:text-xl line-clamp-3  lg:line-clamp-2 ">{item.name}</h3>
                <div className="flex flex-col justify-between lg:flex-row">
                  <h3 className="text-sm text-gray-500 md:text-lg line-clamp-2">
                    <ClockCircleOutlined /> {item.description}
                  </h3>
                  <Rating
                    name="text-feedback"
                    // value={item.rating}
                    value={index % 5}
                    readOnly
                    precision={0.5}
                  />
                </div>
                <Divider className="my-5" />
                <div className="flex flex-col justify-between lg:flex-row">
                  <h3 className="text-lg font-bold text-colorbrand-midnightBlue-900">
                    {FORMAT_MONEY(item.price as number)} <span className="relative bottom-3 text-base underline">đ</span>
                  </h3>
                  <a className="text-colorbrand-burntSienna-500 lg:text-base">
                    Xem chi tiết <TopRightIcon className="inline" />
                  </a>
                </div>
              </div>
            </div>
          )
        })
        )
        }
      </div>
    </div>
  )
}