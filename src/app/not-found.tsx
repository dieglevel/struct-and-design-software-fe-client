import { Link } from "lucide-react";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <img
        src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
        alt="Not Found"
        className="w-64 md:w-80"
      />
      <h1 className="mt-6 text-3xl font-bold text-gray-800 md:text-4xl">Oops! Không tìm thấy tour này.</h1>
      <p className="mt-2 text-center text-gray-500">Có thể tour này đã bị xóa hoặc không tồn tại.</p>
      <a
        href="/tour"
        className="mt-6 rounded-lg bg-blue-600 px-6 py-3 text-lg font-semibold text-white shadow-md transition duration-300 hover:bg-blue-700"
      >
        Quay lại danh sách tour
      </a>
    </div>
  )
}
