import {
  Link,
  NavLink,
  Route,
  Routes,
  useLocation,
  useRoutes,
} from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import "./App.css";
import BookRoutes from "./BookRoutes";
import "./styles.css";

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

  const location = useLocation();
  console.log(location);

  return (
    <>
      <Routes location="/">
        <Route path="/" element={<h1>Extra Info</h1>} />
      </Routes>
      <nav>
        <ul>
          <li>
            <NavLink to="/" state="hello">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink end to="/books">
              Book List
            </NavLink>
          </li>
        </ul>
      </nav>
      {location.state}
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
