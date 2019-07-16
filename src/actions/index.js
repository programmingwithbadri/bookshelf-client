import axios from 'axios';

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

export function clearBookWithId() {

    return {
        type: 'CLEAR_BOOK_WITH_REVIEWER',
        payload: {
            book: {},
            reviewer: {}
        }
    }
}


//---------------------USER ACTIONS------------------

export function loginUser({ email, password }) {
    const request = axios.post(`http://localhost:3001/api/login`, { email, password })
        .then((response) => response.data)

    return {
        type: 'USER_LOGIN',
        payload: request
    }
}