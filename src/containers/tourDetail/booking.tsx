'use client'
import { StarSvgIcon } from '@/assets/svgs'
import { Button } from '@/components/ui'
import { MAX_PRICE_TOUR, MIN_PRICE_TOUR } from '@/constants'
import api from '@/libs/axios/axios.config'
import { TourResponseDTO } from '@/models/response/dashboard'
import { FORMAT_MONEY } from '@/utils/formatMoney'

import {
  ArrowLeftOutlined,
  FieldTimeOutlined,
  HomeOutlined,
  IdcardOutlined,
  ScheduleOutlined,
  UsergroupDeleteOutlined,
} from '@ant-design/icons'
import { Divider } from '@heroui/divider'
import { TimerIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

type Props = {
  tourDetail: TourResponseDTO
}

export const BookingTourDetailComponent = ({ tourDetail }: Props) => {
  const [tourSuggest, setTourSuggest] = useState<TourResponseDTO[]>([])

  const fetchTourSuggest = async () => {
    try {
      const response = await api(
        `${process.env.NEXT_PUBLIC_BOOKING_SERVICE}/tours/search?minPrice=${MIN_PRICE_TOUR}&maxPrice=${MAX_PRICE_TOUR}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        },
      )
      console.log(response.data.data)

      setTourSuggest(response.data.data)
    } catch (error) {
      console.error('Lỗi khi gọi API:', error)
    }
  }
  useEffect(() => {
    fetchTourSuggest()
  }, [])
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-5">
      {/* info */}
      <div className="col-span-3 w-full bg-white px-4 py-4 lg:col-span-4">
        <h1 className="text-center text-2xl">Lịch khởi hành</h1>
        {/* body */}
        <div className="grid grid-cols-12">
          {/* col1 */}
          <div className="col-span-2">
            <div className="mb-5 rounded-sm bg-colorbrand-burntSienna-500 py-2 text-center lg:w-8/12 lg:rounded-md">
              <h3 className="w-full text-sm font-bold text-white lg:text-base">Chọn tháng</h3>
            </div>
            <div className="flex max-h-60 flex-col gap-2 overflow-auto">
              <div className="rounded-sm border-1 py-2 text-center hover:cursor-pointer hover:opacity-80 lg:w-8/12 lg:rounded-md">
                <h3 className="w-full px-1 text-sm font-bold lg:text-base">4/2025</h3>
              </div>
              <div className="rounded-sm border-1 py-2 text-center hover:cursor-pointer hover:opacity-80 lg:w-8/12 lg:rounded-md">
                <h3 className="w-full px-1 text-sm font-bold lg:text-base">5/2025</h3>
              </div>
              <div className="rounded-sm border-1 py-2 text-center hover:cursor-pointer hover:opacity-80 lg:w-8/12 lg:rounded-md">
                <h3 className="w-full px-1 text-sm font-bold lg:text-base">6/2025</h3>
              </div>
              <div className="rounded-sm border-1 py-2 text-center hover:cursor-pointer hover:opacity-80 lg:w-8/12 lg:rounded-md">
                <h3 className="w-full px-1 text-sm font-bold lg:text-base">7/2025</h3>
              </div>
              <div className="rounded-sm border-1 py-2 text-center hover:cursor-pointer hover:opacity-80 lg:w-8/12 lg:rounded-md">
                <h3 className="w-full px-1 text-sm font-bold lg:text-base">8/2025</h3>
              </div>
            </div>
          </div>
          {/* col 2*/}
          <div className="col-span-10 mx-2 flex w-full flex-col items-center border-1 px-3">
            <div className="flex w-full">
              <div className="flex w-full items-center gap-2">
                <ArrowLeftOutlined />
                {''}
                <Link
                  href={'#'}
                  onClick={(e) => {
                    window.history.back()
                  }}
                >
                  Quay lại
                </Link>
              </div>
              <h3 className="text-lg font-bold text-colorbrand-burntSienna-500">31/01/2025</h3>
            </div>
            <Divider />
            <div className="w-full">
              <h1 className="my-2 text-center text-xl font-bold">Giá tour</h1>
              {/* container list price */}
              <div className="flex h-auto flex-col items-start gap-2 lg:flex-row">
                <div className="w-full flex-1">
                  <div className="flex flex-col items-start lg:flex-row">
                    <div className="flex w-full flex-col">
                      <h3 className="text-lg font-bold">Giá người lớn</h3>
                      <p className="text-gray-500">(Từ 12 tuổi trở lên )</p>
                    </div>
                    <h3 className="w-fit text-xl font-bold text-orange-500">24.999.999đ</h3>
                  </div>
                  <Divider className="my-2 lg:hidden" />
                  <div className="flex flex-col items-start lg:flex-row">
                    <div className="flex w-full flex-col">
                      <h3 className="text-lg font-bold">Giá người lớn</h3>
                      <p className="text-gray-500">(Từ 12 tuổi trở lên )</p>
                    </div>
                    <h3 className="w-fit text-xl font-bold text-orange-500">24.999.999đ</h3>
                  </div>
                  <Divider className="w-full lg:hidden" />
                </div>
                <div className="hidden max-h-24 min-h-20 w-[1px] border-1 border-gray-300 lg:block"></div>
                <div className="flex-1">
                  <div className="flex flex-col items-start lg:flex-row">
                    <div className="flex w-full flex-col">
                      <h3 className="text-lg font-bold">Giá người lớn</h3>
                      <p className="text-gray-500">(Từ 12 tuổi trở lên )</p>
                    </div>
                    <h3 className="w-fit text-xl font-bold text-orange-500">24.999.999đ</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="my-2 rounded-md border-1 bg-yellow-100 px-2 py-2 text-colorbrand-burntSienna-500">
              Chỉ nhận khách quốc tịch nước ngoài hoặc khách đã có visa Hàn Quốc còn hiệu lực. Tour bao gồm visa đoàn
              nhập cảnh (không phải visa cá nhân). Tham quan đầy đủ theo chương trình, không tách đoàn. Chưa bao gồm
              tiền tip hướng dẫn viên và tài xế: 153.000 VND/ngày/khách (tương đương 6 USD/ngày/khách).
            </div>
          </div>

          {/*  end col 2 */}
        </div>
      </div>
      {/* price and sit */}
      <div className="col-span-2 lg:col-span-1">
        <div className="bg-white px-1 py-4">
          <h1 className="text-2xl font-bold">Giá:</h1>
          <h1 className="flex">
            <p className="text-2xl font-bold text-colorbrand-burntSienna-600">23.990.000đ </p> <p> / Khách </p>
          </h1>
          <div className="flex gap-2">
            <h3 className="font-bold text-colorbrand-burntSienna-500">
              {' '}
              <span>
                <IdcardOutlined className="w-8 pr-2" />
              </span>
              Mã tour:{' '}
            </h3>
            <h3 className="font-bold text-colorbrand-midnightBlue-900">97822412354</h3>
          </div>
          <div className="flex gap-2">
            <h3 className="font-bold text-colorbrand-burntSienna-500">
              <span>
                <HomeOutlined className="w-8 pr-2" />
              </span>
              Khởi hành:{' '}
            </h3>
            <h3 className="font-bold text-colorbrand-midnightBlue-900">Hồ Chí Minh</h3>
          </div>
          <div className="flex gap-2">
            <h3 className="font-bold text-colorbrand-burntSienna-500">
              {' '}
              <span>
                <ScheduleOutlined className="w-8 pr-2" />
              </span>
              Ngày khởi hành:{' '}
            </h3>
            <h3 className="font-bold text-colorbrand-midnightBlue-900">20-5-2003</h3>
          </div>
          <div className="flex gap-2">
            <h3 className="font-bold text-colorbrand-burntSienna-500">
              <span>
                <FieldTimeOutlined className="w-8 pr-2" />
              </span>
              Thời gian:{' '}
            </h3>
            <h3 className="font-bold text-colorbrand-midnightBlue-900">3 ngày 2 đêm</h3>
          </div>
          <div className="flex gap-2">
            <h3 className="font-bold text-colorbrand-burntSienna-500">
              <span>
                <UsergroupDeleteOutlined className="w-8 pr-2" />
              </span>
              Số chỗ còn:{' '}
            </h3>
            <h3 className="font-bold text-colorbrand-midnightBlue-900">24</h3>
          </div>
          <div className="m-auto my-2 flex w-3/4 justify-between gap-4">
            <Button
              className="flex-2 border-colorbrand-burntSienna-600 text-colorbrand-burntSienna-600 hover:border-black"
              variant="outline"
            >
              ngày khác
            </Button>
            <Button className="flex-1 bg-colorbrand-burntSienna-600">Đặt tour</Button>
          </div>
        </div>
      </div>
      {/* images */}
      {tourDetail && (
        <div className="col-span-4 m-auto grid w-full grid-cols-3 gap-4 bg-white">
          {tourDetail?.tourImageResponses?.map((image, index) => {
            return (
              <div key={index} className="relative aspect-[4/3] w-full overflow-hidden rounded-md">
                <Image
                  key={index}
                  src={image.imageUrl || (process.env.NEXT_PUBLIC_IMAGE as string)}
                  className="object-cover"
                  fill={true}
                  alt="Hình vị trí tour"
                />
              </div>
            )
          })}
        </div>
      )}
      {/* suggestion */}
      {tourDetail?.tourImageResponses?.length != 0 && (
        <div className="md:col-span-6 md:hidden lg:col-span-1 lg:block">
          <h1 className="mb-3 text-center font-serif text-lg font-bold text-colorbrand-midnightBlue-800">
            Có thể bạn thích{' '}
          </h1>
          <div>
            <div className="flex flex-col gap-3">
              {tourSuggest?.map((tour, index) => {
                if (index < 3) {
                  return (
                    <div
                      key={index}
                      className="flex gap-3 rounded-md bg-white px-4 py-2 text-sm hover:cursor-pointer hover:opacity-70"
                    >
                      <div className="relative aspect-[4/3] basis-1/3 overflow-hidden rounded-lg">
                        <Image
                          alt="Hình ảnh địa điểm"
                          src={tour.thumbnail as string}
                          className="object-cover"
                          key={index}
                          fill
                        />
                      </div>
                      <div className="flex basis-2/3 flex-col">
                        <h3 className="line-clamp-1 text-sm font-black text-colorbrand-midnightBlue-900">
                          {tour.name}
                        </h3>
                        <p className="flex">
                          <TimerIcon />3 Ngày 2 đêm
                        </p>
                        <div className="flex">
                          <StarSvgIcon className="w-4" /> <span>(4.9)</span>
                        </div>
                        <h3 className="text-lg font-black text-colorbrand-midnightBlue-900">{FORMAT_MONEY(2945000)}</h3>
                      </div>
                    </div>
                  )
                }
                return null
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
