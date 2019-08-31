import axios from 'axios';
import serverUrl from '../config';

export function addBooks(book) {
    const request = axios.post(`${serverUrl}/api/book`, book)
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
    const request = axios.get(`${serverUrl}/api/books/?skip=${start}&limit=${limit}&order=${order}`)
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
    const request = axios.get(`${serverUrl}/api/book?id=${bookId}`)

    // Using redux thunk to return a function insteada of an action
    return (dispatch) => {
        request.then(({ data }) => {
            const book = data;

            axios.get(`${serverUrl}/api/user?id=${book.ownerId}`)
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
    const request = axios.put(`${serverUrl}/api/updateBook`, data)
        .then(response => response.data);

    return {
        type: 'UPDATE_BOOK',
        payload: request
    }
}

export function deleteBook(bookId) {
    const request = axios.delete(`${serverUrl}/api/deleteBook/?id=${bookId}`)
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
    const request = axios.post(`${serverUrl}/api/login`, { email, password }, {withCredentials: true}) // withCredentials - Get/Set the cookie while sending request/receiving response
        .then((response) => response.data)
        .catch(error => error.response.data)
    return {
        type: 'USER_LOGIN',
        payload: request
    }
}

export function auth() {
    const request = axios.get(`${serverUrl}/api/auth`, {withCredentials: true})
        .then(response => response.data)
        .catch(error => error.response.data)
    return {
        type: 'USER_AUTH',
        payload: request
    }
}

export function getPosts(userId) {
    const request = axios.get(`${serverUrl}/api/userPosts/?userId=${userId}`)
        .then(response => response.data);

    return {
        type: 'GET_USER_POSTS',
        payload: request
    }
}

export function getUsers() {
    const request = axios.get(`${serverUrl}/api/users`)
        .then(response => response.data);

    return {
        type: 'GET_USERS',
        payload: request
    }
}

export function registerUser(user, userList) {
    const request = axios.post(`${serverUrl}/api/register`, user)

    return (dispatch) => {
        request.then(({ data }) => {
            let users = data.success ? [...userList, data.user] : userList
            let response = {
                success: data.success,
                users
            }

            dispatch({
                type: 'USER_REGISTER',
                payload: response
            })
        })
    }
}