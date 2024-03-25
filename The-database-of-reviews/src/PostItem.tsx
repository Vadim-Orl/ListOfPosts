
import { useNavigate, useParams } from "react-router-dom";
import { useGetPostByIdQuery } from "./store/myApi";
import { Button } from "./Button";
// import { IPost } from "./type";
import { useHistory } from "react-router-dom";
import { AppRoute } from "./utils";
// interface IPostItemProps{
//     post: IPost
// }

export const PostItem = () => {
    const navigate = useNavigate();

    const params = useParams();
    const prodId = params.id;
    console.log(prodId)

    const {data: post = [], isLoading} = useGetPostByIdQuery(prodId);

    console.log(post)
    console.log(isLoading)


    const clickHandler = () => {
        console.log('hello')
        navigate(-1)
    }
    
    return (
        <div className='container__postItem'>
            <div>№ {post.id}</div>
            <div className='postitem__title'>Title: {post.title}</div>
            <div  className='postitem__body'>
              Body: {post?.body}
              11111111111111111
            </div>

            <Button onClick={clickHandler}>Назад</Button>
        </div>
    );
};