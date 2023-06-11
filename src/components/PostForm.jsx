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
<<<<<<< HEAD
                    <MyTextarea
=======
                    <MyInput
>>>>>>> 2768d4f9757f19021077c646a17e7563f301ce1a
                        // Управляемый компонент
                        value={post.title}
                        onChange={e => setPost({...post,title: e.target.value})}
                        type="text"
                        placeholder="Название поста"
                    />
<<<<<<< HEAD
                    <MyTextarea
=======
                    <MyInput
>>>>>>> 2768d4f9757f19021077c646a17e7563f301ce1a
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