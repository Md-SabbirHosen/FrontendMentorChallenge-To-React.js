const Backdrop = (props) => {
  const backdropHandler = () => {
    props.onToggleNavigation();
  };
  return (
    <div
      className="fixed top-0 left-0 w-full h-full z-10 bg-black/65 "
      onClick={backdropHandler}
    />
  );
};

export default Backdrop;
