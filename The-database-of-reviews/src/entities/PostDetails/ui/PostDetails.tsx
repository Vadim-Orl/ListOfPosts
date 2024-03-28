import './PostDetails.css'
import { Post } from "../model/type";

interface PostDetailsProps {
    post: Post
}


export function PostDetails({post}: PostDetailsProps){
    return (
        <article className='post__item--dsc'>
            <h3>№ {post?.id}</h3>
            <h4 className='postitem__title'>{post?.title}</h4>
            <div  className='postitem__body'>
              {post?.body}
              {/* {post.body.length>20?post.body.substring(0,20)+'...':post.body} */}
            </div>
        </article>
    );
}