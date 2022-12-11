import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";
import { AuthContext } from "../context/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [profile, setProfile] = useState({});
  const navigate = useNavigate();
  // const { clientId } = AuthContext;
  const { profile, setProfile } = useContext(AuthContext);
  const { setAuth } = useContext(AuthContext);
  const { setLoginGoogle } = useContext(AuthContext);

  // for login with google, as I readed client_id is the important key
  const clientId =
    "111242181519-tan7ba30id91j585qai70aaeht32lie9.apps.googleusercontent.com";
  const secretId = "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";

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    };
    gapi.load("client:auth2", initClient);
  });

  const onSuccess = (res) => {
    console.log("success:", res);
    setProfile(res.profileObj);
    localStorage.setItem("google-user", JSON.stringify(res.profileObj));
    localStorage.setItem(
      "google-current-user",
      JSON.stringify(res.profileObj.googleId)
    );
    setAuth(true);
    // console.log(profile.email);
    // return;
    axios.post("/api/loginGoogle", res.profileObj).then((response) => {
      const token = response.data.token;
      localStorage.setItem("token", token);
      console.log(response.data);
      setLoginGoogle(true);
      navigate("/");
    });

    // navigate("/");
  };
  const onFailure = (err) => {
    console.log("failed:", err);
  };

  const login = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const auth_login = {
      email: email,
      password: password,
    };

    console.log(auth_login);
    // return;
    axios.get("/sanctum/csrf-cookie").then((response) => {
      axios.post("/api/login", auth_login).then((response) => {
        const token = response.data.token;
        localStorage.setItem("token", token);
        console.log(response.data.message);
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
                        Sign in
                      </p>
                      <form className="mx-1 mx-md-4" onSubmit={login}>
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
                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            type="submit"
                            className="btn btn-primary btn-lg"
                          >
                            Login
                          </button>
                        </div>
                        <div className="accountbox-login__others text-center">
                          <h6>or login with</h6>
                          <ul className="dacre__social__link d-flex justify-content-center">
                            <li className="pinterest"></li>
                            {
                              <a>
                                <GoogleLogin
                                  clientId={clientId}
                                  buttonText="Sign in with Google"
                                  onSuccess={onSuccess}
                                  onFailure={onFailure}
                                  cookiePolicy={"single_host_origin"}
                                  isSignedIn={true}
                                />
                              </a>
                            }
                          </ul>
                        </div>
                      </form>
                      <h3 className="ml-5 my-3">
                        Create a new account ?{" "}
                        <Link to="/register">Register</Link>
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
