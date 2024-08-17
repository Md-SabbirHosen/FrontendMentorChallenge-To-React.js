import MainNavigation from "../components/MainNavigation";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <MainNavigation />
      <main className="container flex justify-between items-center flex-col md:flex-row ">
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
