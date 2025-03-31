import { Image } from "@heroui/image";
import { ReactNode } from "react";
export const DiscoverContainerComponent = () => {
    const data = [
        {
            url: "https://r2.nucuoimekong.com/wp-content/uploads/moc-chau-son-la-1-1280x720.jpg",
            title: "Mộc Châu",
            quantity: 10,
        },
        {
            url: "https://vcdn1-dulich.vnecdn.net/2022/03/31/thac-Ban-Gioc-Cao-Bang-8614-1648729935.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=14zFbBkd6hgbDfwOrjQPyQ ",
            title: "Cao Bằng",
            quantity: 10,
        },
        {
            url: "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2023/3/9/1155741/Du-Lich-Vinh-Ha-Long-01.jpg ",
            title: "Hạ Long",
            quantity: 10,
        },
        {
            url: "https://sodulich.ninhbinh.gov.vn/uploads/images/trang_an1.jpg",
            title: "Ninh Bình",
            quantity: 10,
        },
    ];
    return (
        <div>
            <h1 className="text-colorbrand-midnightBlue-900 text-xl md:text-2xl font-bold uppercase my-6 md:my-16 ">
                khám phá điểm đến gần đây
                <div className="w-20 border-2 border-gray"></div>
            </h1>
            <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4 place-items-center">
                {data.map((item, index): ReactNode => {
                    return (
                        <div key={index}>
                            
                            <Image
                                alt="Hình ảnh địa  điểm"
                                src={item.url}
                                className=" h-96 w-72  object-cover z-0"
                                key={index}
                            ></Image>
                            <div className="flex justify-between -translate-y-11  z-10 items-center px-4">
                                <h3 className="text-gray-50 text-xs md:text-lg font-bold uppercase my-2">
                                    {item.title}
                                </h3>
                                <p className="text-yellow-500 text-xs lg:text-s  uppercase my-2">
                                    {item.quantity} tours
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
