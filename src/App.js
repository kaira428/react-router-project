import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
// import BookList from "./pages/BookList";
import Book from "./pages/Book";
import BookList from "./pages/BookList";
import NewBook from "./pages/NewBook";
import NotFound from "./pages/NotFound";
import BookLayout from "./BookLayout";
import "./App.css";

function App() {
  return (
    <>
    <Routes location='/'>
      <Route path='/' element={<h1>Extra Info</h1>} />
    </Routes>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/books">Book List</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BookLayout />}>
          <Route index element={<BookList />} />
          <Route path=":bookId" element={<Book />} />
          <Route path="new" element={<NewBook />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
