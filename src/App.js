import React from 'react';
import './styles/App.css';
<<<<<<< HEAD
import Router from '../src/components/Router'

function App() {
    return (
        <>
            <Router/>
        </>
    );
=======
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import PostService from "./API/PostService";
import {usePosts} from "./hooks/usePost";
import Loader from "./components/UI/Loader/Loader";
import {useFetch} from "./hooks/useFetch";
import {getPagesArray, getPageCount} from "./utils/pages";

function App() {

    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
    let pagesArray = getPagesArray(totalPages);

    const [fetchPosts, isPostsLoading, postError] = useFetch(async () => {
        const response = await PostService.getAll(limit, page);
        setPosts(response.data);
        const totalCount = response.headers['x-total-count'];
        setTotalPages(getPageCount(totalCount, limit));
    })

    useEffect(() => {
        fetchPosts()
    }, [page])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false);
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const changePage = (page) => {
        setPage(page);
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
            <span>
                <MyButton onClick={() => setModal(true)}>
                    Создать пост
                </MyButton>
            </span>
        </div>
        {postError && <h1 className="emergency">Произошла ошибка ${postError}</h1>}
        {isPostsLoading ? <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}><Loader/></div> :
            <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Список постов"/>}
        <div className="page__wrapper">{pagesArray.map(p => <span
            onClick={() => changePage(p)}
            key={p}
            className={page === p ? 'page page__current' : 'page'}>{p}</span>)}</div>
    </div>);
>>>>>>> 2768d4f9757f19021077c646a17e7563f301ce1a
}

export default App;
