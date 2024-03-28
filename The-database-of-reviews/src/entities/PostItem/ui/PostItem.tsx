import './PostItem.css'
import { Post } from '../model/type';


interface IPostItemProps{
    post: Post
}

export function PostItem({post}: IPostItemProps) {
    return (
        <article className='post__item--dsc'>
            <h3>№ {post.id}</h3>
            <h3 className='postitem__title'>Title: {post.title}</h3>
            <p  className='postitem__body'>
              {post.body.length>20?post.body.substring(0,20)+'...':post.body}
            </p>
        </article>
    );
}
