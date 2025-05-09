import { BookingContext } from '@/app/(dashboard)/tour-booking-form/context'
import React, { useContext } from 'react'

function TablePassengersBooking() {
  const { passengerDetails, travelers } = useContext(BookingContext)
  return (
    <div>
      <div className="mt-6">
        <h2 className="mb-62 text-xl font-bold text-gray-700">Danh sách hành khách</h2>
        {passengerDetails.length === 0 ? (
          <p className="text-gray-600">Chưa có thông tin hành khách.</p>
        ) : (
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-full rounded-lg bg-white shadow-md">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">STT</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Họ và tên</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Giới tính</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Loại hành khách</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Ngày sinh</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Trạng thái</th>
                </tr>
              </thead>
              <tbody>
                {passengerDetails.map((passenger, index) => (
                  <tr key={passenger.passengerId} className="border-b transition-colors hover:bg-gray-50">
                    <td className="px-4 py-2 text-gray-600">{index + 1}</td>
                    <td className="px-4 py-2 text-gray-800">{passenger.name}</td>
                    <td className="px-4 py-2 text-gray-600">{passenger.gender === 'male' ? 'Nam' : 'Nữ'}</td>
                    <td className="px-4 py-2 text-gray-600">{travelers[passenger.travelerTypeId].name}</td>
                    <td className="px-4 py-2 text-gray-600">{`${passenger.dob.day}/${passenger.dob.month}/${passenger.dob.year}`}</td>
                    <td className="px-4 py-2">
                      <span
                        className={`inline-block rounded-full px-3 py-1 text-sm font-medium ${
                          !passenger.isSuccessSubmit ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
                        }`}
                      >
                        {!passenger.isSuccessSubmit ? 'Thành công' : 'Chưa phát hành vé'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}

export default TablePassengersBooking
