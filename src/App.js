import React, {useState} from 'react';
import './styles/App.css';
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

function App() {

    const [posts, setPosts] = useState([])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    return (
        <div className="App">
            <PostForm create={createPost}/>
            <PostList posts={posts} title="Список постов"/>
        </div>
    );
}

export default App;
