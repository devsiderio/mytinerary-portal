import React, { useState, useEffect } from "react";
import { Link as Anchor } from "react-router-dom";

function CardCity({ src, alt, text, id }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const card = document.getElementById(`card-${id}`);
      if (card) {
        const rect = card.getBoundingClientRect();
        setIsVisible(rect.top < window.innerHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [id]);

  return (
    <Anchor
      to={"/city/" + id}
      id={`card-${id}`}
      className={`transition-transform transform ${
        isVisible ? "translate-y-0" : "translate-y-16"
      } w-5/5 md:w-2/5 lg:w-1/4 xl:w-1/5 flex flex-col items-center p-2 m-1 rounded-lg border border-gray-300 shadow-md bg-transparent backdrop-blur-sm`}
    >
      <img src={src} alt={alt} className="rounded-lg" />
      <p className="text-2xl mt-1 font-semibold text-indigo-600">{text}</p>
    </Anchor>
  );
}

export default CardCity;
