import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box } from "@mui/material";
import Swal from "sweetalert2";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
function AddPosts() {
  const [title, setTitle] = useState("");
  const [review, setReview] = useState("");
  const [user, setUser] = useState("");

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/users/6")
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("ok");
    const data = new FormData(e.currentTarget);
    data.append("title", title);
    data.append("review", review);
    data.append("user_id", user.id);
    axios
      .post(`http://localhost:8000/api/${""}`, data)
      .then((res) => {
        setTimeout(() => {
          window.location.reload(false);
        }, 100);
        console.log(res);
        Swal.fire("Review Submitted", "success");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div style={{ marginLeft: "3rem" }}>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal">
        Add Review
      </button>
      <Box
        component="form"
        noValidate
        onSubmit={(e) => handleSubmit(e)}
        sx={{ mt: 3 }}>
        <div
          className="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true">
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
                  aria-label="Close">
                  <HighlightOffIcon />
                </button>
              </div>

              <div className="modal-body ">
                <div className="container">
                  <div className="mb-3">
                    <label htmlFor="" className="form-label">
                      {" "}
                      Enter your title here
                    </label>
                    <input
                      onChange={(e) => setTitle(e.target.value)}
                      type="text"
                      className="form-control"
                      id="title"></input>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="" className="form-label">
                      {" "}
                      Enter your review here
                    </label>
                    <textarea
                      type="text"
                      onChange={(e) => setReview(e.target.value)}
                      className="form-control"
                      id="textarea"></textarea>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal">
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
