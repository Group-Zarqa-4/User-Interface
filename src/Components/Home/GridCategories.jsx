import React from "react";
import { Link } from "react-router-dom";
export default function GridCategories() {
  return (
    <div>
      <section class="junior__service  section-padding--bottom section--padding--xlg--top">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-6 col-sm-6 col-12">
              <div class="service  border__color wow fadeInUp">
                <div class="service__icon">
                  <img
                    src="./assets/images/shape/sm-icon/1.png"
                    alt="icon ./assets/images"
                  />
                </div>
                <div class="service__details">
                  <h6>
                    <Link to="/stores">Stores</Link>
                  </h6>
                  <p>
                    More than one story and from different cultures and for
                    different ages to suit your child
                  </p>
                  <div class="service__btn">
                    <Link
                      to="/stores"
                      class="dcare__btn btn__gray hover--theme min__height-btn"
                    >
                      {" "}
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-6 col-sm-6 col-12 xs-mt-60">
              <div
                class="service bg--white border__color border__color--2 wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <div class="service__icon">
                  <img
                    src="./assets/images/shape/sm-icon/2.png"
                    alt="icon ./assets/images"
                  />
                </div>
                <div class="service__details">
                  <h6>
                    <a href="service.html">Videos</a>
                  </h6>
                  <p>
                    Educational videos for children that help them build values
                    and ideas
                  </p>
                  <div class="service__btn">
                    <a
                      class="dcare__btn btn__gray hover--theme min__height-btn"
                      href="google.com"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-6 col-sm-6 col-12 md-mt-60 sm-mt-60">
              <div
                class="service bg--white border__color border__color--3 wow fadeInUp"
                data-wow-delay="0.45s"
              >
                <div class="service__icon">
                  <img
                    src="./assets/images/shape/sm-icon/3.png"
                    alt="icon ./assets/images"
                  />
                </div>
                <div class="service__details">
                  <h6>
                    <a href="service.html">Creative learning</a>
                  </h6>
                  <p>
                    We help children create the best ways and ideas to learn in
                    an innovative way{" "}
                  </p>
                  <div class="service__btn">
                    <Link
                      to="/Contact"
                      class="dcare__btn btn__gray hover--theme min__height-btn"
                    >
                      {" "}
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-6 col-sm-6 col-12 md-mt-60 sm-mt-60">
              <div
                class="service bg--white border__color border__color--4 wow fadeInUp"
                data-wow-delay="0.65s"
              >
                <div class="service__icon">
                  <img
                    src="./assets/images/shape/sm-icon/4.png"
                    alt="icon ./assets/images"
                  />
                </div>
                <div class="service__details">
                  <h6>
                    <a href="">support</a>
                  </h6>
                  <p>
                    They are available all the time to serve customers and
                    provide technical support
                  </p>
                  <div class="service__btn">
                    <a
                      class="dcare__btn btn__gray hover--theme min__height-btn"
                      href="google.com"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
