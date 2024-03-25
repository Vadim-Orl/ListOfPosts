import { FC, useEffect, useState } from "react";
import { postApi } from "./store/myApi";
import { IPost } from "./type";
import { PostItem } from "./Post";

export const PostContainer: FC = () => {
    const [currentPostStart,setCurrentPostStart]=useState(1)
    const [postsArr, setPostsArr] = useState([]);

    const {data:posts, isLoading, isSuccess} = postApi.useGetPostsQuery({limit:10 * currentPostStart, start:0})

    const [isMyFetching, setIsFetchingDown] = useState(false)
    const [isMyFetchingUp, setIsMyFetchingUp] = useState(false)

    useEffect(()=>{
        if(isMyFetching){
            setCurrentPostStart(prev=>{
                return prev<102 ? prev+1 : prev
            })
            setIsFetchingDown(false)  
        }
    },[isMyFetching])

    useEffect(()=>{
    if(isMyFetchingUp) {
        setCurrentPostStart(prev=>{
            return prev>0 ? prev-1 : prev
        })
        setIsMyFetchingUp(false)  
    }
    },[isMyFetchingUp])

    useEffect(()=>{
      document.addEventListener('scroll',scrollHandler)
      return ()=>{
        document.removeEventListener('scroll',scrollHandler)
        console.log('remove')
      }
    },[])

    const scrollHandler=(e:any):void=>{
        const docScroll = e.target.documentElement;
        if (!isSuccess) {
            if(docScroll.scrollTop < 50) {
                setIsMyFetchingUp(true)
            }
    
            if(docScroll.scrollHeight - docScroll.scrollTop - window.innerHeight < 50) {
                    setIsFetchingDown(true)
                    window.scrollTo(0, (docScroll.scrollHeight + docScroll.scrollTop));
                }
        }
       
    }
    return (
        <div>
            <div className='post__list'>
                {posts?.map((post: IPost)=><PostItem key={post.id} post={post}/>)}
            </div>
            {isLoading&&<div>Загрузка данных</div>}
        </div>
    );
};