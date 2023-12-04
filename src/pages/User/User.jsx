import CardMotel from "~/components/CardMotel";
import EmptyClient from "~/components/EmptyClient";

function User() {
  const currentUser = window.localStorage.getItem("token");

  if (!currentUser) {
    return (
      <EmptyClient title="Chưa đăng nhập" description="Vui lòng đăng nhập" />
    );
  }

  return (
    <div className="m-10">
      <div
        className="flex
        flex-col
        justify-center
        items-center 
        md:items-start
        md:justify-start
        md:flex-row
        relative 
        border-b 
        border-b-gray-400 
        pb-11 "
      >
        <img
          src="https://res.cloudinary.com/dd6sxqlso/image/upload/v1699341107/dormitory/cgws4mqrwji923xyc4jm.jpg"
          alt="avatar"
          className="
          w-3/4
          md:w-[280px]
          md:h-[280px]
          rounded-full
          "
        />
        <div className="flex flex-col ml-10 mt-12">
          <div className="text-5xl font-semibold mb-4">Ngọc thắng</div>
          <div className="text-xl font-medium opacity-80">
            Thường Tín , Hà Nội
          </div>
        </div>
      </div>
      <div className="py-8 px-4">
        <div className="text-xl font-medium">Nhà trọ đã đăng</div>
        <div className="mt-10">
          <CardMotel />
        </div>
      </div>
    </div>
  );
}

export default User;
