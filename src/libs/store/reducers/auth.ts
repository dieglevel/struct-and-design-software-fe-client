import api from "@/libs/axios/axios.config";
import { ILogin } from "@/interfaces";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_LOGIN, API_LOGOUT } from "@/constants";

export const login = createAsyncThunk(API_LOGIN, async (login: ILogin) => {
    const response = await api.post(process.env.NEXT_PUBLIC_API_URL + API_LOGIN, login);
    return response.data;
});

export const logout = createAsyncThunk(API_LOGOUT, async () => {
    const response = await api.post(process.env.NEXT_PUBLIC_API_URL + API_LOGOUT);
    return response.data;
});

const authSlice = createSlice({
    name: "login",
    initialState: { user: {}, loading: false, error: "" },
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Add the login action
            .addCase(login.pending, (state) => {
                state.loading = true;
                state.error = "";
            })
            .addCase(login.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
            })
            .addCase(login.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "";
            })
            // Add the logout action
            .addCase(logout.pending, (state) => {
                state.loading = true;
                state.error = "";
            })
            .addCase(logout.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
            })
            .addCase(logout.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "";
            });
    },
});
const authReducer = authSlice.reducer;
export default authReducer;
