import axios from "axios";
import React, { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const contact = {
      name: name,
      email: email,
      content: content,
    };

    axios.post("/api/contact", contact).then((response) => {
      console.log(response.data.message);
      setName("");
      setEmail("");
      setContent("");
    });
  };
  return (
    <div>
      <div class="ht__bradcaump__area">
        <div class="ht__bradcaump__container">
          <img
            src="./assets/images/bg-png/carousel-1.jpg"
            style={{ width: "100%", hight: "20%" }}
          />
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="bradcaump__inner text-center">
                  <h2 class="bradcaump-title">Contact Us</h2>
                  <nav class="bradcaump-inner">
                    <a class="breadcrumb-item" href="index.html">
                      Home
                    </a>
                    <span class="brd-separetor">
                      <img
                        src="./assets/images/icons/brad.png"
                        alt="separator images"
                      />
                    </span>
                    <span class="breadcrumb-item active">Contact Us</span>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section class="page__contact bg--white section-padding--lg">
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-sm-6 col-12 col-lg-4">
              <div class="address location">
                <div class="ct__icon">
                  <i class="fa fa-home"></i>
                </div>
                <div class="address__inner">
                  <h2>Our Location</h2>
                  <p>
                    You can visit our current website for more information or to
                    see the website of our services .
                  </p>
                  <ul>
                    <li>
                      JORDAN, AMMAN <br /> Road # 12, Sec #13, 5th Floor
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-sm-6 col-12 col-lg-4 xs-mt-60">
              <div class="address phone">
                <div class="ct__icon">
                  <i class="fa fa-phone"></i>
                </div>
                <div class="address__inner">
                  <h2>Phone Number</h2>
                  <p>
                    Customer service is available daily from Sunday to Thursday
                    from 10 am to 10 pm.
                  </p>
                  <ul>
                    <li>
                      <a href="tell:+08097-654321">+962770000000</a>
                    </li>
                    <li>
                      <a href="tell:+08097-654321">+962770077777</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-sm-6 col-12 col-lg-4 md-mt-60 sm-mt-60">
              <div class="address email">
                <div class="ct__icon">
                  <i class="fa fa-envelope"></i>
                </div>
                <div class="address__inner">
                  <h2>E-mail Address</h2>
                  <p>
                    You can contact us through our official e-mail or through
                    our socia website{" "}
                  </p>
                  <ul>
                    <li>
                      <a href="mailto:+08097-654321">junior.admin@email.com</a>
                    </li>
                    <li>
                      <a href="mailto:+08097-654321">JuniorKids.@yahoo.com</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="contact__map">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-7">
              <div class="contact__map">
                <div class="container-fluid">
                  <div class="row">
                    <div class="col-lg-7">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d433870.82683883054!2d35.6674355505741!3d31.83545332308035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151b5fb85d7981af%3A0x631c30c0f8dc65e8!2sAmman!5e0!3m2!1sen!2sjo!4v1670605605826!5m2!1sen!2sjo"
                        width="975"
                        height="550"
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-5">
              <div class="child__image">
                <img
                  src="https://i.pinimg.com/564x/64/a0/ac/64a0acb595b0e9eb9b222a8afea13cb7.jpg"
                  height={"550px"}
                  width={"600px"}
                  style={{ paddingLeft: "130px" }}
                  alt="children images"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section
        class="contact__box section-padding--lg bg-image--27"
        style={{
          backgroundAttachment: "fixed",
          backgroundImage: `url("https://assets.nationbuilder.com/aeu/pages/2734/features/original/sample-banner-homepage-3.jpg?1615951119")`,
          height: "850px",
        }}
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-12 col-sm-12 col-md-12">
              <div class="section__title text-center">
                <h2 class="title__line text-light">Feel Free To write Us</h2>
                <p class="text-light">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunte magna aliquaet, consectetempora
                  incidunt
                </p>
              </div>
            </div>
          </div>
          <div class="row mt--80">
            <div class="col-lg-12">
              <div class="contact-form-wrap">
                <form id="contact-form" onSubmit={handleSubmit}>
                  <div class="single-contact-form name">
                    <input
                      type="text"
                      name="name"
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your Nme*"
                      value={name}
                    />
                    <input
                      type="email"
                      name="email"
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Mail*"
                      value={email}
                    />
                  </div>
                  <div class="single-contact-form message">
                    <textarea
                      name="content"
                      onChange={(e) => setContent(e.target.value)}
                      placeholder="Type your message here.."
                      value={content}
                    ></textarea>
                  </div>
                  <div class="contact-btn">
                    <button type="submit" class="dcare__btn">
                      submit
                    </button>
                  </div>
                </form>
              </div>
              {/* <div class="form-output">
                <p class="form-messege"></p>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
