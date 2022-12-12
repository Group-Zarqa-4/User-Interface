import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

// <link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
// <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">

function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  const [image, setImage] = useState([]);
  const [password_current, setPasswordCurrent] = useState("");
  const [password_new, setPasswordNew] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    }
  }, []);

  const updateUser = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    form.append("id", user.id);
    form.append("name", name);
    form.append("email", email);
    form.append("image", image);
    axios.post("/api/updateUser", form).then((response) => {
      console.log(response.data);
    });
  };
  const updatePassword = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    form.append("id", user.id);
    form.append("password_current", password_current);
    form.append("password_new", password_new);
    form.append("password_confirmation", password_confirmation);
    axios.post("/api/updatePassword", form).then((response) => {
      console.log(response.data);
    });
  };
  return (
    <div>
      <section class="py-5 my-5">
        <div class="container">
          <h1 class="mb-5">Profile Settings</h1>
          <div class="bg-white shadow rounded-lg d-block d-sm-flex">
            <div class="profile-tab-nav border-right">
              <div class="p-4">
                <div class="img-circle text-center mb-3">
                  <img
                    // src="data:image/png;base64,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"
                    src={require(`../../users/${user.image}`)}
                    alt="Image"
                    class="shadow"
                  />
                </div>
                <h4 class="text-center">{user?.name}</h4>
              </div>
              <div
                class="nav flex-column nav-pills"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                <a
                  class="nav-link active"
                  id="account-tab"
                  data-toggle="pill"
                  href="#account"
                  role="tab"
                  aria-controls="account"
                  aria-selected="true"
                >
                  <i class="fa fa-home text-center mr-1"></i>
                  Account
                </a>
                <a
                  class="nav-link"
                  id="password-tab"
                  data-toggle="pill"
                  href="#password"
                  role="tab"
                  aria-controls="password"
                  aria-selected="false"
                >
                  <i class="fa fa-key text-center mr-1"></i>
                  Password
                </a>
                <a
                  class="nav-link"
                  id="security-tab"
                  data-toggle="pill"
                  href="#security"
                  role="tab"
                  aria-controls="security"
                  aria-selected="false"
                >
                  <i class="fa fa-user text-center mr-1"></i>
                  Security
                </a>
                <a
                  class="nav-link"
                  id="application-tab"
                  data-toggle="pill"
                  href="#application"
                  role="tab"
                  aria-controls="application"
                  aria-selected="false"
                >
                  <i class="fa fa-paste text-center mr-1"></i>
                  Posts
                </a>
                <a
                  class="nav-link"
                  id="notification-tab"
                  data-toggle="pill"
                  href="#notification"
                  role="tab"
                  aria-controls="notification"
                  aria-selected="false"
                >
                  <i class="fa fa-bell text-center mr-1"></i>
                  Notification
                </a>
              </div>
            </div>
            <div class="tab-content p-4 p-md-5" id="v-pills-tabContent">
              <div
                class="tab-pane fade show active"
                id="account"
                role="tabpanel"
                aria-labelledby="account-tab"
              >
                <h3 class="mb-4">Account Settings</h3>
                <form onSubmit={updateUser}>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Full Name</label>
                        <input
                          type="text"
                          class="form-control"
                          name="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Upload image</label>
                        <input
                          type="file"
                          class="form-control"
                          name="image"
                          onChange={(e) => setImage(e.target.files[0])}
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Email</label>
                        <input
                          type="email"
                          class="form-control"
                          name="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <button class="btn btn-primary mr-2" type="submit">
                      Update
                    </button>
                    <button class="btn btn-light">Cancel</button>
                  </div>
                </form>
              </div>
              <div
                class="tab-pane fade"
                id="password"
                role="tabpanel"
                aria-labelledby="password-tab"
              >
                <h3 class="mb-4">Password Settings</h3>
                <form onSubmit={updatePassword}>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Old password</label>
                        <input
                          type="password"
                          name="password_current"
                          class="form-control"
                          onChange={(e) => setPasswordCurrent(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>New password</label>
                        <input
                          type="password"
                          name="password_new"
                          class="form-control"
                          onChange={(e) => setPasswordNew(e.target.value)}
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Confirm new password</label>
                        <input
                          type="password"
                          name="password_confirmation"
                          class="form-control"
                          onChange={(e) =>
                            setPasswordConfirmation(e.target.value)
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <button class="btn btn-primary" type="submit">
                      Update
                    </button>
                    <button class="btn btn-light">Cancel</button>
                  </div>
                </form>
              </div>
              <div
                class="tab-pane fade"
                id="security"
                role="tabpanel"
                aria-labelledby="security-tab"
              >
                <h3 class="mb-4">Security Settings</h3>
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label>Login</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label>Two-factor auth</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="recovery"
                        />
                        <label class="form-check-label" for="recovery">
                          Recovery
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <button class="btn btn-primary">Update</button>
                  <button class="btn btn-light">Cancel</button>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="application"
                role="tabpanel"
                aria-labelledby="application-tab"
              >
                <h3 class="mb-4">Application Settings</h3>
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="app-check"
                        />
                        <label class="form-check-label" for="app-check">
                          App check
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck2"
                        />
                        <label class="form-check-label" for="defaultCheck2">
                          Lorem ipsum dolor sit.
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <button class="btn btn-primary">Update</button>
                  <button class="btn btn-light">Cancel</button>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="notification"
                role="tabpanel"
                aria-labelledby="notification-tab"
              >
                <h3 class="mb-4">Notification Settings</h3>
                <div class="form-group">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="notification1"
                    />
                    <label class="form-check-label" for="notification1">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Dolorum accusantium accusamus, neque cupiditate quis
                    </label>
                  </div>
                </div>
                <div class="form-group">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="notification2"
                    />
                    <label class="form-check-label" for="notification2">
                      hic nesciunt repellat perferendis voluptatum totam porro
                      eligendi.
                    </label>
                  </div>
                </div>
                <div class="form-group">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="notification3"
                    />
                    <label class="form-check-label" for="notification3">
                      commodi fugiat molestiae tempora corporis. Sed dignissimos
                      suscipit
                    </label>
                  </div>
                </div>
                <div>
                  <button class="btn btn-primary">Update</button>
                  <button class="btn btn-light">Cancel</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
    </div>
  );
}
export default Profile;
