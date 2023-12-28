import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import config from "~/config";

function NotFound() {
  const navigator = useNavigate();

  useEffect(() => {
    navigator(config.routes.home)
  });
}

export default NotFound;
