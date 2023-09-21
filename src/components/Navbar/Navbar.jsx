import { useCycle } from "framer-motion";
import { ToggleMenuIcon } from "./ToggleMenuButton";
import { motion } from "framer-motion";
import BtnPrimary from "../Button/BtnPrimary";

const navItems = ["Timeline", "Overview", "FAQs", "Contact"];
const variants = {
  open: {
    y: 0,
    // x: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    // x: 100,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const Navbar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  return (
    <div className="navbar container">
      <div className="navbar-brand">
        get<span className="">Linked</span>
      </div>
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
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
              {item}
            </motion.li>
          ))}
          <motion.li
            variants={variants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <BtnPrimary text={"Register"} />
          </motion.li>
        </motion.ul>
        <ToggleMenuIcon toggle={() => toggleOpen()} />
      </motion.nav>
      {/* <motion.div animate={isOpen ? "open" : "closed"}>
        <ToggleMenuIcon toggle={() => toggleOpen()} />
      </motion.div> */}
    </div>
  );
};

export default Navbar;
