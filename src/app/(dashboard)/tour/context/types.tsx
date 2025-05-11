import * as yup from 'yup'

export const criteria = [
  { label: 'Tốc độ', value: 90 },
  { label: 'Vị trí', value: 90 },
  { label: 'Giá cả', value: 90 },
  { label: 'Phục vụ', value: 90 },
  { label: 'Tiện nghi', value: 90 },
]


export const schema = yup.object().shape({
  content: yup.string().required('Vui lòng nhập nội dung đánh giá'),
  rating: yup.number().required('Vui lòng chọn số sao').min(0.5, 'Tối thiểu là 0.5 sao').max(5, 'Tối đa là 5 sao'),
  files: yup.mixed()
})
  

export type FormValues = {
  content: string
  rating: number
  files?: FileList
}
