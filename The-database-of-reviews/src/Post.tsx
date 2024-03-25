import { FC } from "react";
import { IPost } from "./type";

interface IPostItemProps{
    post: IPost
}

export const PostItem:FC<IPostItemProps> = ({post}) => {
    return (
        <div className='container__postItem'>
            <div>№ {post.id}</div>
            <div className='postitem__title'>Title: {post.title}</div>
            <div  className='postitem__body'>
              Body:  {post.body.length>20?post.body.substring(0,20)+'...':post.body}
            </div>
        </div>
    );
};