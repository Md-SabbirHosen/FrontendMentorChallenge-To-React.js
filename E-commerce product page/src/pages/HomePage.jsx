import { nextIcon, previousIcon } from "../assets";
import RenderArrow from "../components/design/RenderArrow";
import { images } from "../constants";

const HomePage = () => {
  const displayImage = images[0].largeImage;

  return (
    <>
      <div className="relative w-screen flex  items-center  md:flex-col">
        <RenderArrow image={previousIcon} sideDirection="left" />
        <div className="w-full h-auto">
          <img
            className="object-cover md:rounded-xl md:w-[400px] md:h-[400px]"
            src={displayImage}
            alt="Display Large Image"
          />
        </div>
        <RenderArrow image={nextIcon} sideDirection="right" />
      </div>
      <div className="">right</div>
    </>
  );
};

export default HomePage;
