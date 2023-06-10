import React, {useEffect, useMemo, useState} from 'react';
import '../styles/App.css';
import PostList from "../components/PostList";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import MyModal from "../components/UI/MyModal/MyModal";
import MyButton from "../components/UI/button/MyButton";
import PostService from "../API/PostService";
import {usePosts} from "../hooks/usePost";
import Loader from "../components/UI/Loader/Loader";
import {useFetch} from "../hooks/useFetch";
import {getPageCount} from "../utils/pages";
import Pagination from "../components/UI/pagination/Pagination";


function Posts() {

    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

    const [fetchPosts, isPostsLoading, postError] = useFetch(async (limit, page) => {
        const response = await PostService.getAll(limit, page);
        console.log(response);
        setPosts(response.data);
        const totalCount = response.headers['x-total-count'];
        setTotalPages(getPageCount(totalCount, limit));
    })

    useEffect(() => {
        fetchPosts(limit, page);
    }, [page])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false);
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (<div className="App">
        <div className="container">
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
            <MyButton onClick={() => setModal(true)}>
                Создать пост
            </MyButton>
        </div>
        {postError && <h1 className="emergency">Произошла ошибка ${postError}</h1>}
        {isPostsLoading ? <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}><Loader/></div> :
            <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Список постов"/>}
        <Pagination page={page} changePage={setPage} totalPages={totalPages}/>
    </div>);
}

export default Posts;