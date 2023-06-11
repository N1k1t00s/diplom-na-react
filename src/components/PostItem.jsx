import React from 'react';
import MyButton from "./UI/button/MyButton";
import {useNavigate} from "react-router-dom"

const PostItem = (props) => {
    const router = useNavigate();
    console.log(router);
    return (
        <div className="post">
            <div className="post__content">
<<<<<<< HEAD
                <h1>#{props.post.id} {props.post.title}</h1>
=======
                <strong>#{props.post.id} {props.post.title}</strong>
>>>>>>> 2768d4f9757f19021077c646a17e7563f301ce1a
                <div>
                    {props.post.body}
                </div>
            </div>
            <div className="post__btn">
                <MyButton onClick={() => router(`/posts/${props.post.id}`)}>
                Открыть
                </MyButton>
                <MyButton onClick={() => props.remove(props.post)}>
                    Удалить
                </MyButton>
            </div>
        </div>
    );
};

export default PostItem;