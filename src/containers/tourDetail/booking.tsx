'use client'
import { StarSvgIcon } from '@/assets/svgs'
import { Button } from '@/components/ui'
import TourLoading from '@/components/ui/loading'
import { MAX_PRICE_TOUR, MIN_PRICE_TOUR } from '@/constants'
import api from '@/libs/axios/axios.config'
import { ITour } from '@/types/entities/Tour'
import { ITourSchedule } from '@/types/entities/TourSchedule'
import { FORMAT_MONEY } from '@/utils/formatMoney'

import {
  FieldTimeOutlined,
  HomeOutlined,
  ScheduleOutlined,
  UsergroupDeleteOutlined,
} from '@ant-design/icons'
import { Divider } from '@heroui/divider'
import { TimerIcon } from 'lucide-react'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import { useEffect, useState } from 'react'

type Props = {
  tourDetail?: ITour
}

// ;[
//   {
//     tourScheduleId: 'e4542597-4198-4e58-bded-64c89bca03c4',
//     name: 'Ngày 10 tháng 2',
//     description: 'Ngày 10 tháng 2',
//     startDate: '2025-04-21T12:20:36.684',
//     endDate: '2025-04-21T12:20:36.684',
//     adultPrice: 1000000,
//     childPrice: 100000,
//     babyPrice: 5000,
//     slot: 10,
//     tourId: '726a784b-3720-43f4-a2a4-c513734b3f1f',
//   },
// ]
export const BookingTourDetailComponent = ({ tourDetail }: Props) => {
  const [tourSuggest, setTourSuggest] = useState<ITour[]>([])

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
      setTourSuggest(response.data.data)
    } catch (error) {
      console.error('Lỗi khi gọi API:', error)
    }
  }
  useEffect(() => {
    fetchTourSuggest()
  }, [])
  const handleNavigation = () => {
    redirect('/tour-booking-form')
  }

  useEffect(() => {
    if (tourDetail?.tourScheduleResponses?.length) {
      setSelectedScheduleTour(tourDetail.tourScheduleResponses[0])
    }
  }, [tourDetail])

  const [selectedScheduleTour, setSelectedScheduleTour] = useState<ITourSchedule>()
  const handleClickTourScheduleBtn = (scheduleTour: ITourSchedule) => {
    setSelectedScheduleTour(scheduleTour)
  }
  return (
    <>
      {!tourDetail ? (
        <TourLoading />
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-5">
          {/* info */}
          <div className="col-span-3 w-full bg-white px-4 py-4 lg:col-span-4">
            {/* body */}
            <div className="grid grid-cols-12 gap-0 py-6">
              {/* col1 */}
              <div className="col-span-1">
                {/* <div className="mb-5 rounded-sm  py-2 text-center lg:rounded-md">
                  <button className="font-500 w-full text-white lg:text-base">Chọn tháng</button>
                </div> */}
                {tourDetail?.tourScheduleResponses?.length === 0 && (
                  <p className="text-center text-sm text-gray-500">Chưa có lịch</p>
                )}

                <div className="flex max-h-60 flex-col gap-1 overflow-auto">
                  {Array.isArray(tourDetail?.tourScheduleResponses) &&
                    tourDetail?.tourScheduleResponses.length !== 0 &&
                    tourDetail?.tourScheduleResponses.map((detail: ITourSchedule, index: number) => (
                      <div
                        key={index}
                        className={`rounded-sm border-1 py-2 text-center hover:cursor-pointer hover:opacity-80 lg:rounded-md ${detail.tourScheduleId === selectedScheduleTour?.tourScheduleId && 'bg-colorbrand-burntSienna-500 text-white'}`}
                      >
                        <button
                          onClick={() => handleClickTourScheduleBtn(detail)}
                          className={`font-500 w-full px-1 text-sm lg:text-base`}
                        >
                          {detail?.name}
                        </button>
                      </div>
                    ))}
                </div>
              </div>
              {/* col 2*/}
              {tourDetail?.tourScheduleResponses?.length === 0 ? (
                <div className="col-span-11 w-full text-center text-sm text-gray-500">
                  Hiện tại chưa có lịch khởi hành.
                </div>
              ) : (
                <div className="col-span-11 mx-2 flex w-full flex-col items-center border-1 border-gray-200 px-3 pb-4 pt-3">
                  <h1 className="text-center text-2xl font-bold uppercase text-slate-600">Lịch khởi hành</h1>
                  <div className="flex w-full justify-between py-2">
                    <p className="font-500 text-lg text-colorbrand-burntSienna-500">
                      Ngày đi{' '}
                      <span className="mx-2 text-slate-600">
                        {selectedScheduleTour?.startDate
                          ? new Date(selectedScheduleTour.startDate).toLocaleDateString('vi-VN')
                          : ''}
                      </span>
                    </p>
                    <p className="font-500 text-lg text-colorbrand-burntSienna-500">
                      Ngày về{' '}
                      <span className="mx-2 text-slate-600">
                        {selectedScheduleTour?.endDate
                          ? new Date(selectedScheduleTour.endDate).toLocaleDateString('vi-VN')
                          : ''}
                      </span>
                    </p>
                  </div>
                  <Divider />
                  <div className="w-full">
                    <h1 className="font-500 mb-4 mt-2 text-center text-xl text-slate-700">Giá tour</h1>
                    {/* container list price */}
                    <div className="flex h-auto flex-col items-start gap-2 lg:flex-row">
                      <div className="w-full flex-1 px-2">
                        <div className="mt-1 flex flex-col items-start lg:flex-row">
                          <div className="flex w-full flex-col">
                            <h3 className="font-500 text-lg">Giá người lớn</h3>
                            <p className="text-[12px] text-gray-500">(Từ 12 tuổi trở lên )</p>
                          </div>
                          <h3 className="font-500 w-fit text-xl text-orange-500">
                            {FORMAT_MONEY(selectedScheduleTour?.adultPrice ?? 0)}
                          </h3>
                        </div>
                        <Divider className="my-2 lg:hidden" />
                        <div className="mt-1 flex flex-col items-start lg:flex-row">
                          <div className="flex w-full flex-col">
                            <h3 className="font-500 text-lg">Trẻ em</h3>
                            <p className="text-[12px] text-gray-500">( Từ 2 đến 11 tuổi )</p>
                          </div>
                          <h3 className="font-500 w-fit text-xl text-orange-500">
                            {FORMAT_MONEY(selectedScheduleTour?.childPrice ?? 0)}
                          </h3>
                        </div>
                        <Divider className="w-full lg:hidden" />
                      </div>
                      <div className="hidden max-h-24 min-h-20 w-[1px] border-1 border-gray-300 lg:block"></div>
                      <div className="flex-1 px-2">
                        <div className="mt-1 flex flex-col items-start lg:flex-row">
                          <div className="flex w-full flex-col">
                            <h3 className="font-500 text-lg">Em bé</h3>
                            <p className="text-[12px] text-gray-500">(Dưới 2 tuổi)</p>
                          </div>
                          <h3 className="font-500 w-fit text-xl text-orange-500">
                            {FORMAT_MONEY(selectedScheduleTour?.babyPrice ?? 0)}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 rounded-md border-1 bg-yellow-100 px-4 py-2 text-colorbrand-burntSienna-600">
                    Chỉ nhận khách quốc tịch nước ngoài hoặc khách đã có visa Hàn Quốc còn hiệu lực. Tour bao gồm visa
                    đoàn nhập cảnh (không phải visa cá nhân). Tham quan đầy đủ theo chương trình, không tách đoàn. Chưa
                    bao gồm tiền tip hướng dẫn viên và tài xế: 153.000 VND/ngày/khách (tương đương 6 USD/ngày/khách).
                  </div>
                </div>
              )}

              {/*  end col 2 */}
            </div>
          </div>
          {/* price and sit */}
          <div className="col-span-2 lg:col-span-1">
            <>
              {tourDetail?.tourScheduleResponses?.length === 0 ? (
                <div className="col-span-11 w-full text-center text-sm text-gray-500">
                  Hiện tại chưa có lịch khởi hành.
                </div>
              ) : (
                <div className="bg-white px-4 pb-2 pt-4">
                  <h1 className="text-md font-bold text-gray-900">Giá:</h1>
                  <h1 className="flex">
                    <p className="text-2xl font-bold text-colorbrand-burntSienna-500">
                      {FORMAT_MONEY(selectedScheduleTour?.adultPrice ?? 0)}
                    </p>{' '}
                    <p className="ml-2 mt-1"> /Khách </p>
                  </h1>
                  <div className="mb-2 mt-4">
                    {/* <div className="mt-1 flex gap-1"> */}
                    {/* <h3 className="mr-1 text-sm font-bold text-colorbrand-burntSienna-500">
                    {' '}
                    <span>
                      <IdcardOutlined className="mr-2" />
                    </span>
                    Mã tour:{' '}
                  </h3> */}
                    {/* <h3 className="text-sm font-bold text-colorbrand-midnightBlue-700">
                    {selectedScheduleTour?.tourScheduleId}
                  </h3> */}
                    {/* </div> */}
                    <div className="mt-1 flex gap-1">
                      <h3 className="mr-1 text-sm font-bold text-colorbrand-burntSienna-500">
                        <span>
                          <HomeOutlined className="mr-2" />
                        </span>
                        Khởi hành:{' '}
                      </h3>
                      <h3 className="text-sm font-bold text-colorbrand-midnightBlue-700">Hồ Chí Minh</h3>
                    </div>
                    <div className="mt-1 flex gap-1">
                      <h3 className="mr-1 text-sm font-bold text-colorbrand-burntSienna-500">
                        {' '}
                        <span>
                          <ScheduleOutlined className="mr-2" />
                        </span>
                        Ngày khởi hành:{' '}
                      </h3>
                      <h3 className="text-sm font-bold text-colorbrand-midnightBlue-700">
                        {selectedScheduleTour?.startDate
                          ? new Date(selectedScheduleTour.startDate).toLocaleDateString('vi-VN')
                          : ''}
                      </h3>
                    </div>
                    <div className="mt-1 flex gap-1">
                      <h3 className="mr-1 text-sm font-bold text-colorbrand-burntSienna-500">
                        <span>
                          <FieldTimeOutlined className="mr-2" />
                        </span>
                        Thời gian:{' '}
                      </h3>
                      <h3 className="text-sm font-bold text-colorbrand-midnightBlue-700">3 ngày 2 đêm</h3>
                    </div>
                    <div className="mt-1 flex gap-1">
                      <h3 className="mr-1 text-sm font-bold text-colorbrand-burntSienna-500">
                        <span>
                          <UsergroupDeleteOutlined className="mr-2" />
                        </span>
                        Số chỗ còn:{' '}
                      </h3>
                      <h3 className="text-sm font-bold text-colorbrand-midnightBlue-700">24</h3>
                    </div>
                    <div className="m-auto mt-6 flex justify-between gap-2">
                      <Button
                        className="flex-2 border-colorbrand-burntSienna-600 text-colorbrand-burntSienna-600 hover:border-black"
                        variant="outline"
                      >
                        Ngày khác
                      </Button>
                      <Button onClick={handleNavigation} className="flex-1 bg-colorbrand-burntSienna-600">
                        Đặt tour
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </>
          </div>
          {/* images */}
          {tourDetail && (
            <div className="col-span-4 m-auto my-10 grid w-full grid-cols-3 gap-4 bg-white">
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
              <h1 className="font-500 mb-3 text-center font-serif text-lg text-colorbrand-midnightBlue-800">
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
                            <h3 className="line-clamp-1 text-sm font-black text-colorbrand-midnightBlue-700">
                              {tour.name}
                            </h3>
                            <p className="flex">
                              <TimerIcon />3 Ngày 2 đêm
                            </p>
                            <div className="flex">
                              <StarSvgIcon className="w-4" /> <span>(4.9)</span>
                            </div>
                            <h3 className="text-lg font-black text-colorbrand-midnightBlue-900">
                              {FORMAT_MONEY(2945000)}
                            </h3>
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
      )}
    </>
  )
}
