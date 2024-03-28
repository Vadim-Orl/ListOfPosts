
import { baseApi } from "../../../shared/api/baseApi";
import { Post } from "../model/type";



export const entitiesPostDetailsApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getPostById: build.query<Post, string>({
            query:(id) => ({
                url: `/posts/${id}`,
            })
        })
    })
});

export const { useGetPostByIdQuery } = entitiesPostDetailsApi;