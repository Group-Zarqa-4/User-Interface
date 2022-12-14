import React from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
function Premium() {
  const auth_user_id = localStorage.getItem("userId");
  const navigate = useNavigate();
  const params = useParams();
  console.log(params);
  function handleSubmit(id, e) {
    e.preventDefault();
    axios
      .post(`http://localhost:8000/api/premium/${id}`)
      .then((response) => {
        console.log(response);
        Swal.fire("Thanks for using our channel", "Subscribed Successfully");
        if (params.id != "pre") {
          navigate(`/story/${params.id}`);
        } else {
          navigate("/");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="col-lg-4 mb-lg-0 mb-3"></div>

          <div class="col-12 mt-4">
            <div class="card p-3">
              <p class="mb-0 fw-bold h4">Payment Methods</p>
            </div>
          </div>
          <div class="col-12">
            <div class="card p-3">
              <div class="card-body border p-0">
                <p>
                  <a
                    class="btn btn-primary p-2 w-100 h-100 d-flex align-items-center justify-content-between"
                    aria-expanded="true"
                    aria-controls="">
                    <span class="fw-bold text-white">Credit Card</span>
                  </a>
                </p>
                <div class="collapse show p-3 pt-0" id="collapseExample">
                  <div class="row">
                    <div class="col-lg-5 mb-lg-0 mb-3">
                      <p class="h4 mb-0">Summary</p>
                      <p class="mb-0"></p>
                      <p class="mb-0">
                        <span class="fw-bold">Price:</span>
                        <span class="c-green">15 JOD</span>
                      </p>
                      <p class="mb-0">
                        After you submit the payment you will have access to all
                        of our products, including premium stories, games and
                        Vidoes.
                      </p>
                    </div>
                    <div class="col-lg-7">
                      <form
                        onSubmit={(e) => handleSubmit(auth_user_id, e)}
                        class="form">
                        <div class="row">
                          <div class="col-12">
                            <div class="form__div">
                              <input
                                type="text"
                                class="form-control"
                                placeholder=" "
                              />
                              <label for="" class="form__label">
                                Card Number
                              </label>
                            </div>
                          </div>

                          <div class="col-6">
                            <div class="form__div">
                              <input
                                type="text"
                                class="form-control"
                                placeholder=" "
                              />
                              <label for="" class="form__label">
                                MM / yy
                              </label>
                            </div>
                          </div>

                          <div class="col-6">
                            <div class="form__div">
                              <input
                                type="password"
                                class="form-control"
                                placeholder=" "
                              />
                              <label for="" class="form__label">
                                cvv code
                              </label>
                            </div>
                          </div>
                          <div class="col-12">
                            <div class="form__div">
                              <input
                                type="text"
                                class="form-control"
                                placeholder=" "
                              />
                              <label for="" class="form__label">
                                name on the card
                              </label>
                            </div>
                          </div>
                          <div class="col-12">
                            <button
                              type="submit"
                              class="btn btn-primary payment">
                              Make Payment
                            </button>
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
      </div>
    </div>
  );
}

export default Premium;
