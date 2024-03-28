
import { Post } from "../../../entities/PostItem";
import { baseApi } from "../../../shared/api/baseApi";
import { Result } from "../model/types/type";



export const widgetsPostListApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getPosts: build.query<Result, {limit:number, pageNumber:number}>({
            query:({ limit = 5, pageNumber = 1 }) => ({
                url: `/posts?_limit=${limit}&_page=${pageNumber}`,
            }),
            transformResponse: (rawResult: Post[]  , meta) => {
                const size = meta?.response?.headers.get('X-Total-Count');
                const posts = rawResult;
                return { posts, size };
            },
        }),
    }),
})

export const { useGetPostsQuery } = widgetsPostListApi;