import { IUser } from "./User";

export type IReviewResponseType = Pick<IUser, 'username' | 'userId'> & {
    tourScheduleId: string,
    reviewDate: string,
    content: string
    isActive: boolean,
    rating: number,
    videUrl: string[],
    imageUrl: string[]
}



