import { createSlice } from "@reduxjs/toolkit";
import { IPost } from "../type";
import { postApi } from "./myApi";

type IInitialState = {
    posts: IPost[]
    size: string | null | undefined,
    page: number
}
const initialState:IInitialState = {
    posts: [],
    size: '100',
    page: 1

}

const postSlice = createSlice({
    name: '@posts',
    initialState,
    reducers: {
        incrementPage(state) {
            state.page++;
          },
    },
    extraReducers: (builder) => {
        builder.addMatcher(
          postApi.endpoints.getPosts.matchFulfilled,
          (state, { payload }) => {
              console.log(payload)
            state.size = payload.size
            state.posts = state.posts.concat(payload.posts)
          },
        )
    }
});

export default postSlice.reducer;
export const { incrementPage } = postSlice.actions