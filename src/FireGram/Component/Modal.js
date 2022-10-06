import React from "react";
import { motion } from "framer-motion";

function Modal({ selected, setselected }) {
  const closeHandle = (e) => {
    if (e.target.classList.contains("backdrop")) setselected(null);
  };

  return (
    <motion.div
      className="backdrop"
      onClick={closeHandle}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.img
        src={selected}
        alt="enlarged pic "
        initial={{ y: "-100hv" }}
        animate={{ y: 0 }}
      />
    </motion.div>
  );
}

export default Modal;
