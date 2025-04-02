export default function Loading() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
            {/* Loading Animation */}
            <div className="w-20 h-20 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>

            {/* Loading Text */}
            <p className="mt-4 text-lg font-semibold text-gray-600">Đang tải thông tin tour...</p>
        </div>
    );
}
