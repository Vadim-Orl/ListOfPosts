import { createSlice } from "@reduxjs/toolkit";
import { widgetsPostListApi } from "./widgetsPostListApi";
import { Post } from "../../../entities/PostDetails/model/type";

type IInitialState = {
    posts: Post[]
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
          widgetsPostListApi.endpoints.getPosts.matchFulfilled,
          (state, { payload }) => {
            state.size = payload.size
            state.posts = state.posts.concat(payload.posts)
          },
        )
    }
});

export default postSlice.reducer;
export const { incrementPage } = postSlice.actions