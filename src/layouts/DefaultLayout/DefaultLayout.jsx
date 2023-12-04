import PropTypes from "prop-types";

import Header from "~/layouts/components/Header";
import SideBar from "~/layouts/components/SideBar";

function DefaultLayout({ children }) {
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
      </div>
    </div>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
