import { useEffect, useState } from "react";
import Carousel from "../components/Carousel";
import { images } from "../constants";

const HomePage = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateMedia = () => {
      setIsMobile(window.innerWidth < 768);
    };
    updateMedia();
    window.addEventListener("resize", updateMedia);
    return () => {
      window.removeEventListener("resize", updateMedia);
    };
  }, []);

  return (
    <>
      <div className="w-screen flex md:basis-1/2  md:flex-col  ">
        {isMobile && (
          <Carousel>
            {images.map((image) => (
              <img
                key={image.id}
                src={image.largeImage}
                alt={`Product image-${image.id}`}
              />
            ))}
          </Carousel>
        )}
        {!isMobile && (
          <div className="w-[400px] h-[400px] ">
            <img className="rounded-xl" src={images[0].largeImage} alt="" />
          </div>
        )}
      </div>

      <div className="flex flex-col p-6 md:basis-1/2">
        <p>Sneaker Company</p>
        <h1>
          Fall Limited Edition <br /> Sneaker
        </h1>
        <p className="">
          These low-profile sneakers are your perfect casual wear <br />
          companion. Featuring a durable rubber outer sole, they'll <br />
          withstand everything the weather can offer.
        </p>
        <div></div>
      </div>
    </>
  );
};

export default HomePage;
