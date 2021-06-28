import { ArrowUpward } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import "./ScrollToTop.css";
function ScrollToTop() {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    document.addEventListener("scroll", function (e) {
      if (window.pageYOffset > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    });
  });
  function handleScroll() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return visible ? (
    <div className="scroll-to-top" onClick={handleScroll}>
      <ArrowUpward />
    </div>
  ) : (
    ""
  );
}

export default ScrollToTop;
