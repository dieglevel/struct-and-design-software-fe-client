import { FavoriteIcon, TopRightIcon, UnFavoriteIcon } from "@/assets/svgs";
import { ClockCircleOutlined } from "@ant-design/icons";
import { Divider } from "@heroui/divider";
import { Image } from "@heroui/image";
import { Rating } from "@mui/material";
import { ReactNode} from "react";
export const SummerTourContainerComponent = () => {
     const data_summer = [
          {
               url: "https://r2.nucuoimekong.com/wp-content/uploads/moc-chau-son-la-1-1280x720.jpg",
               title: "Tour Phú Quốc 3 ngày 2 đêm ",
               time: "3 ngày 2 đêm",
               price: "2.000.000",
               rating: 5,
               isFavorite: true,
               discount: 20,
          },
          {
               url: "https://vcdn1-dulich.vnecdn.net/2022/03/31/thac-Ban-Gioc-Cao-Bang-8614-1648729935.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=14zFbBkd6hgbDfwOrjQPyQ ",
               title: "Tour Phú Quốc 3 ngày 2 đêm ",
               time: "3 ngày 2 đêm",
               price: "2.000.000",
               rating: 3,
               isFavorite: false,
               discount: 50,
          },
          {
               url: "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2023/3/9/1155741/Du-Lich-Vinh-Ha-Long-01.jpg ",
               title: "Tour Phú Quốc 3 ngày 2 đêm ",
               time: "3 ngày 2 đêm",
               price: "2.000.000",
               rating: 2,
               isFavorite: true,
               discount: 10,
          },
          {
               url: "https://sodulich.ninhbinh.gov.vn/uploads/images/trang_an1.jpg",
               title: "Tour Phú Quốc 3 ngày 2 đêm ",
               time: "3 ngày 2 đêm",
               price: "2.000.000",
               rating: 4,
               isFavorite: false,
               discount: 25,
          },
     ];

     return (
          <div>
               <h1 className="text-colorbrand-midnightBlue-900 text-xl md:text-2xl font-bold uppercase my-6 md:my-16 ">
                    tour du lịch hè giá tốt
                    <div className="w-20 border-2 border-gray"></div>
               </h1>
               <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4 place-items-center ">
                    {data_summer.map((item, index): ReactNode => {
                         return (
                              <div key={index} className="bg-white rounded-lg shadow-lg relative">
                                   <div className="rounded-t-lg">
                                        <div className=" px-4 absolute translate-y-3 top-0 left-0 right-0 z-10 flex justify-between">
                                             <div className="bg-white rounded-lg p-2">
                                                  <h3 className="font-bold font-serif">{`-${item.discount}%`}</h3>
                                             </div>
                                             {item.isFavorite ? (
                                                  <FavoriteIcon className="w-6 md:w-8" />
                                             ) : (
                                                  <UnFavoriteIcon className="w-6 md:w-8" />
                                             )}
                                        </div>
                                        <Image
                                             alt="Hình ảnh địa  điểm"
                                             src={item.url}
                                             className="relativeBox h-32 md:h-56  object-cover z-0"
                                             key={index}
                                             radius="none"
                                        ></Image>
                                   </div>
                                   <div className="flex flex-col justify-between mx-1 my-4">
                                        <h3 className="text-colorbrand-midnightBlue-900 text-sm md:text-xl">
                                             {item.title}
                                        </h3>
                                        <div className="flex flex-col lg:flex-row  justify-between ">
                                             <h3 className="text-gray-500 text-sm md:text-lg">
                                                  <ClockCircleOutlined /> {item.time}
                                             </h3>
                                             <Rating
                                                  name="text-feedback"
                                                  value={item.rating}
                                                  readOnly
                                                  precision={0.5}
                                             />
                                        </div>
                                        <Divider className="my-5" />
                                        <div className="flex flex-col md:flex-row justify-between">
                                             <h3 className="text-colorbrand-midnightBlue-900 text-lg font-bold">
                                                  {item.price} <span className="relative bottom-3 text-base">đ</span>
                                             </h3>
                                             <a className="text-colorbrand-burntSienna-500 md:text-sm lg:text-base">
                                                  Xem chi tiết <TopRightIcon className="inline " />
                                             </a>
                                        </div>
                                   </div>
                              </div>
                         );
                    })}
               </div>
          </div>
     );
};
