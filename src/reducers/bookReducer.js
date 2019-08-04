export default function (state = {}, action) {
    switch (action.type) {
        case 'GET_BOOKS':
            return { ...state, list: action.payload }
        case 'GET_BOOK_WITH_REVIEWER':
        case 'CLEAR_BOOK_WITH_REVIEWER':
            return {
                ...state,
                book: action.payload.book,
                reviewer: action.payload.reviewer
            }
        case 'ADD_BOOKS':
        case 'UPDATE_BOOK':
        case 'CLEAR_NEWBOOK':
            return { ...state, newBook: action.payload }
        default:
            return state;
    }
}