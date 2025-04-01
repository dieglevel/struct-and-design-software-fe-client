export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <img
                src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
                alt="Not Found"
                className="w-64 md:w-80"
            />
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-6">
                Oops! Không tìm thấy tour này.
            </h1>
            <p className="text-gray-500 mt-2 text-center">
                Có thể tour này đã bị xóa hoặc không tồn tại.
            </p>
            <a
                href="/tour"
                className="mt-6 px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
            >
                Quay lại danh sách tour
            </a>
        </div>
    );
}
