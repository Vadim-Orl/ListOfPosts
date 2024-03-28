import './PostDetails.css'
import { Post } from "../model/type";
import { makeFirstLetterToUpper } from '../../../shared/model/helpers';

interface PostDetailsProps {
    post: Post
}


export function PostDetails({post}: PostDetailsProps){
    return (
        <article className='post'>
            <h3>№ {post.id}</h3>
            <h4 className='postitem__title'>{makeFirstLetterToUpper(post.title)}</h4>
            <div  className='postitem__body'>
              {makeFirstLetterToUpper(post.body)}
            </div>
        </article>
    );
}