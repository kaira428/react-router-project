import { Link, Outlet, useParams } from "react-router-dom";

const BookLayout = () => {
    const {bookId} = useParams()
  return (
    <>
      <Link to="/books/1">Book 1</Link>
      <br />
      <Link to="/books/2">Book 2</Link>
      <br />
      <Link to="/books/new">Create New Book</Link>
      <Outlet context={{hello: "World", book: bookId}}/>
    </>    
  );
};

export default BookLayout;
