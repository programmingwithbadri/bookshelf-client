import axios from 'axios';

export function getBooks(
    limit = 10,
    start = 0,
    order = 'asc'
) {
    const request = axios.get(`http://localhost:3001/api/books/?skip=${start}&limit=${limit}&order=${order}`)
    .then(response => response.data)
    return {
        type: 'GET_BOOKS',
        payload: request
    }
}