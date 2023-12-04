import CardMotel from "~/components/CardMotel";
import EmptyClient from "~/components/EmptyClient";

function Favorite() {
  const currentUser = window.localStorage.getItem("token");

  if (!currentUser) {
    return (
      <EmptyClient title="Chưa đăng nhập" description="Vui lòng đăng nhập" />
    );
  }


  return (
    <div>
      <CardMotel />
    </div>
  );
}

export default Favorite;
