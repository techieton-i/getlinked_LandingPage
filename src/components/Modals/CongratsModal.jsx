/* eslint-disable react/prop-types */
import congratsImg from "../../assets/images/congratulation.png";
import BtnPrimary from "../Button/BtnPrimary";
import { motion } from "framer-motion";

const CongratsModal = ({ cancel }) => {
  return (
    <motion.div>
      <div className="overlay" onClick={cancel}></div>
      <motion.div
        className="modal"
        initial={{ opacity: 0, transform: "translate(-50%, -30%)" }}
        animate={{ opacity: 1, transform: "translate(-50%, -50%)" }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <img src={congratsImg} />
        </div>

        <h3>Congratulations you have successfully Registered!</h3>
        <p>
          Yes, it was easy and you did it! check your mail box for next step
        </p>
        <BtnPrimary text={"Back"} onClick={cancel} />
      </motion.div>
    </motion.div>
  );
};

export default CongratsModal;
