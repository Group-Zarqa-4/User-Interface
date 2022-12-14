import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box } from "@mui/material";
import Swal from "sweetalert2";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
function AddPosts() {
  const [title, setTitle] = useState("");
  const [review, setReview] = useState("");
  const [user, setUser] = useState("");
  const [useData, setUserData] = useState({});
  const auth_user_id = localStorage.getItem("userId");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    data.append("content", review);
    data.append("user_id", auth_user_id);
    // axios.get("/sanctum/csrf-cookie").then((response) => {
    axios.post(`api/storePost`, data).then((res) => {
      setTimeout(() => {
        window.location.reload(false);
      }, 1000);
      console.log(res);
      Swal.fire("Review Submitted", "success");
    });
    // });
  };

  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Add Review
      </button>
      <Box
        method="post"
        component="form"
        noValidate
        onSubmit={(e) => handleSubmit(e)}
        sx={{ mt: 3 }}
      >
        <div
          className="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog 	modal-lg ">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title" id="exampleModalLabel">
                  Add Review
                </h4>
                <button
                  type="button"
                  className=" btn btn-close fs-4"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <HighlightOffIcon />
                </button>
              </div>

              <div className="modal-body ">
                <div className="container">
                  <div className="mb-3">
                    <label htmlFor="" className="form-label">
                      {" "}
                      Enter your review here
                    </label>
                    <textarea
                      type="text"
                      onChange={(e) => setReview(e.target.value)}
                      className="form-control"
                      id="textarea"
                    ></textarea>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="submit" className="btn btn-primary">
                      Add Post
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Box>
    </div>
  );
}

export default AddPosts;
