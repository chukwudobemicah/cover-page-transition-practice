import React from "react";
import { useEffect } from "react";
import { gsap } from "gsap";
// import Overlay from "./Overlay";
import Overlay from "./Overlay";

const Navigation = ({ children }) => {
  // useEffect(() => {
  //   gsap.from("body", { opacity: 1, duration: 5 });
  // }, []);

  return (
    <div className="w-full">
      {children}
      <Overlay />
    </div>
  );
};

export default Navigation;
