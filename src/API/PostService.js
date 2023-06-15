import postsData from './PostsData';

export default class PostService {
    static getAll(limit = 10, page = 1) {
        // Вместо запроса к серверу, возвращаем локальный массив данных
        const startIndex = (page - 1) * limit;
        const endIndex = startIndex + limit;
        const paginatedData = postsData.slice(startIndex, endIndex);
        return Promise.resolve({
            data: paginatedData,
            headers: {
                "x-total-count": postsData.length,
            },
        });
    }

    static getById(id) {
        // Вместо запроса к серверу, ищем пост в локальном массиве данных
        const post = postsData.find((post) => post.id === id);
        return Promise.resolve({ data: post });
    }

    static create(post) {
        const posts = JSON.parse(localStorage.getItem("posts")) || [];
        const newId = posts.length > 0 ? Math.max(...posts.map((post) => post.id)) + 1 : 1;
        const newPost = { ...post, id: newId };
        posts.push(newPost);
        localStorage.setItem("posts", JSON.stringify(posts));
        return Promise.resolve({ data: newPost });
    }

    static delete(id) {
        const index = postsData.findIndex((post) => post.id === id);
        if (index !== -1) {
            const deletedPost = postsData.splice(index, 1);
            return Promise.resolve({ data: deletedPost[0] });
        }
        return Promise.reject(new Error("Пост не найден"));
    }
}
