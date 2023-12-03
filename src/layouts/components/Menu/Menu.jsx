import { useState } from "react";
import { CiMenuFries, CiTimer, CiUser, CiLogout } from "react-icons/ci";
import { BiSolidEdit } from "react-icons/bi";
import { FaUserCircle, FaHeart } from "react-icons/fa";

import MenuItem from "./MenuItem";
import useLoginModal from "~/hooks/useLoginModal";
import useRegisterModal from "~/hooks/useRegisterModal";
import { useNavigate } from "react-router-dom";
import config from "~/config";

function Menu() {
  const currentUser = true;
  const navigate = useNavigate();

  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative ml-6">
      <div
        onClick={toggleOpen}
        className="
        p-4
        md:py-1
        md:px-2
        border-[1px] 
        border-neutral-200 
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
              src="https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-6/367499121_818763516616918_1251777448852488623_n.jpg?stp=cp6_dst-jpg&_nc_cat=100&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeE4TCPe5Pl5iab5GkebOQxRNGwCY2WyHQQ0bAJjZbIdBCeiWoqQsq6mnJd5DrlabEBzYTqAFh46xyO_WbI-65pw&_nc_ohc=wSO4wuDUA6AAX99DCAl&_nc_ht=scontent.fhan17-1.fna&oh=00_AfBClmInhJkKsbPmZkkMrBTI67Dqj-uuiJif7SmizRiXAA&oe=656F4CC9"
              alt="avatar"
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
          right-0
        rounded-xl
        shadow-md
        w-[40vw]
        md:w-[14vw]
      bg-white
        overflow-hidden
        text-sm"
        >
          <div className="flex flex-col cursor-pointer mt-5">
            <>
              {currentUser ? (
                <>
                  <MenuItem
                    label="Thông tin cá nhân"
                    icon={<CiUser size={18} className="m-4" />}
                    onClick={() => navigate(config.routes.user)}
                  />
                  <MenuItem
                    label="Phòng trọ đã đặt"
                    icon={<CiTimer size={18} className="m-4" />}
                    onClick={() => navigate(config.routes.booked)}
                  />
                  <MenuItem
                    label="Phòng trọ yêu thích"
                    icon={<FaHeart size={18} className="m-4 text-rose-500"/>}
                    onClick={() => navigate(config.routes.favorite)}
                  />
                  <MenuItem
                    label="Đăng xuất"
                    icon={<CiLogout size={18} className="m-4" />}
                    onClick={() => {}}
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
