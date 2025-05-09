import { ITourSchedule } from "@/types/entities/TourSchedule";
import { PassengerDetails, TravelerType } from "./types";

/** 
 * #regin handle flat & merge passenger & type traveler
 */

export const generateTravelerDetail = (
    travelers?: TravelerType[],
    passengerDetails: PassengerDetails[] = []
) => {
    if (!Array.isArray(travelers)) return [];

    const result: (TravelerType & Partial<PassengerDetails>)[] = [];

    for (const traveler of travelers) {
        if (!traveler.count || traveler.count <= 0) {
            continue;
        }

        // Filter passengers that match the current traveler's id
        const matchingPassengers = passengerDetails.filter(
            (p) => p.travelerTypeId === traveler.id
        );

        // Generate entries for each traveler based on count
        for (let i = 0; i < traveler.count; i++) {
            // Only assign passenger data if a matching passenger exists for this index
            const passenger = i < matchingPassengers.length ? matchingPassengers[i] : undefined;

            result.push({
                ...traveler,
                passengerId: passenger?.passengerId,
                name: passenger?.name ?? traveler.name,
                gender: passenger?.gender,
                dob: passenger?.dob,
                isSuccessSubmit: passenger?.isSuccessSubmit,
                travelerTypeId: passenger?.travelerTypeId,
            });
        }
    }

    return result;
};
/***
 * # region handle payment & order
 */
type OrderLine = TravelerType & { price: number }

const _findOutPrice = (tourSchedule: ITourSchedule, type: TravelerType['type']) => {
    switch (type) {
        case 'adult':
            return tourSchedule.adultPrice
        case 'child':
            return tourSchedule.childPrice
        default:
            return tourSchedule.babyPrice
    }
}
export const getOrderLine = (tourSchedule: ITourSchedule, traveler: TravelerType): OrderLine => {
    const basePrice = _findOutPrice(tourSchedule, traveler.type)
    return {
        ...traveler,
        price: basePrice ?? 0
    }
}
export const calculateTotalPrice = (travelers: TravelerType[], tourSchedule: ITourSchedule) => {

    const order: OrderLine[] = []
    for (let i = 0; i < travelers.length; i++) {
        order.push(getOrderLine(tourSchedule, travelers[i]))
    } return order.map(orderLine => orderLine.price + 0).reduce((curr: number, total: number) => curr + total, 0)

}


//TODO: summary price
export const calculatePriceBreakdown = (
    travelers: TravelerType[],
    adultPrice: number,
    childPrice: number,
    infantPrice: number
) => {
    const breakdown = {
        adult: {
            count: travelers.find((t) => t.type === 'adult')?.count || 0,
            pricePerUnit: adultPrice,
            total: 0,
        },
        child: {
            count: travelers.find((t) => t.type === 'child')?.count || 0,
            pricePerUnit: childPrice,
            total: 0,
        },
        infant: {
            count: travelers.find((t) => t.type === 'infant')?.count || 0,
            pricePerUnit: infantPrice,
            total: 0,
        },
    };

    breakdown.adult.total = breakdown.adult.count * breakdown.adult.pricePerUnit;
    breakdown.child.total = breakdown.child.count * breakdown.child.pricePerUnit;
    breakdown.infant.total = breakdown.infant.count * breakdown.infant.pricePerUnit;

    return breakdown;
};

export const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN').format(price) + ' đ';
};


export const convertDataBookingBody = () => { 
    
}


/***
 * # region error message queue
 */

export class StackError<T> {
    private stackErr: T[] = []
    constructor(stack: T[]) {
        this.stackErr = stack
    }
    setStack(stack: T[]) {
        this.stackErr = stack
    }
    getStack() {
        return this.stackErr
    }
    getHead() {
        return this.stackErr[this.stackErr.length - 1]
    }
    addItem(item: T) {
        this.stackErr.push(item)
    }
    deleteItem() {
        this.stackErr.pop()
    }
    isEmpty() {
        return this.stackErr.length === 0
    }
}