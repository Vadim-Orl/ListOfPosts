import { createSlice } from "@reduxjs/toolkit";
import { IPost } from "../type";


const initialState: IPost[] = [];

const postSlice = createSlice({
    name: '@posts',
    initialState,
    reducers: {}
});

export default postSlice.reducer;