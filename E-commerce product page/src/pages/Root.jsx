import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

const RootLayout = () => {
  return (
    <>
      <MainNavigation />
      <main className="container flex justify-between flex-col md:flex-row md:px-16 md:py-20  ">
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
