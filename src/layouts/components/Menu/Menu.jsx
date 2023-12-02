
import { useState } from "react";
import MenuItem from "./MenuItem";
import { MenuIcon } from "~/components/Icons";

function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
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
        <MenuIcon className="w-[20px] h-[20px] block md:hidden" />
        <div className="hidden md:block">
          <img
            src="https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-6/367499121_818763516616918_1251777448852488623_n.jpg?stp=cp6_dst-jpg&_nc_cat=100&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeE4TCPe5Pl5iab5GkebOQxRNGwCY2WyHQQ0bAJjZbIdBCeiWoqQsq6mnJd5DrlabEBzYTqAFh46xyO_WbI-65pw&_nc_ohc=wSO4wuDUA6AAX99DCAl&_nc_ht=scontent.fhan17-1.fna&oh=00_AfBClmInhJkKsbPmZkkMrBTI67Dqj-uuiJif7SmizRiXAA&oe=656F4CC9"
            alt="avatar"
            className="rounded-full h-[36px] w-[36px]"
          />
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
              <MenuItem label="Thông tin cá nhân" onClick={() => {}} />
              <MenuItem label="Phòng trọ đã đặt" onClick={() => {}} />
              <MenuItem label="Phòng trọ yêu thích" onClick={() => {}} />
              <MenuItem label="Đăng xuất" onClick={() => {}} />
            </>
          </div>
        </div>
      )}
    </div>
  );
}

export default Menu;
