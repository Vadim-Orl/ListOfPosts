import { IPost } from "../../../../types/type";

export interface Result {
    posts: IPost[],
    size:  string | null | undefined
}