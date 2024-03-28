import './PostItem.css'
import { Post } from '../model/type';
import { makeFirstLetterToUpper } from '../../../shared/model/helpers';


interface IPostItemProps{
    post: Post
}

export function PostItem({post}: IPostItemProps) {
    const shortBodyPost = post.body.length>20?post.body.substring(0,20)+'...' : post.body
    return (
        <article className='post__item--dsc'>
            <h3>№ {post.id}</h3>
            <h3 className='postitem__title'>{makeFirstLetterToUpper(post.title)}</h3>
            <p  className='postitem__body'>
              {makeFirstLetterToUpper(shortBodyPost)}
            </p>
        </article>
    );
}
