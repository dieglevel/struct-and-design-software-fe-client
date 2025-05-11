
export type IReview = {
    user: string
    date: string
    rating: number
    comment: string
    files?: { file_url: string; file_order: number }[]
}

export type ReviewResponseType = {
    data: IReview[]
}




