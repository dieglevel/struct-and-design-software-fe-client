import { FavoriteIcon, TopRightIcon, UnFavoriteIcon } from '@/assets/svgs'
import { ClockCircleOutlined } from '@ant-design/icons'
import { Divider } from '@heroui/divider'
import { Image } from '@heroui/image'
import { Rating } from '@mui/material'
import { ReactNode } from 'react'
export const SuggestionTourContainerComponent = () => {
  const data_summer = [
    {
      url: 'https://r2.nucuoimekong.com/wp-content/uploads/moc-chau-son-la-1-1280x720.jpg',
      title: 'Tour Phú Quốc 3 ngày 2 đêm ',
      time: '3 ngày 2 đêm',
      price: '2.000.000',
      rating: 5,
      isFavorite: true,
      discount: 20,
    },
    {
      url: 'https://vcdn1-dulich.vnecdn.net/2022/03/31/thac-Ban-Gioc-Cao-Bang-8614-1648729935.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=14zFbBkd6hgbDfwOrjQPyQ ',
      title: 'Tour Phú Quốc 3 ngày 2 đêm ',
      time: '3 ngày 2 đêm',
      price: '2.000.000',
      rating: 3,
      isFavorite: false,
      discount: 50,
    },
    {
      url: 'https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2023/3/9/1155741/Du-Lich-Vinh-Ha-Long-01.jpg ',
      title: 'Tour Phú Quốc 3 ngày 2 đêm ',
      time: '3 ngày 2 đêm',
      price: '2.000.000',
      rating: 2,
      isFavorite: true,
      discount: 10,
    },
    {
      url: 'https://sodulich.ninhbinh.gov.vn/uploads/images/trang_an1.jpg',
      title: 'Tour Phú Quốc 3 ngày 2 đêm ',
      time: '3 ngày 2 đêm',
      price: '2.000.000',
      rating: 4,
      isFavorite: false,
      discount: 25,
    },
  ]

  return (
    <div>
      <h1 className="my-6 text-xl font-bold uppercase text-colorbrand-midnightBlue-900 md:my-16 md:text-2xl">
        v-travel sốt dẻo<div className="border-gray w-20 border-2"></div>
      </h1>
      <div className="grid grid-cols-2 place-items-center gap-4 md:grid-cols-3 lg:grid-cols-4">
        {data_summer.map((item, index): ReactNode => {
          return (
            <div key={index} className="rounded-lg bg-white shadow-lg">
              <div className="relative rounded-t-lg">
                <div className="absolute left-0 right-0 top-0 z-[11] flex translate-y-3 justify-between px-4">
                  <div className="rounded-lg bg-white p-2">
                    <h3 className="font-serif font-bold">{`-${item.discount}%`}</h3>
                  </div>
                  {item.isFavorite ? (
                    <FavoriteIcon className="w-6 md:w-8" />
                  ) : (
                    <UnFavoriteIcon className="w-6 md:w-8" />
                  )}
                </div>
              </div>
              <div className="h-32 w-full overflow-hidden rounded-t-lg md:h-48 lg:h-60">
                <Image
                  alt="Hình ảnh địa điểm"
                  src={item.url}
                  className="min-h-32 min-w-60 object-cover"
                  key={index}
                  radius="none"
                />
              </div>
              <div className="mx-8 my-4 flex flex-col justify-between">
                <h3 className="text-sm text-colorbrand-midnightBlue-900 md:text-xl">{item.title}</h3>
                <div className="flex flex-col justify-between lg:flex-row">
                  <h3 className="text-sm text-gray-500 md:text-lg">
                    <ClockCircleOutlined /> {item.time}
                  </h3>
                  <Rating name="text-feedback" value={item.rating} readOnly precision={0.5} />
                </div>
                <Divider className="my-5" />
                <div className="flex flex-col justify-between md:flex-row">
                  <h3 className="text-lg font-bold text-colorbrand-midnightBlue-900">
                    {item.price} <span className="relative bottom-3 text-base underline">đ</span>
                  </h3>
                  <a className="text-colorbrand-burntSienna-500 md:text-sm lg:text-base">
                    Xem chi tiết <TopRightIcon className="inline" />
                  </a>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
