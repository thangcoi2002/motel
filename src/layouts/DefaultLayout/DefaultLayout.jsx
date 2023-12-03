import PropTypes from "prop-types";

import Header from "~/layouts/components/Header";
import SideBar from "~/layouts/components/SideBar";

function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="flex">
        <div className="fixed
        bottom-0 
        md:relative
        md:w-[300px]
        w-full">
          <SideBar />
        </div>
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
