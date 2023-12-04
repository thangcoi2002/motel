import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

import Header from "~/layouts/components/Header";
import SideBar from "~/layouts/components/SideBar";

function DefaultLayout({ children }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 400) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Header />
      <div className="flex">
        <div
          className="fixed
        z-10
        w-full
        bottom-0 
        md:relative
        md:w-1/4
        mr-4
        "
        >
          <SideBar />
        </div>
        <div
          className="
          w-full 
          mb-[7rem]"
        >
          {children}
        </div>
        <IoIosArrowUp
          size={25}
          className={`hidden h-[50px] w-[50px] p-5 bottom-5 right-5 rounded-full border border-purple-400 hover:bg-purple-500 cursor-pointer ${
            scrolled && "md:fixed md:block"
          }`}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        />
      </div>
    </div>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
