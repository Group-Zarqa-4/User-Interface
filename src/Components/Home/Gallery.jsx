import React, { useState } from "react";
import booksApi from "../../booksApi.json";

export default function Gallery() {
  const [books, setBooks] = useState(booksApi);
  return (
    <div>
      <section
        class="junior__testimonial__area bg-image--2 section-padding--lg"
        style={{
          backgroundImage: `url("https://images-ext-1.discordapp.net/external/xFaOrgz2FBSm4R-ROt7nbxjTR9GgT8hMXv1T3Ifa3AU/%3Fformat%3D2500w/https/images.squarespace-cdn.com/content/v1/5762f76ef7e0ab85e7391707/1480692827460-K7WDGJIJW3J3DCBQ3FVN/ke17ZwdGBToddI8pDm48kBZlCHarXg5rhR-WqYZRt3sUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYy7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2didw2UtuhEgUY3oasE-eW3P9DQjHYvtjpyhPVsqDMMlPm7cT0R_dexc_UL_zbpz6JQ/image-asset.jpeg?width=1441&height=556")`,
          height: "400px",
        }}
      >
        <div class="container">
          <div class="row">
            <div class="offset-lg-2 col-lg-8 col-md-12 col-sm-12">
              <div class="testimonial__container">
                <div class="tes__activation--1 owl-carousel owl-theme">
                  <div class="testimonial__bg">
                    <div class="testimonial text-center">
                      <div class="testimonial__inner">
                        <div class="test__icon">
                          <img
                            src="./assets/images/testimonial/icon/1.png"
                            alt="icon ./assets/images"
                          />
                        </div>
                        <div class="client__details">
                          <p>
                            Lorem ipsum dolor t dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostexercitation ullamco laboris
                            nisimollit anim id est lsunt explicabo. Nemo enim
                            ipsam voluptatem quia voluptas sit aspernatd.
                          </p>
                          <div class="client__info">
                            <h6>Lora alica</h6>
                            <span>Gardients of student</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="testimonial__bg">
                    <div class="testimonial text-center">
                      <div class="testimonial__inner">
                        <div class="test__icon">
                          <img
                            src="./assets/images/testimonial/icon/1.png"
                            alt="icon ./assets/images"
                          />
                        </div>
                        <div class="client__details">
                          <p>
                            Kohinur ipsum dolor t dolore magna aliqua. Ut enim
                            ad minim veniam, quis nostexercitation ullamco
                            laboris nisimollit anim id est lsunt explicabo. Nemo
                            enim ipsam voluptatem quia voluptas sit aspernatd.
                          </p>
                          <div class="client__info">
                            <h6>Kohinur alica</h6>
                            <span>Gardients of student</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="testimonial__bg">
                    <div class="testimonial text-center">
                      <div class="testimonial__inner">
                        <div class="test__icon">
                          <img
                            src="./assets/images/testimonial/icon/1.png"
                            alt="icon ./assets/images"
                          />
                        </div>
                        <div class="client__details">
                          <p>
                            Najnin ipsum dolor t dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostexercitation ullamco laboris
                            nisimollit anim id est lsunt explicabo. Nemo enim
                            ipsam voluptatem quia voluptas sit aspernatd.
                          </p>
                          <div class="client__info">
                            <h6>Najnin alica</h6>
                            <span>Gardients of student</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="junior__gallery__area bg--white section-padding--lg">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 col-sm-12 col-md-12">
              <div class="section__title text-center">
                <h2 class="title__line">Our Story</h2>
                <p>
                  A variety of stories from different cultures just for you
                  <br />
                  Choose what suits you best and enjoy
                </p>
              </div>
            </div>
          </div>
          <div class="row galler__wrap mt--40">
            {books.map((book, index) => {
              if (index <= 5) {
                return (
                  <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                    <div class="gallery wow fadeInUp">
                      <div class="gallery__thumb">
                        <a href="google.com">
                          <img
                            src={book.backgroundImage}
                            alt="gallery ./assets/images"
                            style={{ height: "400px" }}
                          />
                        </a>
                      </div>
                      <div class="gallery__hover__inner">
                        <div class="gallery__hover__action">
                          <ul class="gallery__zoom">
                            <li>
                              <a
                                href={book.backgroundImage}
                                data-lightbox="grportimg"
                                data-title="My caption"
                              >
                                <i class="fa fa-search"></i>
                              </a>
                            </li>
                            <li>
                              <a href="gallery-details.html">
                                <i class="fa fa-link"></i>
                              </a>
                            </li>
                          </ul>
                          <h4 class="gallery__title">
                            <a href="google.com">Creating Funny Things</a>
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </section>

      <section
        class="jnr__blog_area section-padding--lg bg-image--3"
        style={{
          backgroundAttachment: "fixed",
          opacity: 0.8,
          backgroundImage: `url("https://images-ext-1.discordapp.net/external/I7HSXIMfU_ym5GHWZjk8tD1PW7FWC-QRn10jggSIhGE/https/www.herder.de/-/media/images/herder/themen/kindergarten-und-paedagogik/willkommen-im-kindergarten.jpg")`,
        }}
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-12 col-sm-12 col-md-12">
              <div class="section__title text-center white--title">
                <h1 class="title__line dark text-light">Recent Blog</h1>
                <p class="dark">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunte magna aliquaet, consectetempora
                  incidunt
                </p>
              </div>
            </div>
          </div>
          <div class="row blog__wrapper mt--40">
            <div class="col-lg-4 col-md-6 col-sm-12 wow fadeInLeft">
              <article class="blog">
                <div class="blog__date">
                  <span>Date : 10th November, 2022</span>
                </div>
                <div class="blog__thumb">
                  <a href="blog-details.html">
                    <img
                      src="./assets/images/blog/md-img/1.jpg"
                      alt="blog ./assets/images"
                    />
                  </a>
                </div>
                <div class="blog__inner">
                  <span>Children Blog : Post By Ariana</span>
                  <h4>
                    <a href="blog-details.html">
                      Basic Knowledge About Drawing
                    </a>
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur ad modi tempora
                    incidunt ut labore et dolore magnam aliquam quaerat
                    voluptatem.
                  </p>
                  <ul class="blog__meta d-flex flex-wrap flex-md-nowrap flex-lg-nowrap justify-content-between">
                    <li>
                      <a href="google.com">Comments : 05</a>
                    </li>
                    <li>
                      <a href="google.com">Like : 07</a>
                    </li>
                  </ul>
                </div>
              </article>
            </div>

            <div class="col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
              <article class="blog">
                <div class="blog__date">
                  <span>Date : 10th November, 2022</span>
                </div>
                <div class="blog__thumb">
                  <a href="blog-details.html">
                    <img
                      src="./assets/images/blog/md-img/2.jpg"
                      alt="blog ./assets/images"
                    />
                  </a>
                </div>
                <div class="blog__inner">
                  <span>Children Blog : Post By Jonson</span>
                  <h4>
                    <a href="blog-details.html">Study Tour</a>
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur ad modi tempora
                    incidunt ut labore et dolore magnam aliquam quaerat
                    voluptatem.
                  </p>
                  <ul class="blog__meta d-flex flex-wrap flex-md-nowrap flex-lg-nowrap justify-content-between">
                    <li>
                      <a href="google.com">Comments : 05</a>
                    </li>
                    <li>
                      <a href="google.com">Like : 07</a>
                    </li>
                  </ul>
                </div>
              </article>
            </div>

            <div class="col-lg-4 col-md-6 col-sm-12 wow fadeInRight">
              <article class="blog">
                <div class="blog__date">
                  <span>Date : 10th November, 2022</span>
                </div>
                <div class="blog__thumb">
                  <a href="blog-details.html">
                    <img
                      src="./assets/images/blog/md-img/3.jpg"
                      alt="blog ./assets/images"
                    />
                  </a>
                </div>
                <div class="blog__inner">
                  <span>Children Blog : Post By Michel Jack</span>
                  <h4>
                    <a href="blog-details.html">Childrens Day</a>
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur ad modi tempora
                    incidunt ut labore et dolore magnam aliquam quaerat
                    voluptatem.
                  </p>
                  <ul class="blog__meta d-flex flex-wrap flex-md-nowrap flex-lg-nowrap justify-content-between">
                    <li>
                      <a href="google.com">Comments : 05</a>
                    </li>
                    <li>
                      <a href="google.com">Like : 07</a>
                    </li>
                  </ul>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section class="junior__upcomming__area section-padding--lg bg--white">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 col-sm-12 col-md-12">
              <div class="section__title text-center">
                <h2 class="title__line">Up Coming Event</h2>
                <p>
                  Because you are the most beautiful part, we do not forget all
                  the events related to children here
                </p>
              </div>
            </div>
          </div>
          <div class="row upcomming__wrap mt--40">
            <div class="col-lg-6 col-md-12 col-sm-12 wow fadeInLeft">
              <div class="upcomming__event">
                <div class="upcomming__thumb">
                  <img
                    src="./assets/images/upcomming/1.png"
                    alt="upcomming ./assets/images"
                  />
                </div>
                <div class="upcomming__inner">
                  <h6>
                    <a href="event-details.html">Todler Art Exhibition</a>
                  </h6>
                  <p>
                    An exhibition for children of different ages that is
                    organized by the Ministry of Education in schools and
                    institutions. Its aim is to allow children to express
                    themselves and their abilities through drawing.
                  </p>
                  <ul class="event__time">
                    <li>
                      <i class="fa fa-home"></i>Childrens Club,JORDAN,AMMAN
                    </li>
                    <li>
                      <i class="fa fa-clock-o"></i>10.00 am to 1.00 pm
                    </li>
                    <li>
                      <i class="fa fa-calendar"></i>30th Dec, 2022
                    </li>
                  </ul>
                </div>
                <div class="event__occur">
                  <img
                    src="./assets/images/upcomming/shape/1.png"
                    alt="shape ./assets/images"
                  />
                  <div class="enent__pub">
                    <span class="time">20st </span>
                    <span class="bate">Nov,2022</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-6 col-md-12 col-sm-12 wow fadeInRight">
              <div class="upcomming__event">
                <div class="upcomming__thumb">
                  <img
                    src="./assets/images/upcomming/2.png"
                    alt="upcomming ./assets/images"
                  />
                </div>
                <div class="upcomming__inner">
                  <h6>
                    <a href="event-details.html">Childrens Day Celebration</a>
                  </h6>
                  <p>
                    Universal Children's Day is UNICEF's annual day to encourage
                    children to act for the benefit of children. The voices of
                    children and young people ??? preoccupied with a wide range of
                    issues from climate change, education and mental health to
                    ending racism and discrimination ??? are calling on adults to
                    build a better future. On this occasion.
                  </p>
                  <ul class="event__time">
                    <li>
                      <i class="fa fa-home"></i>Childrens Club,JORDAN,AMMAN
                    </li>
                    <li>
                      <i class="fa fa-clock-o"></i>10.00 am to 1.00 pm
                    </li>
                    <li>
                      <i class="fa fa-calendar"></i>20th Nov, 2022
                    </li>
                  </ul>
                </div>
                <div class="event__occur">
                  <img
                    src="./assets/images/upcomming/shape/1.png"
                    alt="shape ./assets/images"
                  />
                  <div class="enent__pub">
                    <span class="time">20st </span>
                    <span class="bate">Nov,2022</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="bcare__subscribe subscribe--1">
        <div class="container bg__cat--3">
          <div class="row">
            <div class="col-lg-12 col-sm-12 col-lg-12">
              <div class="subscribe__inner">
                <h2>Subscribe To Our Special Offers</h2>
                <div class="newsletter__form">
                  <div class="input__box">
                    <div id="mc_embed_signup">
                      <form
                        action="http://devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&amp;id=05d85f18ef"
                        method="post"
                        id="mc-embedded-subscribe-form"
                        name="mc-embedded-subscribe-form"
                        class="validate"
                        target="_blank"
                        novalidate
                      >
                        <div
                          id="mc_embed_signup_scroll"
                          class="htc__news__inner"
                        >
                          <div class="news__input">
                            <input
                              type="email"
                              value=""
                              name="EMAIL"
                              class="email"
                              id="mce-EMAIL"
                              placeholder="Enter Your E-mail"
                              required
                            />
                          </div>
                          {/* <div
                              style="position: absolute; left: -5000px;"
                              aria-hidden="true">
                              <input
                                type="text"
                                name="b_6bbb9b6f5827bd842d9640c82_05d85f18ef"
                                tabindex="-1"
                                value=""
                              />
                            </div> */}
                          <div class="clearfix subscribe__btn">
                            <input
                              class="bst__btn btn--white__color"
                              type="submit"
                              value="Send Now"
                              name="subscribe"
                              id="mc-embedded-subscribe"
                            />
                          </div>
                        </div>
                      </form>
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
