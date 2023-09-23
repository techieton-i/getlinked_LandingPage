import { RouterProvider, createBrowserRouter } from "react-router-dom";
import routes from "./routes";
import "./styles/index.scss";
import Navbar from "./components/Navbar/Navbar";
import "./assets/font/css/_clash-display.scss";

const router = createBrowserRouter(routes);
function App() {
  return (
    <div>
      <Navbar />
      <RouterProvider router={router}>App</RouterProvider>
    </div>
  );
}

export default App;
