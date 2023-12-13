import { useEffect, useState } from "react";
import {
  CiMenuFries,
  CiHeart,
  CiTimer,
  CiUser,
  CiLogout,
} from "react-icons/ci";
import { BiSolidEdit } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import config from "~/config";
import MenuItem from "./MenuItem";
import useLoginModal from "~/hooks/useLoginModal";
import useRegisterModal from "~/hooks/useRegisterModal";
import * as authService from "~/services/authService";

function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState({});
  const [currentUser, setCurrentUser] = useState(false);

  const navigate = useNavigate();
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token) {
      setCurrentUser(true);
      authService
        .getCurrentUser()
        .then((user) => {
          setData(user.data);
        })
        .catch((err) => console.log(err));
    } else setCurrentUser(false);
  }, []);

  return (
    <div className="relative ml-6">
      <div
        onClick={toggleOpen}
        className="
        p-4
        md:py-1
        md:px-2
        flex 
        flex-row 
        items-center 
        gap-3 
        rounded-full 
        cursor-pointer 
        hover:shadow-md 
        select-none
        transition
      "
      >
        <CiMenuFries size={20} className="block md:hidden" />
        <div className="hidden md:block">
          {currentUser ? (
            <img
              src={data.imageUrl}
              alt={data.fullName}
              className="rounded-full h-[36px] w-[36px]"
            />
          ) : (
            <FaUserCircle size={24} />
          )}
        </div>
      </div>
      {isOpen && (
        <div
          className="
          absolute
          z-10
          right-0
        rounded-xl
        shadow-md
        w-[40vw]
        md:w-[20vw]
        lg:w-[14vw]
      bg-white
        overflow-hidden
        text-sm
        "
        >
          <div className="flex flex-col cursor-pointer mt-5">
            <>
              {currentUser ? (
                <>
                  <MenuItem
                    label="Thông tin cá nhân"
                    icon={<CiUser size={18} className="m-4" />}
                    onClick={() => navigate(config.routes.editProfile)}
                  />
                  <MenuItem
                    label="Phòng trọ đã đặt"
                    icon={<CiTimer size={18} className="m-4" />}
                    onClick={() => navigate(config.routes.booked)}
                  />
                  <MenuItem
                    label="Phòng trọ yêu thích"
                    icon={<CiHeart size={18} className="m-4" />}
                    onClick={() => navigate(config.routes.favorite)}
                  />
                  <MenuItem
                    label="Đăng xuất"
                    icon={<CiLogout size={18} className="m-4" />}
                    onClick={() => {
                      localStorage.removeItem("token");
                      location.reload();
                    }}
                  />
                </>
              ) : (
                <>
                  <MenuItem
                    label="Đăng nhập"
                    icon={<CiLogout size={16} className="m-4" />}
                    onClick={() => loginModal.onOpen()}
                  />
                  <MenuItem
                    label="Đăng ký"
                    icon={<BiSolidEdit size={16} className="m-4" />}
                    onClick={() => registerModal.onOpen()}
                  />
                </>
              )}
            </>
          </div>
        </div>
      )}
    </div>
  );
}

export default Menu;
