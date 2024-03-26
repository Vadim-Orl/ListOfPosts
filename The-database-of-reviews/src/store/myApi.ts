import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPost } from "../type";

interface Result {
    posts: IPost[],
    size:  string | null | undefined
}

export const postApi = createApi({
    reducerPath:'post',
    baseQuery: fetchBaseQuery({baseUrl:'https://jsonplaceholder.typicode.com'}),
    endpoints: (build) => ({
        getPosts: build.query<Result, {limit:number, pageNumber:number}>({
            query:({ limit = 5, pageNumber = 1 }) => ({
                url: `/posts?_limit=${limit}&_page=${pageNumber}`,
            }),
            transformResponse: (rawResult: IPost[]  , meta) => {
                const size = meta?.response?.headers.get('X-Total-Count');
                const posts = rawResult;
                return { posts, size };
            },
        }),

        getPostById: build.query({
            query:(id) => ({
                url: `/posts/${id}`,
            })
        })
        
        
    })
})

export const {useGetPostsQuery, useGetPostByIdQuery
  } = postApi;