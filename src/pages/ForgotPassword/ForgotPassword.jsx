import { useNavigate } from "react-router-dom";
import routes from "~/config/routes";

function ForgotPassword() {
  const navigate = useNavigate();

  return (
    <div>
      <p onClick={() => navigate(routes.home)}>Hủy</p>
    </div>
  );
}

export default ForgotPassword;
