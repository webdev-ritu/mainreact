import {db} from '../../firebase/firebaseConfig';
import {ref, get, set} from 'firebase/database';

export const fetchBooks = () => async (dispatch) => {
    dispatch({
        type: "FETCH_BOOKS_REQUEST"
    });
    try{
        const snapshot = await get(ref(db, "/books"));
        if (snapshot.exists()){
            dispatch({
                type: "FETCH_BOOKS_SUCCESS",
                payload: Object.entries(books).map(({id, ...data})) });
        }else {
            dispatch({
                type: "FETCH_BOOKS_ERROR",
                payload: "No data available"
            });
        }
     } catch (error){
            dispatch({
                type: "FETCH_BOOKS_ERROR",
                payload: error.message
            });
        }
    };
    export const addBookToUserList = (userId, book ) => async (dispatch) => {
        try{
            await set(ref(db, `users/${userId}/myBooks/${book.id}`), book);
            dispatch({
                type: "ADD_BOOK_TO_USER_LIST",
                payload: book
            });
        }catch (error){
            console.error("addBookToUserList error: ", error);
        }
    };