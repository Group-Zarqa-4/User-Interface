import React, { useContext, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import Logout from "../Auth/Logout";
import { GoogleLogout } from "react-google-login";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

function Header() {
  // for login with google, as I readed client_id is the important key
  const clientId =
    "111242181519-tan7ba30id91j585qai70aaeht32lie9.apps.googleusercontent.com";
  const secretId = "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";

  const user = localStorage.getItem("user")
    ? localStorage.getItem("user")
    : JSON.parse(localStorage.getItem("google-user"));
  const checkGoogle = localStorage.getItem("google-current-user");

  const navigate = useNavigate();
  // const { clientId } = AuthContext;
  const { auth, setAuth } = useContext(AuthContext);
  // const { profile, setProfile } = useContext(AuthContext);
  const { loginGoogle, setLoginGoogle } = useContext(AuthContext);
  const isLoginWithGoogle = localStorage.getItem("loginGoogle");

  const logOut = () => {
    const token = localStorage.getItem("token");
    const axiosAuth = "Bearer " + token;
    axios.defaults.headers.common["Authorization"] = axiosAuth;
    axios.get("/sanctum/csrf-cookie").then((response) => {
      axios.post("/api/logout").then((response) => {
        console.log(response.data.message);
        localStorage.removeItem("google-user");
        localStorage.removeItem("google-current-user");
        localStorage.removeItem("token");
        localStorage.removeItem("loginGoogle");
        localStorage.removeItem("user");
        setAuth(false);
        navigate("/login");
      });
    });
    // localStorage.removeItem("auth");

    // const token = localStorage.getItem("token");
    // axios.get("/sanctum/csrf-cookie").then((response) => {
    //   axios.post("/api/logout", token).then((response) => {
    //     console.log(response);
    //     localStorage.removeItem("token");
    //     setAuth(false);
    //     setLoginGoogle(false);
    //     navigate("/login");
    //   });
    // });
    // setAuth(false);
    // navigate("/login");
  };

  // check to handle login with google or normal login
  const checkLoginWithGoogle = () => {
    if (checkGoogle) {
      // return <Logout class="accountbox-trigger btn btn-success" />;
      return (
        <GoogleLogout
          clientId={clientId}
          buttonText="Log out"
          onLogoutSuccess={logOut}
        />
      );
    } else {
      return <Logout class="accountbox-trigger btn btn-success" />;
      // return (
      //   <GoogleLogout
      //     clientId={clientId}
      //     buttonText="Log out"
      //     onLogoutSuccess={logOut}
      //   />
      // );
    }
  };

  return (
    <div>
      <header id="header" class="jnr__header header--one clearfix">
        <div class="junior__header__top">
          <div class="container">
            <div class="row">
              <div class="col-md-7 col-lg-6 col-sm-12">
                <div class="jun__header__top__left">
                  <ul class="top__address d-flex justify-content-start align-items-center flex-wrap flex-lg-nowrap flex-md-nowrap">
                    <li>
                      <i class="fa fa-envelope"></i>
                      <a href="#">junior@mail.com</a>
                    </li>
                    <li>
                      <i class="fa fa-phone"></i>
                      <span>Contact Now :</span>
                      <a href="#">+9627770077007</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-md-5 col-lg-6 col-sm-12">
                <div class="jun__header__top__right">
                  <ul class="accounting d-flex justify-content-lg-end justify-content-md-end justify-content-start align-items-center">
                    <li>
                      {user || auth ? (
                        checkLoginWithGoogle()
                      ) : (
                        <a class="login-trigger" href="#">
                          <Link to="/login">Login</Link>
                        </a>
                      )}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="mainmenu__wrapper bg__cat--1 poss-relative header_top_line sticky__header">
          <div class="container">
            <div class="row d-none d-lg-flex">
              <div class="col-sm-4 col-md-6 col-lg-2 order-1 order-lg-1">
                <div class="logo">
                  <a href="index.html">
                    <img
                      src="./assets/images/logo/junior.png"
                      alt="logo images"
                    />
                  </a>
                </div>
              </div>
              <div class="col-sm-4 col-md-2 col-lg-9 order-3 order-lg-2">
                <div class="mainmenu__wrap">
                  <nav class="mainmenu__nav">
                    <ul class="mainmenu">
                      <li class="drop">
                        <Link to="/">Home</Link>
                      </li>
                      <li class="drop">
                        <Link to="/stores">Stores</Link>
                      </li>
                      <li class="drop">
                        <NavLink to="/reviews">Reviews</NavLink>
                      </li>
                      <li class="drop">
                        <Link to="event-grid.html">Vidoes</Link>
                      </li>
                      <li class="drop">
                        <Link to="#">Gaming</Link>
                      </li>

                      <li class="drop">
                        <Link to="/about">about us</Link>
                      </li>
                      <li>
                        <Link to="/contact">Contact</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>

              {/* use this part for profile */}

              {/* <div class="col-lg-1 col-sm-4 col-md-4 order-2 order-lg-3">
                <div class="shopbox d-flex justify-content-end align-items-center">
                  <a class="minicart-trigger" href="#">
                    <i class="fa fa-shopping-basket"></i>
                  </a>
                  <span>03</span>
                </div>
              </div> */}
            </div>
            <div class="mobile-menu d-block d-lg-none">
              <div class="logo">
                <a href="index.html">
                  <img src="./assets/images/logo/junior.png" alt="logo" />
                </a>
              </div>
              <a class="minicart-trigger" href="#"></a>
            </div>
          </div>
        </div>
      </header>

      {/* Modal Login */}
      <div class="login-wrapper">
        <div class="accountbox">
          <div class="accountbox__inner">
            <h4>Login to Continue</h4>
            <div class="accountbox__login">
              <form action="google.com">
                <div class="single-input">
                  <input type="email" placeholder="E-mail" />
                </div>
                <div class="single-input">
                  <input type="password" placeholder="Password" />
                </div>
                <div class="single-input text-center">
                  <button type="submit" class="sign__btn">
                    SUBMIT
                  </button>
                </div>
                <div class="accountbox-login__others text-center">
                  <ul class="dacre__social__link d-flex justify-content-center">
                    <li class="facebook">
                      <a target="_blank" href="https://www.facebook.com/">
                        <span class="ti-facebook"></span>
                      </a>
                    </li>
                    <li class="twitter">
                      <a target="_blank" href="https://twitter.com/">
                        <span class="ti-twitter"></span>
                      </a>
                    </li>
                    <li class="pinterest">
                      <a target="_blank" href="google.com">
                        <span class="ti-google"></span>
                      </a>
                    </li>
                  </ul>
                </div>
              </form>
            </div>
            <span class="accountbox-close-button">
              <i class="zmdi zmdi-close"></i>
            </span>
          </div>
          <h3>Have an account ? Login Fast</h3>
        </div>
      </div>
      {/* Modal Login */}
    </div>
  );
}

export default Header;
