
import { useNavigate, useParams } from "react-router-dom";
import { useGetPostByIdQuery } from "./store/myApi";
import { Button } from "./Button";

export const PostItem = () => {
    const navigate = useNavigate();

    const params = useParams();
    const prodId = params.id;

    const {data: post = [], isLoading} = useGetPostByIdQuery(prodId);


    const clickBack = () => {
        navigate(-1)
    }

    if (isLoading) return <div>Загрузка данных</div>
    
    return (
        <div className='container__postItem'>
            <div>№ {post.id}</div>
            <div className='postitem__title'>Title: {post.title}</div>
            <div  className='postitem__body'>
              Body: {post?.body}
            </div>

            <Button onClick={clickBack}>Назад</Button>
        </div>
    );
};