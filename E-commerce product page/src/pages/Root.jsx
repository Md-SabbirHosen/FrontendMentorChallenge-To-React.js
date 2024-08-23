import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

const RootLayout = () => {
  return (
    <>
      <MainNavigation />
      <main className="container flex flex-col gap-4 md:flex-row md:px-12 md:py-20">
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
