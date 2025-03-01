
import {getDatabase,ref, get} from 'firebase/database';
import {database} from "../firebase/firebaseConfig";
export const FETCH_BOOKS_REQUEST = "FETCH_BOOKS_REQUEST";
export const FETCH_BOOKS_SUCCESS = "FETCH_BOOKS_SUCCESS";
export const FETCH_BOOKS_FAILURE = "FETCH_BOOKS_FAILURE";
export const ADD_BOOK_TO_USER_LIST = "ADD_BOOK_TO_USER_LIST";
export const FETCH_MY_BOOKS_SUCCESS = "FETCH_MY_BOOKS_SUCCESS";
export const FETCH_MY_BOOKS = "FETCH_MY_BOOKS";
export const UPDATE_BOOK_STATUS = "UPDATE_BOOK_STATUS";
export const RATE_BOOK = "RATE_BOOK";

const database = getDatabase();

export const fetchBooks = () => {
    return async (dispatch) => {
        dispatch({type: FETCH_BOOKS_REQUEST});
        try{
            const bookRef = ref(database, "books");
            const snapshot = await get(bookRef);
            if(snapshot.exists()){

            const booksData = snapshot.val();
            const bookArray = Object.keys(booksData).map((key) => ({
                id: key,
                ...booksData[key]
            }));
            dispatch({type: FETCH_BOOKS_SUCCESS, payload: bookArray});
            }
        }catch (error){
            dispatch({type:FETCH_BOOKS_FAILURE,payload:error.message});
        }
    };
};
export const addBookToUserList = (userId, book)=> {
    return async (dispatch)=> {
        try{
            const userBookRef = ref(database, `users/${userId}/books`);
            await set(userBookRef, {...book, userId});
           const bookWithId = { ...book, id:newBookRef.key};
           await set (newBookRef, bookWithId);
           dispatch({type: ADD_BOOK_TO_USER_LIST, payload: bookWithId});
        }catch (error){
            console.error("Error adding book to user list", error);
        }
    };
};
export const fetchMyBooks = (userId)=>{
    return async (dispatch) => {
        try {
            const userBookRef = ref(database, `users/${userId}/books`);
            const snapshot = await get(userBookRef);
            if (snapshot.exists()){
                const booksData = snapshot.val();
                const bookArray = Object.keys(booksData).map((key) => ({
                    id: key,
                    ...booksData[key]
                }));
                dispatch({type: FETCH_MY_BOOKS_SUCCESS, payload: bookArray});
            }
            
        } catch (error) {
            console.error("Error fetching user's books", error);
        }
    };
};

export const rateBook = (userId, bookId, rating) => {
    return async (dispatch) => {
        try {
            const userBookRef = ref(database, `users/${userId}/books/${bookId}`);
            await set(userBookRef, { rating }, { merge: true });
            dispatch({ type: RATE_BOOK, payload: { bookId, rating } });
        } catch (error) {
            console.error("Error rating book", error);
        }
    };
};
export const addBooksToFirebase =() => {
    return async (dispatch) => {
        try {
            const books = [
                {
                    "books": {
                        "-OK60V0HT8YMnyeQ2RSV": {
                            "author": "Andrew Hunt & David Thomas",
                            "availability": true,
                            "coverImage": "https://placehold.co/300x300/FF5733/FFFFFF?text=The+Pragmatic+Programmer",
                            "status": "want to read",
                            "title": "The Pragmatic Programmer"
                        },
                        "-OK6CNe_wybyaqRGSSCu": {
                            "author": "Robert C. Martin",
                            "availability": true,
                            "coverImage": "https://placehold.co/300x300/3498DB/FFFFFF?text=Clean+Code",
                            "status": "currently reading",
                            "title": "Clean Code"
                        },
                        "-OK6CUEIvB2JYxvlZOoV": {
                            "author": "Kyle Simpson",
                            "availability": false,
                            "coverImage": "https://placehold.co/300x300/2ECC71/FFFFFF?text=You+Don't+Know+JS",
                            "status": "want to read",
                            "title": "You Don't Know JS"
                        },
                        "-OK6CYpfCNU7NtpPieOB": {
                            "author": "Marijn Haverbeke",
                            "availability": true,
                            "coverImage": "https://placehold.co/300x300/F1C40F/000000?text=Eloquent+JavaScript",
                            "status": "read",
                            "title": "Eloquent JavaScript"
                        },
                        "-OK7BPrzsOrX5Aoej1kA": {
                            "author": "John Resig & Bear Bibeault",
                            "availability": false,
                            "coverImage": "https://placehold.co/300x300/C0392B/FFFFFF?text=Secrets+of+the+JavaScript+Ninja",
                            "status": "read",
                            "title": "Secrets of the JavaScript Ninja"
                        },
                        "-OK7BTzxqbfTxLWcaA6K": {
                            "author": "Mark Ethan Trostler",
                            "availability": true,
                            "coverImage": "https://placehold.co/300x300/D35400/FFFFFF?text=Testable+JavaScript",
                            "status": "want to read",
                            "title": "Testable JavaScript"
                        },
                        "-OK7BWgtz8mmHnJqPbt7": {
                            "author": "Kyle Simpson",
                            "availability": true,
                            "coverImage": "https://placehold.co/300x300/1ABC9C/FFFFFF?text=You+Don%27t+Know+JS%3A+ES6+%26+Beyond",
                            "status": "read",
                            "title": "You Don't Know JS: ES6 & Beyond"
                        },
                        "-OK7B_FT6xi2QwZBHlex": {
                            "author": "Addy Osmani",
                            "availability": true,
                            "coverImage": "https://placehold.co/300x300/F39C12/FFFFFF?text=Learning+JavaScript+Design+Patterns",
                            "status": "currently reading",
                            "title": "Learning JavaScript Design Patterns"
                        },
                        "-OK7BbeBfVvtc6kLxXgq": {
                            "author": "David Flanagan",
                            "availability": true,
                            "coverImage": "https://placehold.co/300x300/9B59B6/FFFFFF?text=JavaScript%3A+The+Definitive+Guide",
                            "status": "read",
                            "title": "JavaScript: The Definitive Guide"
                        }
                    }
                }
                
            ];                
books.forEach(async (book) => {
    const bookRef = ref(database, "books");
    await set(bookRef, book);
});
console.log("Books added to Firebase");
        }catch (error){
            console.error("Error adding books to Firebase", error);
        }
    };
};
