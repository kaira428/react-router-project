import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFount = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/", { state: "Error!" });
    }, 1000)},
    [navigate]
  );

  return <h1>Not Found</h1>;
};

export default NotFount;
