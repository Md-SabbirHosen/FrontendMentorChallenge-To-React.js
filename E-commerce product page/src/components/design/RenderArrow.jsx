const RenderArrow = ({ image, sideDirection, onClick }) => {
  return (
    <div
      className={`flex items-center  cursor-pointer w-12  h-12 bg-white absolute top-1/2 ${sideDirection === "left" ? "left-4" : "right-4"} z-20  p-4 rounded-full md:hidden`}
      onClick={onClick}
    >
      <img
        src={image}
        alt={`${sideDirection === "left" ? "Previous" : "Next"} Arrow Icon`}
      />
    </div>
  );
};

export default RenderArrow;
