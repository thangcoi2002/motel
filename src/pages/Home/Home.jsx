import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      Home
      <Link to="/user">User</Link>
    </div>
  );
}

export default Home;
