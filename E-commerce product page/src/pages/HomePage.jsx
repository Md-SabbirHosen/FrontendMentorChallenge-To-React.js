import Carousel from "../components/Carousel";
import { images } from "../constants";

const HomePage = () => {
  return (
    <>
      <div className="w-screen md:w-[400px] md:h-[400px] ">
        <Carousel>
          {images.map((image) => (
            <img
              key={image.id}
              src={image.largeImage}
              alt={`Product image-${image.id}`}
            />
          ))}
        </Carousel>
      </div>
      <div className="">right</div>
    </>
  );
};

export default HomePage;
