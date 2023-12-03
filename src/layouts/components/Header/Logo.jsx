import { Link } from "react-router-dom";
import LOGO from "~/assets/Images/LOGO.png";

function Logo() {
  return (
    <Link to='/'>
        <img
          src={LOGO}
          alt="logo"
          className="w-[40px] h-[40px] hidden md:block cursor-pointer"
        />
    </Link>
  );
}

export default Logo;
