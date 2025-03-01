const initialState = {  
    books: [],
    myBooks:[],
    loading: false,
    error: null,
};

export const booksReducer = (state = initialState, action) => {
    switch (action.type){
        case "FETCH_BOOKS_REQUEST":
            return {
                ...state,
                loading: true,
            };
        case "FETCH_BOOKS_SUCCESS":
            return {
                ...state,
                loading: false,
                books: action.payload,
            };
        case "FETCH_BOOKS_FAILURE":
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case "ADD_BOOK_TO_USER_LIST":
            return {
                ...state,
                myBooks: [...state.myBooks, action.payload],
            };
            default:
                return state;
    }
};