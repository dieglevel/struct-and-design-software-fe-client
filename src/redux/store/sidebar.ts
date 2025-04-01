import api from "@/libs/axios/axios.config";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk("tourMinMax", async () => {
    const response = await api.get(`${process.env.NEXT_BOOKING_SERVICE}`); // Thay URL API thật
    return response.data;
});

const productSlice = createSlice({
    name: "products",
    initialState: {
        items: [],
        status: "idle", // idle | loading | succeeded | failed
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.items = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = "failed";
            });
    },
});

export default productSlice.reducer;
