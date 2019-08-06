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
        case 'CLEAR_NEWBOOK':
            return { ...state, newBook: action.payload }
        case 'UPDATE_BOOK':
            return {
                ...state,
                isBookUpdated: action.payload.success,
                book: action.payload.doc
            }
        case 'DELETE_BOOK':
            return {
                ...state,
                isBookDeleted: action.payload.success
            }
        case 'CLEAR_BOOK':
            return {
                ...state,
                book: action.payload.book,
                isBookUpdated: action.payload.isBookUpdated,
                isBookDeleted: action.payload.isBookDeleted
            }
        default:
            return state;
    }
}