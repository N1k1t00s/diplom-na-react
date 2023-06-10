import React, {useState} from 'react';
import MyTextarea from "./UI/textarea/MyTextarea";
import MyButton from "./UI/button/MyButton";

const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', body: ''})

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost);
        setPost({title: '', body: ''})
    }

        return (
            <div>
                <form>
                    <MyTextarea
                        // Управляемый компонент
                        value={post.title}
                        onChange={e => setPost({...post,title: e.target.value})}
                        type="text"
                        placeholder="Название поста"
                    />
                    <MyTextarea
                        value={post.body}
                        onChange={e => setPost({...post, body: e.target.value})}
                        type="text"
                        placeholder="Описание поста"
                    />
                    <MyButton onClick={addNewPost}>Создать</MyButton>
                </form>
            </div>
        );
    };

    export default PostForm;