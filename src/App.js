import React, {useState} from 'react';
import Counter from "./components/Counter";
import PostItem from "./components/PostItem";
import './styles/App.css';
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {

    const [posts, setPosts] = useState([
        {id: 1, title: 'Java', body: 'Description'},
        {id: 2, title: 'Java', body: 'Description'},
        {id: 3, title: 'Java', body: 'Description'},
        {id: 4, title: 'Java', body: 'Description'},
        {id: 5, title: 'Java', body: 'Description'}
    ])

    return (
        <div className="App">
            <form>
                <MyInput type="text" placeholder="Название поста" resize="vertical"/>
                <MyInput type="text" placeholder="Описание поста"/>
                <MyButton>Создать пост</MyButton>
            </form>
            <PostList posts={posts} title="Список постов"/>
        </div>
    );
}

export default App;
