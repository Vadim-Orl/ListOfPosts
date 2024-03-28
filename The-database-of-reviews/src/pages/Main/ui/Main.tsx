import { useEffect } from 'react';
import { COUNT_POST_FOR_LIST } from '../../../app/config/utils';
import { incrementPage } from '../../../widgets/PostsList/api/postSlice';
import { PostsList } from '../../../widgets/PostsList/ui/PostsList';
import { useAppDispatch, useAppSelector } from '../../../app/hooks@deprecated';
import { widgetsPostListApi } from '../../../widgets/PostsList/api/widgetsPostListApi';

export function Main() {
	const page = useAppSelector((store) => store.data.page);
	const listPosts = (useAppSelector((store) => store.data.posts));
	const sizePost = Number(useAppSelector((store) => store.data.size));
    
	const {isLoading, isFetching} = widgetsPostListApi.useGetPostsQuery({limit: COUNT_POST_FOR_LIST, pageNumber: page});
	const dispatch = useAppDispatch();

	useEffect(() => {
		const onScroll = () => {
			const scrolledToBottom =  window.innerHeight + window.scrollY >= (document.body.offsetHeight - 10);

			if (scrolledToBottom && !isFetching) {
				if ((page * COUNT_POST_FOR_LIST) < sizePost ) {
					dispatch(incrementPage());
				} 
			}
		};
    
		document.addEventListener('scroll', onScroll);

		return function () {
			document.removeEventListener('scroll', onScroll);
		};
	}, [page, isFetching]);

	return (
		<PostsList listPosts={listPosts} isLoading={isLoading}/>
	);
} 