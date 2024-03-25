import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPost } from "../type";

// <IPost[],{limit:number, pageNumber:number}>
export const postApi = createApi({
    reducerPath:'post',
    baseQuery: fetchBaseQuery({baseUrl:'https://jsonplaceholder.typicode.com'}),
    endpoints: (build) => ({
        getPosts: build.query<IPost[],{limit:number, pageNumber:number}>({
            query:({ limit = 5, pageNumber = 1 }) => ({
                url: `/posts?_limit=${limit}&_page=${pageNumber}`,
                // url: `posts?offset=${pageNumber}&limit=${limit}`,
            }),
            // transformResponse: async (response, meta) => {
            //     const size = meta?.response?.headers.get('X-Total-Count')
            //     const posts = await response;
            //     return { posts, size };
            // },
            // serializeQueryArgs: ({ endpointName }) => {
            //     return endpointName;
            //   },
            // merge: (currentCache, newItems) => {
            //     currentCache.posts.push(...newItems.posts);
            //   },
            // forceRefetch({ currentArg, previousArg }) {
            //     return currentArg !== previousArg;
            //   }
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