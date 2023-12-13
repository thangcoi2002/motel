import { useState, useEffect } from "react";
import { CiTimer, CiUser, CiHeart } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";
import { FiSend } from "react-icons/fi";
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
      to: config.routes.profile,
    },
    {
      name: "Phòng yêu thích",
      icon: <CiHeart size={24} className="m-4" />,
      to: config.routes.favorite,
    },
    {
      name: "Phòng đã đặt",
      icon: <CiTimer size={24} className="m-4" />,
      to: config.routes.booked,
    },
    {
      name: "Cho thuê phòng",
      icon: <FiSend size={24} className="m-4" />,
      to: config.routes.postMotel,
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
