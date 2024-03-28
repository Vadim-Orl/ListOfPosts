
import './PostsList.css'

import { AppRoute} from "../../../app/config/utils";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../shared/ui";
import { Post } from "../../../entities/PostDetails/model/type";
import { PostItem } from '../../../entities/PostItem';


interface PostContainerProps {
  listPosts: Post[],
  isLoading: boolean
}

export function PostsList({listPosts, isLoading}: PostContainerProps) {
    const navigate = useNavigate();
   
    const handleClick = (postId: number) => {
            navigate(`${AppRoute.Posts}${postId}`)
    }

    return (
      <div>
        <div className='post__list'>
            {listPosts.map((post: Post) => {
                return (
                    <div className='post__item' key={post.id}>
                        <PostItem post={post}/>
                        <Button key={`button${post.id}`} onClick={()=>handleClick(post.id)} >Постомтреть</Button>
                    </div>
                )}
            )}
        </div>
        {(isLoading) && <div>Загрузка данных</div>}
      </div>
    );
}