import { useEffect, useState } from "react";
import { nextIcon, previousIcon } from "../assets";
import RenderArrow from "./design/RenderArrow";

const Carousel = ({ children: imageSlides }) => {
  const [imageIndex, setImageIndex] = useState(0);

  const goBackHandler = () => {
    setImageIndex((imageIndex) =>
      imageIndex === 0 ? imageSlides.length - 1 : imageIndex - 1
    );
  };

  const goForwardHandler = () => {
    setImageIndex((imageIndex) =>
      imageIndex === imageSlides.length - 1 ? 0 : imageIndex + 1
    );
  };

  useEffect(() => {
    const slideInterval = setInterval(goForwardHandler, 4000);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="relative -mx-8 overflow-hidden">
      <div
        className="flex transition-transform ease-out  duration-500"
        style={{ transform: `translateX(-${imageIndex * 100}%)` }}
      >
        {imageSlides}
      </div>
      <RenderArrow
        image={previousIcon}
        sideDirection="left"
        onClick={goBackHandler}
      />
      <RenderArrow
        image={nextIcon}
        sideDirection="right"
        onClick={goForwardHandler}
      />
    </div>
  );
};

export default Carousel;
