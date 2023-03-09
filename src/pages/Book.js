import { useOutletContext, useParams } from "react-router-dom";

const Book = () => {
    const {bookId} = useParams();
    const {hello} = useOutletContext();

    return ( 
    <>
    <h1>Book {bookId}</h1>
    <h3> Hello {hello}</h3>
    </>
    );
}
 
export default Book;