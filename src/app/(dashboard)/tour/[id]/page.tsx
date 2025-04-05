'use client'
import tourDetailBanner from '@/assets/images/tour_detail_header.png'
import api from '@/libs/axios/axios.config'
import { TourResponseDTO } from '@/models/response/dashboard'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { StarSvgIcon } from '@/assets/svgs'
import { ArrowLeftOutlined } from '@ant-design/icons'
import Link from 'next/link'
import { Divider } from '@heroui/divider'
import { DividerVerticalIcon } from '@radix-ui/react-icons'
export default function TourDetailPage() {
  const { id } = useParams()
  const [detail, setDetail] = useState<TourResponseDTO>({})
  const fetchTourDetail = async () => {
    try {
      const response = await api(`${process.env.NEXT_PUBLIC_BOOKING_SERVICE}/tours/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      setDetail(response.data.data)
    } catch (error) {
      console.error('Lỗi khi gọi API:', error)
    }
  }

  useEffect(() => {
    fetchTourDetail()
  }, [id])
  return (
    <div className="m-auto">
      <div className="relative h-52 w-full">
        <Image src={tourDetailBanner} alt="Tour Banner" className="h-full w-full object-cover" />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black text-center opacity-50">
          <h1 className="text-3xl font-bold text-white">Tour detail</h1>
          <p className="mt-2 line-clamp-1 w-1/2 text-sm text-white opacity-100 md:text-lg">
            <a href="/tour">Tour </a> &gt; {detail.name}
          </p>
        </div>
      </div>
      {/* body */}
      <div className="m-auto my-8 flex w-10/12 flex-col gap-5">
        {/* base info */}
        <div className="">
          <div>
            <h3 className="text-2xl font-bold capitalize text-colorbrand-midnightBlue-950">
              tour phú quốc 2 ngày 1 đêm{' '}
            </h3>
          </div>
          <h3 className="text-2xl text-gray-500">HCM - Grand World - Câu Cá - Lặn Ngắm San Hô</h3>
          <div className="mt-2 flex gap-40">
            <h3 className="text-lg text-gray-500">Kiên Giang</h3>
            <div className="flex items-center justify-center gap-2">
              <StarSvgIcon width={22} />
              <h3>4.5</h3>
              <a href="#" className="justify-center text-base text-colorbrand-burntSienna-500">
                (12 đánh giá)
              </a>
            </div>
          </div>
        </div>
        {/* layout */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-5">
          {/* info */}
          <div className="col-span-3 bg-white lg:col-span-4">
            <h1 className="text-center text-2xl">Lịch khởi hành</h1>
            {/* body */}
            <div className="flex">
              {/* col1 */}
              <div>
                <h3>Chọn tháng</h3>
              </div>
              {/* col 2*/}
              <div className="mx-2 flex w-full flex-col items-center border-1 px-3">
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
                    <div className="flex-1">
                      <div className="flex items-start">
                        <div className="w-full">
                          <h3 className="text-lg font-bold">Giá người lớn</h3>
                          <p className="text-gray-500">(Từ 12 tuổi trở lên )</p>
                        </div>
                        <h3 className="w-fit text-xl font-bold text-orange-500">24.999.999đ</h3>
                      </div>
                      <Divider className="my-2 lg:hidden" />
                      <div className="flex items-start">
                        <div className="w-full">
                          <h3 className="text-lg font-bold">Giá người lớn</h3>
                          <p className="text-gray-500">(Từ 12 tuổi trở lên )</p>
                        </div>
                        <h3 className="w-fit text-xl font-bold text-orange-500">24.999.999đ</h3>
                      </div>
                      <Divider className="my-2 lg:hidden" />
                    </div>
                    <div className="hidden max-h-24 min-h-20 w-[1px] border-1 border-gray-300 lg:block"></div>
                    <div className="flex-1">
                      <div className="flex items-start">
                        <div className="w-full">
                          <h3 className="text-lg font-bold">Giá người lớn</h3>
                          <p className="text-gray-500">(Từ 12 tuổi trở lên )</p>
                        </div>
                        <h3 className="w-fit text-xl font-bold text-orange-500">24.999.999đ</h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="my-2 rounded-md border-1 bg-yellow-100 px-2 py-2 text-colorbrand-burntSienna-500">
                  Chỉ nhận khách quốc tịch nước ngoài hoặc khách đã có visa Hàn Quốc còn hiệu lực. Tour bao gồm visa
                  đoàn nhập cảnh (không phải visa cá nhân). Tham quan đầy đủ theo chương trình, không tách đoàn. Chưa
                  bao gồm tiền tip hướng dẫn viên và tài xế: 153.000 VND/ngày/khách (tương đương 6 USD/ngày/khách).
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
                <h3 className="font-bold text-colorbrand-burntSienna-500">Mã tour: </h3>
                <h3 className="font-bold text-colorbrand-midnightBlue-900">1231312312321</h3>
              </div>
              <div className="flex gap-2">
                <h3 className="font-bold text-colorbrand-burntSienna-500">Khởi hành: </h3>
                <h3 className="font-bold text-colorbrand-midnightBlue-900">1231312312321</h3>
              </div>
              <div className="flex gap-2">
                <h3 className="font-bold text-colorbrand-burntSienna-500">Ngày khỏi hành: </h3>
                <h3 className="font-bold text-colorbrand-midnightBlue-900">123131231</h3>
              </div>
              <div className="flex gap-2">
                <h3 className="font-bold text-colorbrand-burntSienna-500">Thời gian: </h3>
                <h3 className="font-bold text-colorbrand-midnightBlue-900">1231312312321</h3>
              </div>
              <div className="flex gap-2">
                <h3 className="font-bold text-colorbrand-burntSienna-500">Số chỗ ngồi: </h3>
                <h3 className="font-bold text-colorbrand-midnightBlue-900">1231312312321</h3>
              </div>
            </div>
          </div>
          {/* schedule */}
          <div className="col-span-3 bg-white">
            <h1>Lịch</h1>
          </div>
          {/* suggestion */}
          <div>
            <h1>Gợi ý</h1>
          </div>
        </div>
      </div>
    </div>
  )
}
