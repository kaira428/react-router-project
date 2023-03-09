import { Route, Routes } from "react-router-dom";
import BookLayout from "./BookLayout";
import Book from "./pages/Book";
import BookList from "./pages/BookList";
import NewBook from "./pages/NewBook";

const BookRoutes = () => {
  return (
    <>
      <Routes>
        <Route element={<BookLayout />}>
          <Route index element={<BookList />} />
          <Route path=":bookId" element={<Book />} />
          <Route path="new" element={<NewBook />} />
        </Route>
      </Routes>
    </>
  );
};

export default BookRoutes;
