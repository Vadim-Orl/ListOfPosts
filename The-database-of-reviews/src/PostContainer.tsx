import { FC, useEffect, useState, useMemo } from "react";
import { postApi } from "./store/myApi";
import { IPost } from "./type";
import { PostItem } from "./Post";
import { Button } from "./Button";
// import { Link, Navigate } from "react-router-dom";
import { AppRoute } from "./utils";
import { useLocation, useNavigate } from "react-router-dom";
import { store } from "./store/store";
import { useAppSelector, useAppDispatch } from "./store/redux-hook";
import { incrementPage } from "./store/postSlice";

export const PostContainer: FC = () => {
    const location = useLocation()
    const navigate = useNavigate();
    // let page = 0;
    useEffect(()=>{
    }, [])
    const page = useAppSelector((store) => store.posts.page);
    
    // const [page, setPage] = useState(1);
    // const page = 2;
    const { data, isLoading, isFetching} = postApi.useGetPostsQuery({limit: 10, pageNumber: page})
    const dataPost = (useAppSelector((store) => store.posts))
    console.log('11111111111111')
    console.log(dataPost.posts)
    // const posts = data?.posts || [] ;

    // const size = Number(data?.size) || 0;
    console.log(page + 'psge')
    const dispatch = useAppDispatch()

    useEffect(() => {
        const onScroll = () => {
          const scrolledToBottom =  window.innerHeight + window.scrollY >= document.body.offsetHeight;
          console.log(scrolledToBottom)
          console.log('scrolledToBottom')
          if (scrolledToBottom && !isFetching) {

            if ((page * 10) < 300 ) {
              dispatch(incrementPage())
            } 
          }
        };
    
        document.addEventListener("scroll", onScroll);
        console.log('hokkkkkkke')
        return function () {
          document.removeEventListener("scroll", onScroll);
        };
      }, [page, isFetching, location.key]);

      const handleClick = (e: any) => {
        if (e.target.tagName === 'BUTTON') {
            console.log('id');
            navigate(`${AppRoute.Posts}${e.target.id}`)
        }
      }

    return (
        <div>
            <div className='post__list' onClick={handleClick}>
                {Array.isArray(dataPost.posts) && dataPost.posts.map((post: IPost) => {
                    // console.log(post.id + 'hello')
                    return (
                        <>
                            <PostItem key={post.id} post={post}/>
                            <Button key={`button${post.id}`} id={String(post.id)} >Постомтреть</Button>
                        </>
                    )}
                        
                )}
            </div>
            {isLoading&&<div>Загрузка данных</div>}
        </div>
    );
};