import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPassword_Confirmation] = useState("");
  const navigate = useNavigate();
  const { setAuth } = useContext(AuthContext);

  const addUser = (e) => {
    e.preventDefault();
    // const formData = new FormData(e.currentTarget);

    const registerAccount = {
      name: name,
      email: email,
      password: password,
      password_confirmation: password_confirmation,
    };

    axios.get("/sanctum/csrf-cookie").then((response) => {
      axios.post("/api/register", registerAccount).then((response) => {
        const token = response.data.token;
        const user = response.data.user;
        const id = response.data.userId;
        localStorage.setItem("token", token);
        localStorage.setItem("user", user);
        localStorage.setItem("userId", id);
        setAuth(true);
        navigate("/");
      });
    });
  };
  return (
    <>
      <section className="vh-100 my-5" style={{ backgroundColor: "#eee" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: 25 }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Sign up
                      </p>
                      <form className="mx-1 mx-md-4" onSubmit={addUser}>
                        <div className="d-flex flex-row align-items-center mb-4">
                          {/* <i className="fas fa-user fa-lg me-3 fa-fw" /> */}
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="form3Example1c"
                              className="form-control"
                              name="name"
                              onChange={(e) => setName(e.target.value)}
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example1c"
                            >
                              Your Name
                            </label>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          {/* <i className="fas fa-envelope fa-lg me-3 fa-fw" /> */}
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="email"
                              id="form3Example3c"
                              className="form-control"
                              name="email"
                              onChange={(e) => setEmail(e.target.value)}
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example3c"
                            >
                              Your Email
                            </label>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          {/* <i className="fas fa-lock fa-lg me-3 fa-fw" /> */}
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              id="form3Example4c"
                              className="form-control"
                              name="password"
                              onChange={(e) => setPassword(e.target.value)}
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example4c"
                            >
                              Password
                            </label>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          {/* <i className="fas fa-key fa-lg me-3 fa-fw" /> */}
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              id="form3Example4cd"
                              className="form-control"
                              name="password_confirmation"
                              onChange={(e) =>
                                setPassword_Confirmation(e.target.value)
                              }
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example4cd"
                            >
                              Repeat your password
                            </label>
                          </div>
                        </div>
                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            type="submit"
                            className="btn btn-primary btn-lg"
                          >
                            Register
                          </button>
                        </div>
                        <div className="accountbox-login__others text-center">
                          <h6>or register with</h6>
                          <ul className="dacre__social__link d-flex justify-content-center">
                            <li className="pinterest">
                              <a target="_blank" href="#">
                                <span className="ti-google" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </form>
                      <h3 className="ml-5 my-3">
                        Have an account ? <Link to="/login">Login Fast</Link>
                      </h3>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        className="img-fluid"
                        alt="Sample image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// npm i --save @fortawesome/fontawesome-svg-core
