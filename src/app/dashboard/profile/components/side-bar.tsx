import Image from "next/image";
import Link from "next/link";
import avatar1 from "@/assets/images/avatar1.png";
import { EvaluateIcon, FavoriteIcon, OrderIcon, UserIcon } from "@/assets/svgs";
import { useState } from "react";

const menuItems = [
  "Thông tin cá nhân",
  "Đổi mật khẩu",
  "Thông tin thanh toán",
  "Xóa tài khoản",
  "Đăng xuất",
];

export const SideBar = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="container w-full max-w-xs bg-white p-4">
      <div className="flex flex-col items-center mb-6">
        <div className="relative w-24 h-24 mb-3">
          <Image
            src={avatar1}
            alt="Profile picture"
            width={96}
            height={96}
            className="rounded-full object-cover"
          />
        </div>
        <h2 className="text-xl font-bold text-[#1a3c61]">Phung Anh Minh</h2>
        <p className="text-gray-500 text-sm">dieglevel@gmail.com</p>
      </div>

      <div className="space-y-6">
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-[#1a3c61]">Tài khoản</h3>
            <UserIcon className="h-5 w-5 text-[#1a3c61]" />
          </div>
          <ul className="space-y-4 ml-8">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  href="#"
                  className={`pb-2 ${
                    activeIndex === index
                      ? "text-[#ff6b4a] border-b border-[#ff6b4a]"
                      : "text-gray-600"
                  }`}
                  onClick={() => setActiveIndex(index)}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <Link href="#" className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-[#1a3c61]">Đơn hàng</h3>
            <OrderIcon className="h-5 w-5 text-[#1a3c61]" />
          </Link>
        </div>

        <div>
          <Link href="#" className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-[#1a3c61]">
              Yêu thích đã lưu
            </h3>
            <FavoriteIcon className="h-5 w-5 text-[#1a3c61]" />
          </Link>
        </div>

        <div>
          <Link href="#" className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-[#1a3c61]">
              Đánh giá của bạn
            </h3>
            <EvaluateIcon className="h-5 w-5 text-[#1a3c61]" />
          </Link>
        </div>
      </div>
    </div>
  );
};
