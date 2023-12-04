import EmptyClient from "~/components/EmptyClient";
import ListBooked from "./ListBooked";

function Booked() {
  const currentUser = window.localStorage.getItem("token");

  if (!currentUser) {
    return (
      <EmptyClient title="Chưa đăng nhập" description="Vui lòng đăng nhập" />
    );
  }

  return (
    <div className="mx-4 mt-10">
      <p className="text-2xl mb-10">Phòng trọ đã đặt</p>
      <ListBooked />
    </div>
  );
}

export default Booked;
