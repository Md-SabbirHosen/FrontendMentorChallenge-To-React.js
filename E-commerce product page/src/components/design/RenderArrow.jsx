const RenderArrow = ({ image, sideDirection }) => {
  return (
    <div
      className={`grid place-items-center absolute ${sideDirection}-8   z-10 cursor-pointer w-12 h-12 bg-white p-4 rounded-full md:hidden`}
    >
      <img
        src={image}
        alt={`${sideDirection === "left" ? "Previous" : "Next"} Arrow Icon`}
      />
    </div>
  );
};

export default RenderArrow;
