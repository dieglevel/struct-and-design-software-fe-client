import React from 'react'

interface Review {
  user: string
  date: string
  rating: number
  comment: string
}

const CustomerReviews: React.FC = () => {
  const criteria = [
    { label: 'Tốc độ', value: 90 },
    { label: 'Vị trí', value: 90 },
    { label: 'Giá cả', value: 90 },
    { label: 'Phục vụ', value: 90 },
    { label: 'Tiện nghi', value: 90 },
  ]

  const reviews: Review[] = [
    {
      user: 'Phùng Anh Minh',
      date: '10/11/2022',
      rating: 5,
      comment:
        'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
    },
    {
      user: 'Phùng Anh Minh',
      date: '10/11/2022',
      rating: 5,
      comment:
        'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
    },
    {
      user: 'Phùng Anh Minh',
      date: '10/11/2022',
      rating: 5,
      comment:
        'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
    },
  ]

  return (
    <div className="mx-auto max-w-max bg-white px-10 py-6 ">
      {/* Header */}
      <h2 className="mb-4 text-xl font-semibold text-blue-900">Đánh giá của khách hàng</h2>

      {/* Rating and Criteria Section */}
      <div className="mb-6 flex flex-col items-center rounded-lg bg-gray-100 p-4 md:flex-row">
        {/* Rating */}
        <div className="mb-4 flex flex-col items-center md:mb-0 md:mr-8">
          <span className="text-4xl font-bold text-blue-900">4.9</span>
          <div className="flex items-center">
            <span className="text-2xl text-yellow-400">★</span>
            <span className="ml-2 text-gray-600">Tuyệt vời</span>
          </div>
          <span className="text-gray-500">Kém</span>
        </div>

        {/* Criteria Progress Bars */}
        <div className="grid flex-1 grid-cols-2 gap-4">
          {criteria.map((criterion, index) => (
            <div key={index} className="flex items-center">
              <span className="w-24 text-gray-700">{criterion.label}</span>
              <div className="h-2 flex-1 overflow-hidden rounded-full bg-gray-300">
                <div className="h-full bg-gray-500" style={{ width: `${criterion.value}%` }}></div>
              </div>
              <span className="ml-2 text-gray-600">{criterion.value}%</span>
            </div>
          ))}
        </div>
      </div>

      {/* Reviews List */}
      <div className="space-y-6">
        {reviews.map((review, index) => (
          <div key={index} className="border-b pb-4">
            <p className="mb-2 text-gray-600">{review.comment}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="mr-2 h-8 w-8 rounded-full bg-gray-300"></div>
                <div>
                  <span className="font-semibold text-gray-800">{review.user}</span>
                  <div className="flex">
                    {[...Array(review.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400">
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <span className="text-gray-500">{review.date}</span>
            </div>
            <button className="mt-2 flex items-center text-gray-600 hover:text-blue-600">
              <span className="mr-1">👍</span> Đánh giá này có hữu ích với bạn không?
            </button>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="mt-6 text-center">
        <button className="rounded-lg border border-orange-500 px-6 py-2 text-orange-500 transition hover:bg-orange-500 hover:text-white">
          Xem tất cả →
        </button>
      </div>
    </div>
  )
}

export default CustomerReviews
