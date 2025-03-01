import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../redux/actions/booksActions";
import BookCard from "../components/MyBookCard";

const MyBooksPage = () => {
    const dispatch = useDispatch();
    const {myBooks, loading, error} = useSelector((state) => state.books);
    const user = useSelector((state) => state.auth.user);
    useEffect(()=>{
        if (user){
            dispatch(fetchBooks(user.uid));
        }
    },[dispatch, user]);
    if (!user){
        return <p>please login to view your books</p>;
    }
    return (
        <div>
            <h2>My Books</h2>
            {loading ? <p>loading...</p> : error ? <p>{error}</p> : myBooks.length === 0 ? (
                <p>No books found</p>
            ) : (
                myBooks.map((book) => <MyBookCard key={book.id} book={book} />
            )
            )}
        </div>
    );
};
export default MyBooksPage;

