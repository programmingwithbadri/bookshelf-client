import axios from 'axios';

export function getBooks(
    limit = 10,
    start = 0,
    order = 'asc',
    list: ''
) {
    const request = axios.get(`http://localhost:3001/api/books/?skip=${start}&limit=${limit}&order=${order}`)
        .then(response => {
            if (list) {
                return [...list, ...response.data]
            } else {
                return response.data
            }
        }
        )
    return {
        type: 'GET_BOOKS',
        payload: request
    }
}