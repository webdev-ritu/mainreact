import { useSelector, useDispatch } from "react-redux";
import { addBookToUserList} from "../redux/actions/booksActions";

const BookCard = ({ book }) => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.user);
    const handleAddToMyBooks = () => {
       if (!user){
              alert("please login to add books");
              return;
       }
         dispatch(addBookToUserList(user.uid, { ...book, status: "unread", rating: 0 }));
    };

    return (
        <div>
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <button onClick={handleAddToMyBooks}>Add to my books</button>
        </div>
    );
};
export default BookCard;