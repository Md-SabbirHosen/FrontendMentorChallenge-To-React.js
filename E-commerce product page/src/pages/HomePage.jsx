import { useEffect, useState } from "react";
import Carousel from "../components/Carousel";
import Button from "../components/design/Button";
import { images } from "../constants/index";
import { plusIcon, minusIcon } from "../assets";

const HomePage = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [fade, setFade] = useState(false);
  const [amount, setAmount] = useState(0);

  const unitIncreaseHandler = () => {
    setAmount((prev) => prev + 1);
  };

  const unitDecreaseHandler = () => {
    if (amount === 0) return;
    setAmount((prev) => prev - 1);
  };

  useEffect(() => {
    setFade(false);
    const timeoutId = setTimeout(() => {
      setFade(true);
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [imageIndex]);

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
      <div className="relative flex basis-1/2  md:flex-col">
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
          <div className="w-[400px] h-[400px] flex gap-20 md:flex-col ">
            <div className=" bg-neutral-3/20 rounded-xl">
              <div
                className={`cursor-pointer  transition-opacity duration-75 ${fade ? "opacity-100 " : "opacity-0 "}  `}
              >
                <img
                  className="rounded-xl"
                  src={images[imageIndex].largeImage}
                  alt=""
                />
              </div>
            </div>
            <div className="flex justify-center gap-4 pb-20">
              {images.map((image) => (
                <div
                  className="w-20 h-20 rounded-lg bg-primary-1 transition-all border-primary-1 hover:border-2 hover:opacity-60 "
                  onClick={() => {
                    setImageIndex(image.id);
                  }}
                  key={image.id}
                >
                  <img
                    className="rounded-lg cursor-pointer "
                    src={image.smallImage}
                    alt={`Thumbnail-image-${image.id}`}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-col py-6 basis-1/2 ">
        <p className="font-bold uppercase tracking-widest text-sm mb-6">
          Sneaker Company
        </p>
        <h1 className="text-3xl text-black font-bold  md:text-4xl">
          Fall Limited Edition <br /> Sneakers
        </h1>
        <p className="text-lg my-6 md:my-10">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.
        </p>
        <div className="flex justify-between md:flex-col">
          <div className="flex items-center">
            <span className="text-3xl font-bold text-black">$125.00</span>
            <span className="bg-black text-white font-bold ml-4  py-1 px-2 rounded-lg">
              50%
            </span>
          </div>
          <p className="line-through font-bold md:mt-2">$250.00</p>
        </div>
        <div className="flex flex-col space-y-6  mt-8 md:flex-row md:space-x-4 md:space-y-0 ">
          <div className="flex justify-between items-center p-3   rounded-lg space-x-8 bg-neutral-3/20 md:p-2">
            <button
              onClick={unitDecreaseHandler}
              className="p-2 hover:opacity-50"
            >
              <img src={minusIcon} alt="Minus Icon" />
            </button>
            <p className="text-black font-bold w-2">{amount}</p>
            <button
              onClick={unitIncreaseHandler}
              className="p-2  hover:opacity-50"
            >
              <img src={plusIcon} alt="Plus Icon" />
            </button>
          </div>
          <Button className="hover:opacity-50" cartIcon="true">
            Add to cart
          </Button>
        </div>
      </div>
    </>
  );
};

export default HomePage;
