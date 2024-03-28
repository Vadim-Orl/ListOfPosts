import { Post } from "../../../../entities/PostItem";


export interface Result {
    posts: Post[],
    size:  string | null | undefined
}