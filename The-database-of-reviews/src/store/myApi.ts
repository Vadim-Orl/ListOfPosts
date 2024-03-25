import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPost } from "../type";

// const  initialState = {
//     posts: []
//   }

export const postApi=createApi({
    reducerPath:'post',
    baseQuery: fetchBaseQuery({baseUrl:'https://jsonplaceholder.typicode.com'}),
    endpoints: (build)=>({
        getPosts: build.query<IPost[],{limit:number,start:number}>({
            query:({ limit = 5, start = 0 }) => ({
                url:'/posts',
                params: {
                    _limit: limit,
                    _start: start,
                }
            })
        })
        
    })
})

export const {useGetPostsQuery, 
  } = postApi;