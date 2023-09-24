/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
const BtnPrimary = ({ text, className, onClick }) => {
  return (
    <motion.button
      className={`${className} btn-primary`}
      onClick={onClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {text}
    </motion.button>
  );
};

export default BtnPrimary;
