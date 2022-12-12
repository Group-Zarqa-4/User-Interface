import React from "react";
import { Link } from "react-router-dom";

export default function Enroll() {
  return (
    <div>
      <section
        class="jnr__call__to__action bg-pngimage--3"
        style={{
          backgroundAttachment: "fixed",
          backgroundImage: `url("https://www.eeas.europa.eu/sites/default/files/styles/campaign_hero/public/media/children_shutterstock_636281354-web.jpg?h=3c358c41&itok=ZND9WvX8")`,
          height: "300px",
        }}
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-12 col-sm-12 col-md-12">
              <div class="jnr__call__action__wrap d-flex flex-wrap flex-md-nowrap flex-lg-nowrap justify-content-between align-items-center">
                <div class="callto__action__inner">
                  <h2 class="wow flipInX" data-wow-delay="0.95s">
                    Contact us and get answers to your inquiries{" "}
                  </h2>
                  <p>Join us a countact us at any time and from anywhere </p>
                </div>
                <div class="callto__action__btn">
                  <a class="dcare__btn btn__white" href="google.com">
                    Contact Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="junior__classes__area section-lg-padding--top section-padding--md--bottom bg--white">
        <div class="container">
          <div class="row">
            <div class="col-md-12 col-lg-12 col-sm-12">
              <div class="section__title text-center">
                <h2 class="title__line">Choose Your Store</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunte magna aliquaet, consectetempora
                  incidunt
                </p>
              </div>
            </div>
          </div>
          <div class="row classes__wrap activation owl-theme clearfix mt--40">
            <div class="col-lg-4 col-sm-6">
              <div class="junior__classes">
                <div class="classes__thumb">
                  <a href="class-details.html">
                    <img
                      src="https://tinybeans.com/wp-content/uploads/2020/09/boy-reading-book-dad-istock-e1606245373804.jpg"
                      alt="class ./assets/images"
                    />
                  </a>
                </div>
                <div class="classes__inner">
                  <div class="classes__icon">
                    <img
                      src="./assets/images/class/star/1.png"
                      alt="starr ./assets/images"
                    />
                    <span></span>
                  </div>
                  <div class="class__details">
                    <h4>
                      <a href="class-details.html">Story</a>
                    </h4>
                    <ul class="class__time">
                      <li>Infant Care : 0.8 - 2.5 Years</li>
                      <li>Class Size : 8</li>
                    </ul>
                    <div class="class__btn">
                      <a
                        class="dcare__btn btn__gray min__height-btn"
                        href="class-details.html"
                      >
                        <Link to="/stores">Admission Now</Link>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-sm-6">
              <div class="junior__classes">
                <div class="classes__thumb">
                  <a href="class-details.html">
                    <img
                      src="https://i0.wp.com/jmcinset.com/wp-content/uploads/2017/09/active-learning-2.jpg?fit=1024%2C683&ssl=1"
                      alt="class ./assets/images"
                    />
                  </a>
                </div>
                <div class="classes__inner">
                  <div class="classes__icon">
                    <img
                      src="./assets/images/class/star/1.png"
                      alt="starr ./assets/images"
                    />
                    <span></span>
                  </div>
                  <div class="class__details">
                    <h4>
                      <a href="class-details.html">Post</a>
                    </h4>
                    <ul class="class__time">
                      <li>Infant Care : 0.8 - 2.5 Years</li>
                      <li>Class Size : 8</li>
                    </ul>
                    <div class="class__btn">
                      <a
                        class="dcare__btn btn__gray min__height-btn"
                        href="class-details.html"
                      >
                        {/* <Link to="/post">Post</Link> */}
                        Admission Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-sm-6">
              <div class="junior__classes">
                <div class="classes__thumb">
                  <a href="class-details.html">
                    <img
                      src="https://www.kidspeace.org/wp-content/uploads/2017/01/vg-1.jpg"
                      height={"246px"}
                      alt="class ./assets/images"
                    />
                  </a>
                </div>
                <div class="classes__inner">
                  <div class="classes__icon">
                    <img
                      src="./assets/images/class/star/1.png"
                      alt="starr ./assets/images"
                    />
                    <span></span>
                  </div>
                  <div class="class__details">
                    <h4>
                      <a href="class-details.html">Gaming</a>
                    </h4>
                    <ul class="class__time">
                      <li>Infant Care : 0.8 - 2.5 Years</li>
                      <li>Class Size : 8</li>
                    </ul>
                    <div class="class__btn">
                      <a
                        class="dcare__btn btn__gray min__height-btn"
                        href="class-details.html"
                      >
                        {/* <Link to="/gtores"Gaming</Link> */}
                        Admission Now
                      </a>
                    </div>
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
