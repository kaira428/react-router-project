import { Link, Outlet, useParams, useSearchParams } from "react-router-dom";

const BookLayout = () => {
  const { bookId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams({n: 3})

  const number = searchParams.get("n");

  return (
    <>
      <Link to="/books/1">Book 1</Link>
      <br />
      <Link to="/books/2">Book 2</Link>
      <br />
      <Link to={`/books/${number}`}>Book {number}</Link>
      <br />
      <Link to="/books/new">Create New Book</Link>
      <Outlet context={{ hello: "World", book: bookId }} />
      <input
        type="number"
        value={number}
        onChange={(e) => setSearchParams({n: e.target.value})}
      />
    </>
  );
};

export default BookLayout;
