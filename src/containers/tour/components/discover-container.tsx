'use client'
import { Image } from '@heroui/image'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'
export const DiscoverContainerComponent = () => {
  const data = [
    {
      url: 'https://r2.nucuoimekong.com/wp-content/uploads/moc-chau-son-la-1-1280x720.jpg',
      title: 'Mộc Châu',
      quantity: 10,
    },
    {
      url: 'https://vcdn1-dulich.vnecdn.net/2022/03/31/thac-Ban-Gioc-Cao-Bang-8614-1648729935.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=14zFbBkd6hgbDfwOrjQPyQ ',
      title: 'Cao Bằng',
      quantity: 10,
    },
    {
      url: 'https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2023/3/9/1155741/Du-Lich-Vinh-Ha-Long-01.jpg ',
      title: 'Hạ Long',
      quantity: 10,
    },
    {
      url: 'https://sodulich.ninhbinh.gov.vn/uploads/images/trang_an1.jpg',
      title: 'Ninh Bình',
      quantity: 10,
    },
  ]

  return (
    <div>
      <h1 className="my-6 text-xl font-bold uppercase text-colorbrand-midnightBlue-900 md:my-16 md:text-2xl">
        khám phá điểm đến gần đây
        <div className="border-gray w-20 border-2"></div>
      </h1>
      <div className="grid grid-cols-2 place-items-center gap-4 md:grid-cols-3 lg:grid-cols-4">
        {data.map((item, index): ReactNode => {
          return (
            <div key={index}>
              <Image alt="Hình ảnh địa  điểm" src={item.url} className="z-0 h-96 w-72 object-cover" key={index}></Image>
              <div className="z-10 flex -translate-y-11 items-center justify-between px-4">
                <h3 className="my-2 text-xs font-bold uppercase text-gray-50 md:text-lg">{item.title}</h3>
                <p className="lg:text-s my-2 text-xs uppercase text-yellow-500">{item.quantity} tours</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
