import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";

const LandingPageShell = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default LandingPageShell;
