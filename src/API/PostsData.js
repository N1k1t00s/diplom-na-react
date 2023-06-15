let postsData = JSON.parse(localStorage.getItem("posts")) || [
    // { id: 1, title: "Заголовок 1", body: "Текст поста 1" },
    // { id: 2, title: "Заголовок 2", body: "Текст поста 2" },
    // // Другие посты
];

export default postsData;
