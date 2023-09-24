import LandingPageShell from "./components/LandingPageShell";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";

const routes = [
  {
    path: "/",
    element: <LandingPageShell />,
    children: [
      {
        // path: "/",
        index: true,
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
];

export default routes;
