import { IUser } from "@/types/entities/User";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IUserSliceType {
    me: IUser
}
const initUserSlice: IUserSliceType = {
    me: {
        email: '',
        phone: '',
        username: '',
        fullName: '',
        avatarUrl: '',
        birthday: 0,
        gender: undefined,
        role: undefined,
        userId: '',
    },
}

export const useUserSlice = createSlice({
    name: 'userSlice',
    initialState: initUserSlice,
    reducers: {
        setMe: (state, action: PayloadAction<IUser>) => {
            console.log("💲💲💲 ~ action:", action)
            state.me = action.payload;
        },
    },
});

export const {
    setMe,
} = useUserSlice.actions;

export default useUserSlice.reducer;