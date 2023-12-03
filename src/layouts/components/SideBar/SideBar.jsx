import { useState, useEffect } from "react";
import { CiTimer, CiUser } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";
import { BsSend } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import SideItems from "./SideItems";
import config from "~/config";

function SideBar() {
  const MENU_ITEM = [
    {
      name: "Trang chủ",
      icon: <IoHomeOutline size={24} className="m-4" />,
      to: config.routes.home,
    },
    {
      name: "Trang cá nhân",
      icon: <CiUser size={24} className="m-4 " />,
      to: config.routes.user,
    },
    {
      name: "Phòng yêu thích",
      icon: <FaHeart  size={24} className="m-4 text-rose-500" />,
      to: config.routes.favorite,
    },
    {
      name: "Phòng đã đặt",
      icon: <CiTimer size={24} className="m-4" />,
      to: config.routes.booked,
    },
    {
      name: "Phòng đã đăng",
      icon: <BsSend size={24} className="m-4" />,
      to: config.routes.myRoom,
    },
  ];

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 450) {
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
    <div
      className={`
        flex
        md:inline-block
        w-full
        bg-white
        ${scrolled && "md:fixed md:w-1/5"}`}
    >
      {MENU_ITEM.map((item) => (
        <SideItems key={item.name} data={item} />
      ))}
    </div>
  );
}

export default SideBar;
