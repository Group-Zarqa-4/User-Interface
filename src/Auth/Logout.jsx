import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

export default function Logout(props) {
  const navigate = useNavigate();
  const { setAuth } = useContext(AuthContext);
  const logoutUser = () => {
    const token = localStorage.getItem("token");
    axios.get("/sanctum/csrf-cookie").then((response) => {
      axios.post("/api/logout", token).then((response) => {
        console.log(response.data.message);
        localStorage.removeItem("token");
        setAuth(false);
        navigate("/login");
      });
    });
  };
  return (
    <button className={props.class} onClick={logoutUser}>
      Logout
    </button>
  );
}
