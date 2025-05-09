import * as Yup from 'yup';
import { TravelerType } from '@/app/(dashboard)/tour-booking-form/context/types';

const currentDate = new Date('2025-05-08');
const currentYear = currentDate.getFullYear();

export const travelerValidationSchema = (traveler: TravelerType) => Yup.object().shape({
    name: Yup.string()
        .required('Họ tên là bắt buộc')
        .min(2, 'Họ tên phải có ít nhất 2 ký tự'),
    gender: Yup.string()
        .required('Giới tính là bắt buộc'),
    dob: Yup.object().shape({
        day: Yup.string()
            .required('Ngày sinh là bắt buộc')
            .matches(/^(?:[1-9]|[12][0-9]|3[01])$/, 'Ngày không hợp lệ'),
        month: Yup.string()
            .required('Tháng sinh là bắt buộc')
            .matches(/^(?:[1-9]|1[0-2])$/, 'Tháng không hợp lệ'),
        year: Yup.string()
            .required('Năm sinh là bắt buộc')
    }).test('valid-date-and-age', 'Ngày sinh không phù hợp với độ tuổi', function (value) {
        const { day, month, year } = value;
        if (!day || !month || !year) return false;

        const birthDate = new Date(`${year}-${month}-${day}`);
        if (!(birthDate instanceof Date) || isNaN(birthDate.getTime())) return false;

        const age = currentYear - parseInt(year);
        const monthDiff = currentDate.getMonth() - (parseInt(month) - 1);
        const dayDiff = currentDate.getDate() - parseInt(day);

        let calculatedAge = age;
        if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
            calculatedAge--;
        }
        return calculatedAge >= traveler.ageMin && calculatedAge <= traveler.ageMax;
    }),
});