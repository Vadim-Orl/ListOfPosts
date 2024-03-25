
import { useParams } from "react-router-dom";
import { useGetPostByIdQuery } from "./store/myApi";

export const PostItem = () => {
    const params = useParams();
    const prodId = params.id;

    const {data: post} = useGetPostByIdQuery(prodId)

    return (
        // {isLoading ? : }
        <div className='container__postItem'>
            <div>№ {post.id}</div>
            <div className='postitem__title'>Title: {post.title}</div>
            <div  className='postitem__body'>
              Body: {post?.body}
              11111111111111111
            </div>
        </div>
    );
};