import { IUser } from "./User"

type IAuth = {
    username: string,
    password: string,
    token: string,
    authenticated: boolean
}

export type LoginResponseType = IAuth & {
    token: string,
    authenticated: boolean,
    user: IUser
}


export type LogoutRequestType = Pick<IAuth, 'token'>

export type LoginRequestType = Pick<IAuth, 'username' | 'password'>