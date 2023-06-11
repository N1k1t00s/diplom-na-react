import axios from 'axios';

export default class PostService {
    static async getAll(limit = 10, page = 1) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
                _limit: limit,
                _page: page
            }
        })
        return response;
    }
<<<<<<< HEAD

    static async  getById(id) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
        return response;
    }
}
=======
    }
>>>>>>> 2768d4f9757f19021077c646a17e7563f301ce1a
