"use client";

import React from "react";
import classNames from "classnames";
import { motion } from "framer-motion";

const Button = ({
  text,
  bgColor = "bg-primary", // Use  global CSS class
  textColor = "text-white",
  hoverBgColor = "hover:bg-opacity-80",
  onClick,
  className = "",
}) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={classNames("px-6 py-3 rounded-full text-sm  tracking-wide transition duration-300 ", bgColor, textColor, hoverBgColor, className)}
    >
      {text}
    </motion.button>
  );
};

export default Button;
