import { useOutletContext, useParams } from "react-router-dom";

const Book = () => {
    const {bookId} = useParams();
    const { hello, book } = useOutletContext();
    
    return ( 
    <>
    <h1>Book {bookId}</h1>
    <h3>Hello {hello}, I am {book} </h3>
    </>
    );
}
 
export default Book;