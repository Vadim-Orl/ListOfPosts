
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
   

      const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault()

        if (e.target instanceof Element){
          if (e.target.tagName === 'BUTTON') {
            const button = e.target as HTMLButtonElement
              console.log('id');
              navigate(`${AppRoute.Posts}${button.id}`)
          }
        }
      }

    return (
      <div>
        <div className='post__list' onClick={handleClick}>
            {listPosts.map((post: Post) => {
                return (
                    <div className='post__item'>
                        <PostItem key={post.id} post={post}/>
                        <Button key={`button${post.id}`} id={String(post.id)} >Постомтреть</Button>
                    </div>
                )}

            )}
        </div>
        {(isLoading) && <div>Загрузка данных</div>}
      </div>
    );
}