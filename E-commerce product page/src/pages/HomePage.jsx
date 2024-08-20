import { useState } from "react";
import { nextIcon, previousIcon } from "../assets";
import RenderArrow from "../components/design/RenderArrow";
import { images } from "../constants";
import Carousel from "../components/Carousel";

const HomePage = () => {
  // const [imageIndex, setImageIndex] = useState(0);

  // const displayImage = images[imageIndex].largeImage;

  // const goBackHandler = () => {
  //   return imageIndex === 0
  //     ? setImageIndex(0)
  //     : setImageIndex((prevIndex) => prevIndex - 1);
  // };

  // const goForwardHandler = () => {
  //   return imageIndex === images.length - 1
  //     ? setImageIndex(images.length - 1)
  //     : setImageIndex((prevIndex) => prevIndex + 1);
  // };

  return (
    <>
      {/* <div className="relative w-screen flex  md:flex-col">
        <div className="w-full md:w-[400px] h-auto">
          <img
            className="object-cover md:rounded-xl"
            src={displayImage}
            alt="Display Large Image"
          />
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
      </div> */}
      <Carousel>
        {images.map((image) => (
          <img src={image} alt={`Product image-${image.id}`} />
        ))}
      </Carousel>
      <div className="">right</div>
    </>
  );
};

export default HomePage;
