import { FC, useEffect} from "react";
import { postApi } from "./store/myApi";
import { IPost } from "./type";
import { PostItem } from "./Post";
import { Button } from "./Button";
import { AppRoute, COUNT_POST_FOR_LIST } from "./utils";
import { useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "./store/redux-hook";
import { incrementPage } from "./store/postSlice";

export const PostContainer: FC = () => {
    const navigate = useNavigate();
    const page = useAppSelector((store) => store.data.page);
    const dataPost = (useAppSelector((store) => store.data.posts))
    const sizePost = Number(useAppSelector((store) => store.data.size))
    
    const {isLoading, isFetching} = postApi.useGetPostsQuery({limit: COUNT_POST_FOR_LIST, pageNumber: page})
    const dispatch = useAppDispatch()

    useEffect(() => {
        const onScroll = () => {
          const scrolledToBottom =  window.innerHeight + window.scrollY >= (document.body.offsetHeight - 10);

          if (scrolledToBottom && !isFetching) {
            if ((page * COUNT_POST_FOR_LIST) < sizePost ) {
              dispatch(incrementPage())
            } 
          }
        };
    
        document.addEventListener("scroll", onScroll);

        return function () {
          document.removeEventListener("scroll", onScroll);
        };
      }, [page, isFetching]);

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
                {dataPost.map((post: IPost) => {
                    return (
                        <>
                            <PostItem key={post.id} post={post}/>
                            <Button key={`button${post.id}`} id={String(post.id)} >Постомтреть</Button>
                        </>
                    )}
                        
                )}
            </div>
            {(isLoading) && <div>Загрузка данных</div>}
        </div>
    );
};