import LOGO from "~/assets/Images/LOGO.png";

function Logo() {
  return (
    <a href='/'>
        <img
          src={LOGO}
          alt="logo"
          className="w-[40px] h-[40px] hidden md:block cursor-pointer"
        />
    </a>
  );
}

export default Logo;
