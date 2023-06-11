import React from 'react';
import MyButton from "./UI/button/MyButton";
import {useNavigate} from "react-router-dom"

const PostItem = (props) => {
    const router = useNavigate();
    console.log(router);
    return (
        <div className="post">
            <div className="post__content">
                <h1>#{props.post.id} {props.post.title}</h1>
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