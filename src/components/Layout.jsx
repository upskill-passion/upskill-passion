import Header from "./Header";
import Footer from "./Footer";

import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="App">
      <div className="bg-[#3b5998] sm:px-16 px-6 flex justify-center items-center">
        <div className="xl:max-w-[1280px] w-full">
          <Header />
        </div>
      </div>
      <div className="flex justify-center items-start">
        <div className="w-full">
          <Outlet />
          <Footer />
        </div>
      </div>
    </div>
  );
};
export default Layout;
