import { FC, useEffect, useState } from "react";
import { postApi } from "./store/myApi";
import { IPost } from "./type";
import { PostItem } from "./Post";
import { Button } from "./Button";
// import { Link, Navigate } from "react-router-dom";
// import { AppRoute } from "./utils";
import { useNavigate } from "react-router-dom";

export const PostContainer: FC = () => {
    const navigate = useNavigate();
    console.log()

    const [page, setPage] = useState(1);
    const { data, isLoading, isFetching} = postApi.useGetPostsQuery({limit: 20, pageNumber: page})

    const posts = data?.posts || [];
    const size = Number(data?.size) || 0;

    useEffect(() => {
        const onScroll = () => {
          const scrolledToBottom =
            window.innerHeight + window.scrollY >= document.body.offsetHeight;
          if (scrolledToBottom && !isFetching) {

            if ((page * 10) < size ) {
                setPage(page + 1);
            } 
          }
        };
    
        document.addEventListener("scroll", onScroll);
    
        return function () {
          document.removeEventListener("scroll", onScroll);
        };
      }, [page, isFetching]);

      const handleClick = (e: any) => {
        if (e.target.tagName === 'BUTTON') {
            console.log('id');
            navigate("/posts/3")
        }
      }

    return (
        <div>
            <div className='post__list' onClick={handleClick}>
                {Array.isArray(posts) && posts.map((post: IPost) => {
                    // console.log(post.id + 'hello')
                    return (
                        <>
                            <PostItem key={post.id} post={post}/>
                            {/* <Button key={`button${post.id}`} id={String(post.id)} >Постомтреть</Button> */}
                        </>
                    )}
                        
                )}
            </div>
            {isLoading&&<div>Загрузка данных</div>}
        </div>
    );
};