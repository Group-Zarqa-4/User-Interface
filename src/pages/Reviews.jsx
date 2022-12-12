import React, { useState } from "react";
import ReviewCards from "../Components/Reviews/ReviewCard";
import AddPosts from "../Components/Reviews/AddPosts";
import axios from "axios";
import { PostAddSharp } from "@mui/icons-material";
import { useEffect } from "react";
function Reviews() {
  const [allPosts, setAllPosts] = useState([]);
  const tokens = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/posts/")
      .then((res) => {
        // console.log(res);
        setAllPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="m-5 p-5">
      {tokens && <AddPosts />}
      <div className="d-flex flex-wrap flex-column justify-content-center align-items-center">
        {allPosts?.map((post) => {
          return (
            <div className="p-3">
              <ReviewCards post={post} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Reviews;
