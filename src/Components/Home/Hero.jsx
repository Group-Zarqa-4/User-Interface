import React from "react";

export default function Hero() {
  return (
    <>
      <section class="junior__welcome__area section-padding--md bg-pngimage--2">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="section__title text-center">
                <h2 class="title__line">Welcome To Junior Home</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunte magna aliquaet, consectetempora
                  incidunt
                </p>
              </div>
            </div>
          </div>
          <div class="row jn__welcome__wrapper align-items-center">
            <div class="col-md-12 col-lg-6 col-sm-12">
              <div class="welcome__juniro__inner">
                <h3>
                  Welcome to <span class="theme-color">O</span>
                  <span>u</span>r School
                </h3>
                <p class="wow flipInX">
                  Lorem ipsum dolor sit amet, consectetur adipisic ming elit,
                  sed do ei Excepteur sint occaecat cupida proident, sunt in
                  culpa qui dese runt mol anim id est lai aborum. Sed ut
                  perspiciatis unde omnis iste natus error svolupt accu
                  doloremque laudantium, totam rem.
                </p>
                <div class="wel__btn">
                  <a class="dcare__btn" href="about-us.html">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-12 col-lg-6 col-sm-12 md-mt-40 sm-mt-40">
              <div class="jnr__Welcome__thumb wow fadeInRight">
                <img
                  src="./assets/images/wel-come/1.png"
                  alt="./assets/images"
                />
                <a
                  class="play__btn"
                  href="https://www.youtube.com/watch?v=MCJEkZtqlBk">
                  <i class="fa fa-play"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
