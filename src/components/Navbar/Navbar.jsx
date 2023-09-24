import { useCycle } from "framer-motion";
import { ToggleMenuIcon } from "./ToggleMenuButton";
import { motion } from "framer-motion";
import BtnPrimary from "../Button/BtnPrimary";
import { useIsMobileView } from "../../utils/useIsMobileView";
import { Link, useNavigate } from "react-router-dom";

const navItems = ["Timeline", "Overview", "FAQs", "Contact"];
const variants = {
  open: {
    y: 0,
    // x: 0,
    display: "block",

    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    // x: 100,
    display: "none",
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const Navbar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const mobile = useIsMobileView();

  const navigate = useNavigate();
  return (
    <div className="navbar container">
      <div className="navbar-brand" onClick={() => navigate("/")}>
        get<span className="">Linked</span>
      </div>
      {/* {mobile ? ( */}
      <motion.nav
        initial={false}
        animate={mobile ? (isOpen ? "open" : "closed") : "open"}
        // variants={{ open: { x: 0 }, closed: { x: 100 } }}
        custom={300}
      >
        <motion.ul
          variants={{
            open: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.07, delayChildren: 0.2 },
            },
            closed: {
              opacity: 0,
              y: 50,
              transition: { staggerChildren: 0.05, staggerDirection: -1 },
            },
          }}
        >
          {navItems.map((item) => (
            <motion.li
              variants={variants}
              key={item}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {item === "Contact" ? <Link to={`/${item}`}>{item}</Link> : item}
            </motion.li>
          ))}
          <motion.li
            variants={variants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <BtnPrimary
              text={"Register"}
              onClick={() => navigate("/register")}
            />
          </motion.li>
        </motion.ul>
        <ToggleMenuIcon toggle={() => toggleOpen()} />
      </motion.nav>
    </div>
  );
};

export default Navbar;
