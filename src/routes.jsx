import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";

const routes = [
  {
    path: "/",
    index: true,
    element: <Home />,
  },
  {
    path: "/contact",
    index: true,
    element: <Contact />,
  },
  {
    path: "/register",
    index: true,
    element: <Register />,
  },
];

export default routes;
