import React, { useEffect } from "react";
// "use client";
import gsap from "gsap";
import useStore from "../store/store";

export default function usePageCover() {
  const { pageCover, setPageCover } = useStore();
  useEffect(() => {
    const overlayOne = document.querySelector(".overlay-1");
    const overlayTwo = document.querySelector(".overlay-2");
    const overlayThree = document.querySelector(".overlay-3");
    const text = document.querySelector(".animate-text");
    console.log(overlayThree);
    if (pageCover) {
      gsap.fromTo(
        overlayOne,
        {
          yPercent: "-100",
        },
        {
          yPercent: "0",
          opacity: 1,
        }
      );
      gsap.fromTo(
        overlayTwo,
        {
          yPercent: "100",
        },
        {
          yPercent: "0",
          opacity: 1,
        }
      );
    }

    if (pageCover !== true) {
      gsap.fromTo(
        overlayOne,
        {
          yPercent: "0",
        },
        {
          yPercent: "-100",
          opacity: 0,
        }
      );
      gsap.fromTo(
        overlayTwo,
        {
          yPercent: "0",
        },
        {
          yPercent: "100",
          opacity: 0,
        }
      );
    }
    if (pageCover) {
      gsap.fromTo(
        overlayThree,
        {
          yPercent: 0,
        },
        {
          duration: 1.5,
          yPercent: 100,
          opacity: 0,
        }
      );
      gsap.fromTo(
        text,
        {
          yPercent: 100,
        },
        {
          duration: 1.5,
          yPercent: 0,
        }
      );
    }
  });
}
