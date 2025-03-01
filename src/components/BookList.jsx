import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../redux/actions/booksActions";
import BookCard from "../components/BookCard";

const BookList = () => {
    const dispatch = useDispatch();
    const { books, loading, error } = useSelector((state) => state.books);
    useEffect(() => {
        dispatch(fetchBooks());
    }, [dispatch]);
    return (
        <div>
            <h2>Book List</h2>
            {loading ? <p>loading.......</p> : error ? <p>{error}</p> : books.map(book =>
                <BookCard key={book.id} book={book} />
            )}
        </div>
    );
};
export  default BookList;