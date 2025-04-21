import React from 'react'

function TourLoading() {
  return (
    <div>
      <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 px-4">
        <div className="h-20 w-20 animate-spin rounded-full border-4 border-gray-300 border-t-blue-500"></div>
        <p className="mt-4 text-lg font-semibold text-gray-600">Đang tải thông tin tour...</p>
      </div>
    </div>
  )
}

export default TourLoading
