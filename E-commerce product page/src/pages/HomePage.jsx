import { nextIcon, previousIcon } from "../assets";
const HomePage = () => {
  return (
    <>
      <div className="">
        <div className="md:hidden">
          <img src={previousIcon} alt="" />
        </div>
        <div className=""></div>
        <div className="md:hidden">
          <img src={nextIcon} alt="" />
        </div>
      </div>
      <div className="">right</div>
    </>
  );
};

export default HomePage;
