import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IAppSliceType {
    isLoading: boolean
}

const initAppSlice: IAppSliceType = {
    isLoading: false
}

export const useAppSlice = createSlice({
    name: 'appSlice',
    initialState: initAppSlice,
    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
    },
});

export const {
    setLoading,
} = useAppSlice.actions;

export default useAppSlice.reducer;
