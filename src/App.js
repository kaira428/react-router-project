import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import BookList from "./pages/BookList";
import NewBook from "./pages/NewBook";
import "./App.css";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/books">Book List</Link>
          </li>
          <li>
            <Link to="/newbook">New Book</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BookList />} />
        <Route path="/newbook" element={<NewBook />} />
      </Routes>
    </>
  );
}

export default App;
