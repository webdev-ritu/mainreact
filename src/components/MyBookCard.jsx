import { useDispatch } from "react-redux";
//import {updateBookStatus} from "../redux/actions/booksActions";


const MyBookCard = ({book}) => {
    const dispatch = useDispatch();
    const handleStatusChange = (e)=>{
        dispatch(updateBookStatus(book.id, e.target.value));
    };
    const handleRatingChange = (e)=>{
        dispatch(updateBookRating(book.id,Number( e.target.value)));

    };
    return(
        <div className="my-book">
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <label>Staus:</label>
            <select value={book.status} onChange={handleStatusChange}>
                <option value="unread">Unread</option>
                <option value="reading">Reading</option>
                <option value="read">Read</option>
            </select>
            <label>Rating:</label>
            <select value= {book.rating} onChange={handleRatingChange}>
                {[ ...Array(5)].map((_,index)=>(
                    <option key= {index+1} value ={index +1}>{index+1}star</option>
                ))}
            </select>
        </div>
    );
};
export default MyBookCard;
