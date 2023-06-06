import React, {useMemo, useState} from 'react';
import './styles/App.css';
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import MyInput from "./components/UI/input/MyInput";

function App() {

    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sort:'', query: ''})

    const sortedPosts = useMemo(() => {
        if (filter.sort){
            return [...posts].sort((a,b) => a[filter.sort].localeCompare(b[filter.sort]));
        }
        return posts;
    }, [filter.sort, posts])

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
    }, [filter.query, sortedPosts])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
        <div className="App">
            <PostForm create={createPost}/>
            <hr/>
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
            {sortedAndSearchedPosts.length
                ? <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Список постов"/>
                : <h1 className="emergency">Посты не были найдены</h1>
            }
        </div>
    );
}

export default App;
