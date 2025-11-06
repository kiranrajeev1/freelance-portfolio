import React from "react";
import { motion } from "framer-motion";

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="2.5"
    className="stroke-current"
    strokeLinecap="round"
    {...props}
  />
);

export const MenuButton = ({ isOpen, onClick }) => (
  <button onClick={onClick} className="p-2 focus:outline-none">
    <svg width="24" height="24" viewBox="0 0 24 24">
      {/* Top line */}
      <Path
        variants={{
          closed: { d: "M 3 6 L 21 6" },
          open: { d: "M 5 19 L 19 5" },
        }}
        initial="closed"                // ✅ Added this line
        animate={isOpen ? "open" : "closed"}
        transition={{ duration: 0.3 }}
      />

      {/* Middle line */}
      <motion.path
        fill="transparent"
        strokeWidth="2.5"
        className="stroke-current"
        strokeLinecap="round"
        d="M 3 12 L 21 12"
        initial={false}
        animate={{ opacity: isOpen ? 0 : 1 }}
        transition={{ duration: 0.2 }}
      />

      {/* Bottom line */}
      <Path
        variants={{
          closed: { d: "M 3 18 L 21 18" },
          open: { d: "M 5 5 L 19 19" },
        }}
        initial="closed"                // ✅ Added this line
        animate={isOpen ? "open" : "closed"}
        transition={{ duration: 0.3 }}
      />
    </svg>
  </button>
);
