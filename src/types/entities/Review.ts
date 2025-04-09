import { IUser } from "./User";

export type IReview = Pick<IUser, 'username' | 'userId'> & {
    tourScheduleId: string,
    reviewDate: string,
    content: string
    isActive: boolean,
    rating: number,
    videUrl: string[],
    imageUrl: string[]
}

export type ReviewResponseType = {
    data: IReview[]
}




