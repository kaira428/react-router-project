import { Link, NavLink, Route, Routes, useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import "./App.css";
import BookRoutes from "./BookRoutes";
import './styles.css'

function App() {
  // let element = useRoutes([
  //   {
  //     path: "/",
  //     element: <Home />,
  //   },
  //   {
  //     path: "*",
  //     element: <NotFound />,
  //   },
  // ]);
  return (
    <>
      <Routes location="/">
        <Route path="/" element={<h1>Extra Info</h1>} />
      </Routes>
      <nav>
        <ul>
          <li>
            <NavLink to="/" replace>Home</NavLink>
          </li>
          <li>
            <NavLink end to="/books">Book List</NavLink>
          </li>
        </ul>
      </nav>

      {/* {element} */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books/*" element={<BookRoutes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
