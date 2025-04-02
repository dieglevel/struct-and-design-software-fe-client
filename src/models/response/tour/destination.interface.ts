export interface IDestinationEntity {
    destinationId: string;
    name: string;
    description: string;
    image: string;
    address: string;
    city: string;
    district: string;
    country: string;
    cityId: string | null;
    districtId: string | null;
}