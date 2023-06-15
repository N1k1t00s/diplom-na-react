import React, { useState } from 'react';
import MyTextarea from "./UI/textarea/MyTextarea";
import MyButton from "./UI/button/MyButton";
import PostService from "../API/PostService";

const PostForm = ({ create, updatePostList }) => {
    const [post, setPost] = useState({ title: '', body: '' });

    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = { ...post, id: Date.now() };
        PostService.create(newPost)
            .then((response) => {
                const savedPost = response.data;
                updatePostList(savedPost);
                setPost({ title: '', body: '' });
            })
            .catch((error) => {
                console.error('Ошибка при создании поста:', error);
            });
    };

    return (
        <div>
            <form>
                <MyTextarea
                    value={post.title}
                    onChange={(e) => setPost({ ...post, title: e.target.value })}
                    type="text"
                    placeholder="Название поста"
                />
                <MyTextarea
                    value={post.body}
                    onChange={(e) => setPost({ ...post, body: e.target.value })}
                    type="text"
                    placeholder="Описание поста"
                />
                <MyButton onClick={addNewPost}>Создать</MyButton>
            </form>
        </div>
    );
};

export default PostForm;
