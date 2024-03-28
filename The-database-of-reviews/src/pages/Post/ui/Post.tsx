import './Post.css'
import { useNavigate, useParams } from "react-router-dom";
import { Button, Error, Loading } from "../../../shared/ui";
import { PostDetails, useGetPostByIdQuery } from "../../../entities/PostDetails";

export function Post(){
    const navigate = useNavigate();

    const params = useParams();
    const prodId = params.id;

    const {data: post, isLoading , isError} = useGetPostByIdQuery(prodId as string);

    const clickBack = () => {
        navigate(-1)
    }

    if (isLoading) return <Loading />;
    if (isError) return <Error />
    
    return (
        <div className='container__postItem'>
            {post ? <PostDetails post={post}/> : <Error />}
            <Button onClick={clickBack}>Назад</Button>
        </div>
    );
}