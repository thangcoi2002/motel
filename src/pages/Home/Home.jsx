import { Link } from "react-router-dom";
import ListProvince from "~/components/ListProvince";
function Home() {
  return (
    <div>
      <ListProvince />
      Home
      <Link to="/user">User</Link>
    </div>
  );
}

export default Home;
