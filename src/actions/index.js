import axios from 'axios';

export function addBooks(book) {
    const request = axios.post(`http://localhost:3001/api/book`, book)
        .then(response => response.data);

    return {
        type: 'ADD_BOOKS',
        payload: request
    }
}

export function getBooks(
    limit = 10,
    start = 0,
    order = 'asc',
    list
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

export function getBookById(bookId) {
    const request = axios.get(`http://localhost:3001/api/book?id=${bookId}`)

    // Using redux thunk to return a function insteada of an action
    return (dispatch) => {
        request.then(({ data }) => {
            const book = data;

            axios.get(`http://localhost:3001/api/user?id=${book.ownerId}`)
                .then(({ data }) => {

                    const response = {
                        book,
                        reviewer: data
                    }

                    dispatch({
                        type: 'GET_BOOK_WITH_REVIEWER',
                        payload: response
                    })
                })
        })
    }
}

export function clearNewBook() {
    return {
        type: 'CLEAR_NEWBOOK',
        payload: {}
    }
}

export function clearBookWithId() {
    return {
        type: 'CLEAR_BOOK_WITH_REVIEWER',
        payload: {
            book: {},
            reviewer: {}
        }
    }
}

export function updateBook(data) {
    const request = axios.put(`http://localhost:3001/api/updateBook`, data)
        .then(response => response.data);

    return {
        type: 'UPDATE_BOOK',
        payload: request
    }
}

export function deleteBook(bookId) {
    const request = axios.delete(`http://localhost:3001/api/deleteBook/?id=${bookId}`)
        .then(response => response.data);

    return {
        type: 'DELETE_BOOK',
        payload: request
    }
}

export function clearBook() {
    return {
        type: 'CLEAR_BOOK',
        payload: {
            book: null,
            isUpdated: false,
            isDeleted: false
        }
    }
}


//---------------------USER ACTIONS------------------

export function loginUser({ email, password }) {
    const request = axios.post(`http://localhost:3001/api/login`, { email, password })
        .then((response) => response.data)
        .catch(error => error.response.data)
    return {
        type: 'USER_LOGIN',
        payload: request
    }
}

export function auth() {
    const request = axios.get(`http://localhost:3001/api/auth`)
        .then(response => response.data)
        .catch(error => error.response.data)
    return {
        type: 'USER_AUTH',
        payload: request
    }
}

export function getPosts(userId) {
    const request = axios.get(`http://localhost:3001/api/userPosts/?userId=${userId}`)
        .then(response => response.data);

    return {
        type: 'GET_USER_POSTS',
        payload: request
    }
}