import Image from "next/image";
import Link from "next/link";
import {
  User,
  KeyRound,
  CreditCard,
  Trash2,
  LogOut,
  FileText,
  Heart,
  Award,
} from "lucide-react";
import avatar1 from "@/assets/images/avatar1.png";

export const SideBar = () => {
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
            <User className="h-5 w-5 text-[#1a3c61]" />
          </div>
          <ul className="space-y-4">
            <li>
              <Link
                href="#"
                className="block text-[#ff6b4a] border-b border-[#ff6b4a] pb-2"
              >
                Thông tin cá nhân
              </Link>
            </li>
            <li>
              <Link href="#" className="block text-gray-600 pb-2">
                <div className="flex items-center">
                  <KeyRound className="h-4 w-4 mr-2 hidden" />
                  <span>Đổi mật khẩu</span>
                </div>
              </Link>
            </li>
            <li>
              <Link href="#" className="block text-gray-600 pb-2">
                <div className="flex items-center">
                  <CreditCard className="h-4 w-4 mr-2 hidden" />
                  <span>Thông tin thanh toán</span>
                </div>
              </Link>
            </li>
            <li>
              <Link href="#" className="block text-gray-600 pb-2">
                <div className="flex items-center">
                  <Trash2 className="h-4 w-4 mr-2 hidden" />
                  <span>Xóa tài khoản</span>
                </div>
              </Link>
            </li>
            <li>
              <Link href="#" className="block text-gray-600 pb-2">
                <div className="flex items-center">
                  <LogOut className="h-4 w-4 mr-2 hidden" />
                  <span>Đăng xuất</span>
                </div>
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-[#1a3c61]">Đơn hàng</h3>
            <FileText className="h-5 w-5 text-[#1a3c61]" />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-[#1a3c61]">
              Yêu thích đã lưu
            </h3>
            <Heart className="h-5 w-5 text-[#1a3c61]" />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-[#1a3c61]">
              Đánh giá của bạn
            </h3>
            <Award className="h-5 w-5 text-[#1a3c61]" />
          </div>
        </div>
      </div>
    </div>
  );
};
