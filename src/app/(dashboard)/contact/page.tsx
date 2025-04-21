'use client'

import React, { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    subject: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Add your form submission logic here (e.g., API call)
  }

  return (
    <div className="min-h-screen px-4 py-12 sm:px-6 lg:px-8">
      {/* Contact Form Section */}
      <section className="mx-auto mb-12 max-w-4xl">
        <h2 className="mb-8 text-center text-3xl font-bold text-[#003580]">LIÊN HỆ VỚI CHÚNG TÔI</h2>
        <div className="rounded-lg p-6 shadow-md">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Left Column */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Họ và tên</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Phùng Anh Minh"
                  className="mt-1 block w-full rounded-md border-1 border-gray-300 p-2 shadow-sm focus:border-[#003580] focus:ring-[#003580] sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Điện thoại</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="0388 245 392"
                  className="mt-1 block w-full rounded-md border-1 border-gray-300 p-2 shadow-sm focus:border-[#003580] focus:ring-[#003580] sm:text-sm"
                />
              </div>
            </div>
            {/* Right Column */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Địa chỉ email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Dieglevel@gmail.com"
                  className="mt-1 block w-full rounded-md border-1 border-gray-300 p-2 shadow-sm focus:border-[#003580] focus:ring-[#003580] sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Địa chỉ</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="14 Hoàng Cầu, Đống Đa, Hà Nội"
                  className="mt-1 block w-full rounded-md border-1 border-gray-300 p-2 shadow-sm focus:border-[#003580] focus:ring-[#003580] sm:text-sm"
                />
              </div>
            </div>
          </div>
          {/* Message Field */}
          <div className="mt-6">
            <label className="block w-full flex-1 text-sm font-medium text-gray-700">Tiêu đề</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Nhập tiêu đề"
              className="mt-1 block w-full rounded-md border-1 border-gray-300 p-2 shadow-sm focus:border-[#003580] focus:ring-[#003580] sm:text-sm"
            />
          </div>
          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700">Nội dung</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Nội dung cần gửi..."
              rows={4}
              className="mt-1 block w-full rounded-md border-1 border-gray-300 p-2 shadow-sm focus:border-[#003580] focus:ring-[#003580] sm:text-sm"
            />
          </div>
          {/* Submit Button */}
          <div className="mt-6 text-center">
            <button
              onClick={handleSubmit}
              className="w-48 rounded-md bg-[#F27052] px-6 py-2 font-bold text-white transition-colors hover:bg-[#e65b3e]"
            >
              Gửi di
            </button>
          </div>
        </div>
      </section>

      {/* Detailed Information Section */}
      <section className="mx-auto max-w-4xl">
        <h2 className="mb-8 text-center text-3xl font-bold text-[#003580]">THÔNG TIN CHI TIẾT</h2>
        <div className="flex flex-col gap-6 md:flex-row">
          {/* Map Placeholder */}
          <div className="flex h-64 items-center justify-center rounded-lg bg-gray-200 md:w-2/3">
            <div class="relative">
              <div class="relative h-0 overflow-hidden pb-[75%]">
                <iframe
                  class="absolute left-0 top-0 h-full w-full border-0"
                  loading="lazy"
                  allowfullscreen
                  src="https://maps.google.com/maps?q=Nguyen+Van+Bao%2C+Go+Vap&output=embed"
                ></iframe>
              </div>
              <a
                href="http://aiyoutubetitlegenerator.com/"
                rel="noopener"
                target="_blank"
                class="absolute m-[-1px] h-px w-px overflow-hidden whitespace-nowrap border-0 p-0"
              >
                aiyoutubetitlegenerator.com
              </a>
            </div>
          </div>
          {/* Contact Details */}
          <div className="space-y-4 md:w-1/3">
            <div className="rounded-lg bg-white p-4 shadow-md">
              <div className="flex items-start space-x-3">
                <span className="mt-1 text-[#003580]">📍</span>
                <div>
                  <h3 className="text-sm font-bold text-[#003580]">Phương đăng ký du lịch Hà Nội:</h3>
                  <p className="text-sm text-gray-700">18 Hoàng Cầu, Đống Đa, Hà Nội</p>
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-white p-4 shadow-md">
              <div className="flex items-start space-x-3">
                <span className="mt-1 text-[#003580]">📞</span>
                <div>
                  <h3 className="text-sm font-bold text-[#003580]">Hotline:</h3>
                  <p className="text-sm text-gray-700">1800 10 21 11 – 84-28 39 487 038</p>
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-white p-4 shadow-md">
              <div className="flex items-start space-x-3">
                <span className="mt-1 text-[#003580]">✉️</span>
                <div>
                  <h3 className="text-sm font-bold text-[#003580]">Email:</h3>
                  <p className="text-sm text-gray-700">information@vtravel.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
