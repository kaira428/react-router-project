import { useParams } from "react-router-dom";

const Book = () => {
    const {bookId} = useParams();
    console.log(bookId)

    return ( <h1>Book {bookId}</h1> );
}
 
export default Book;