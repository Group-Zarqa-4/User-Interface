import React from "react";
import { Link } from "react-router-dom";
function Header() {
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
                      <a href="#">+003457289</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-md-5 col-lg-6 col-sm-12">
                <div class="jun__header__top__right">
                  <ul class="accounting d-flex justify-content-lg-end justify-content-md-end justify-content-start align-items-center">
                    <li>
                      <a class="login-trigger" href="#">
                        Login
                      </a>
                    </li>
                    <li>
                      <a class="accountbox-trigger" href="#">
                        Register
                      </a>
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
                        <Link to="index.html">Home</Link>
                      </li>
                      <li class="drop">
                        <Link to="class-grid.html">Stores</Link>
                      </li>
                      <li class="drop">
                        <Link to="event-grid.html">Vidoes</Link>
                      </li>
                      <li class="drop">
                        <Link to="shop-grid.html">Shop</Link>{" "}
                      </li>
                      <li class="drop">
                        <Link to="blog-grid.html">about us</Link>
                      </li>
                      <li>
                        <Link to="contact.html">Contact</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div class="col-lg-1 col-sm-4 col-md-4 order-2 order-lg-3">
                <div class="shopbox d-flex justify-content-end align-items-center">
                  <a class="minicart-trigger" href="#">
                    <i class="fa fa-shopping-basket"></i>
                  </a>
                  <span>03</span>
                </div>
              </div>
            </div>
            <div class="mobile-menu d-block d-lg-none">
              <div class="logo">
                <a href="index.html">
                  <img src="./assets/images/logo/junior.png" alt="logo" />
                </a>
              </div>
              <a class="minicart-trigger" href="#">
                <i class="fa fa-shopping-basket"></i>
              </a>
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
