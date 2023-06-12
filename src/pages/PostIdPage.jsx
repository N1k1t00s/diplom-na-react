import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetch} from "../hooks/useFetch";
import Loader from "../components/UI/Loader/Loader";
import PostService from "../API/PostService";

const PostIdPage = () => {
    const params = useParams();
    const [post, setPost] = useState({});
    const [fetchPostById, isLoading, error] = useFetch(async (id) => {
        const response = await PostService.getById(params.id);
        setPost(response.data);
    })
    useEffect(() => {
        fetchPostById(params.id);
    }, [])

    return (
        <div>
            {isLoading
                ? <Loader/>
                : <div>
                    <h1>{post.id} . {post.title}</h1>
                    <div>{post.body}</div>
                </div>
            }
        </div>
    );
};

export default PostIdPage;