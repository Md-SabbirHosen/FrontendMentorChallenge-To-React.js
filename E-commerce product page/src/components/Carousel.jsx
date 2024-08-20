import { useState } from "react";
import { nextIcon, previousIcon } from "../assets";
import RenderArrow from "./design/RenderArrow";

const Carousel = (props) => {
  const [imageIndex, setImageIndex] = useState(0);

  const goBackHandler = () => {
    return imageIndex === 0
      ? setImageIndex(0)
      : setImageIndex((prevIndex) => prevIndex - 1);
  };

  const goForwardHandler = () => {
    return imageIndex === props.children.length - 1
      ? setImageIndex(props.children.length - 1)
      : setImageIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <div className="relative">
      <div
        className="flex transition-transform ease-out  duration-500"
        style={{ transform: `translateX(-${imageIndex * 100}%)` }}
      >
        {props.children}
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
