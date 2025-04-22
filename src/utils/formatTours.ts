/**
 * Formats tour data for display in Vietnamese
 */
export function formatToursInVietnamese(tours: any[]) {
  if (!tours || tours.length === 0) {
    return 'Không tìm thấy tour nào phù hợp với yêu cầu của bạn.'
  }

  // Format price with thousand separators
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN').format(price) + ' VNĐ'
  }

  // Format each tour
  return tours.map((tour) => {
    return {
      ...tour,
      formattedText: `
## ${tour.name}

${tour.description || 'Không có mô tả'}

**Giá:** ${formatPrice(tour.price)}
${tour.duration ? `**Thời gian:** ${tour.duration}` : ''}
${tour.tour_id ? `**Chi tiết tour:** [Xem chi tiết](/tour/${tour.tour_id})` : ''}
      `.trim(),
    }
  })
}
