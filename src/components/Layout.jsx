import Header from "./Header";
import Footer from "./Footer";

import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="App">
      <div className="w-full bg-[#3b5998] sm:px-16 px-6">
        <Header />
      </div>
      <div className="flex flex-col w-full justify-center items-start">
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};
export default Layout;
