import React from "react";

export default function Hero() {
  return (
    <>
      <section
        class="junior__welcome__area section-padding--md bg-pngimage--2"
        style={{
          backgroundAttachment: "fixed",
          backgroundImage: `url("https://50cb16144e927f9e6f6f-9f4946773be90d0bc170827895a58c68.ssl.cf1.rackcdn.com/homepage-350.jpg")`,
          height: "600px",
        }}
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="section__title text-center pt-5">
                <h1 class="title__line- text-light">Welcome To Junior Home</h1>
                <h3 class="text-light">
                  Make your child's learning more fun and safer through our
                  application.
                  <br /> We believe in the safety of the child and that it is
                  the bright foundation
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
