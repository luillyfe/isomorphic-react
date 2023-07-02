"use client";
import React, { useEffect, useState } from "react";

// Thanks to, https://dev.to/reedbarger/how-to-create-a-custom-usepagebottom-react-hook-ki0
// TODO: Remove Math.trunc
export default function usePageBottom() {
  const [isAtPageBottom, setIsAtPageBottom] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrollPosition =
        window.innerHeight + document.documentElement.scrollTop;
      const diff = Math.abs(
        Math.trunc(scrollPosition) - document.documentElement.offsetHeight
      );

      setIsAtPageBottom(diff <= 20);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return isAtPageBottom;
}
