import { DeepPartial } from "react-hook-form";
import { GENDER, USER_ROLE } from "../enum/User.enum";

type IUserType = {
    email: string;
    phone: string;
    username: string;
    fullName: string;
    avatarUrl: string;
    birthday: number;
    gender: GENDER;
    role: USER_ROLE;
    userId: string;
}

export type IUser = DeepPartial<IUserType>