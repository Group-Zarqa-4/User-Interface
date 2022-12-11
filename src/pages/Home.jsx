import React from "react";
// import $ from "jquery";
import Hero from "../Components/Home/Hero";
import GridCategories from "../Components/Home/GridCategories";
import Enroll from "../Components/Home/Enroll";
import Gallery from "../Components/Home/Gallery";
import Register from "../Auth/Register";
import Login from "../Auth/Login";

function Home() {
  return (
    <div class="wrapper" id="wrapper">
      {/* hero section */}
      <Hero />
      {/* hero section */}

      {/* Grid Category */}
      <GridCategories />
      {/* Grid Category */}

      {/* Enroll */}
      <Enroll />
      {/* Enroll */}

      {/* Gallery */}
      <Gallery />
      {/* Gallery */}

      <div class="cartbox-wrap">
        <div class="cartbox text-right">
          <button class="cartbox-close">
            <i class="zmdi zmdi-close"></i>
          </button>
          <div class="cartbox__inner text-left">
            <div class="cartbox__items">
              <div class="cartbox__item">
                <div class="cartbox__item__thumb">
                  <a href="product-details.html">
                    <img
                      src="./assets/images/product/sm-pro/1.jpg"
                      alt="small thumbnail"
                    />
                  </a>
                </div>
                <div class="cartbox__item__content">
                  <h5>
                    <a href="product-details.html" class="product-name">
                      brown jacket
                    </a>
                  </h5>
                  <p>
                    Qty: <span>01</span>
                  </p>
                  <span class="price">$15</span>
                </div>
                <button class="cartbox__item__remove">
                  <i class="fa fa-trash"></i>
                </button>
              </div>

              <div class="cartbox__item">
                <div class="cartbox__item__thumb">
                  <a href="product-details.html">
                    <img
                      src="./assets/images/product/sm-pro/2.jpg"
                      alt="small thumbnail"
                    />
                  </a>
                </div>
                <div class="cartbox__item__content">
                  <h5>
                    <a href="product-details.html" class="product-name">
                      long sleeve t-shirt
                    </a>
                  </h5>
                  <p>
                    Qty: <span>01</span>
                  </p>
                  <span class="price">$25</span>
                </div>
                <button class="cartbox__item__remove">
                  <i class="fa fa-trash"></i>
                </button>
              </div>
              <div class="cartbox__item">
                <div class="cartbox__item__thumb">
                  <a href="product-details.html">
                    <img
                      src="./assets/images/product/sm-pro/3.jpg"
                      alt="small thumbnail"
                    />
                  </a>
                </div>
                <div class="cartbox__item__content">
                  <h5>
                    <a href="product-details.html" class="product-name">
                      black polo shirt
                    </a>
                  </h5>
                  <p>
                    Qty: <span>01</span>
                  </p>
                  <span class="price">$30</span>
                </div>
                <button class="cartbox__item__remove">
                  <i class="fa fa-trash"></i>
                </button>
              </div>
            </div>
            <div class="cartbox__total">
              <ul>
                <li>
                  <span class="cartbox__total__title">Subtotal</span>
                  <span class="price">$70</span>
                </li>
                <li class="shipping-charge">
                  <span class="cartbox__total__title">Shipping Charge</span>
                  <span class="price">$05</span>
                </li>
                <li class="grandtotal">
                  Total<span class="price">$75</span>
                </li>
              </ul>
            </div>
            <div class="cartbox__buttons">
              <a class="dcare__btn" href="cart.html">
                <span>View cart</span>
              </a>
              <a class="dcare__btn" href="checkout.html">
                <span>Checkout</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* <Register />
      <Login /> */}
    </div>
  );
}

export default Home;
