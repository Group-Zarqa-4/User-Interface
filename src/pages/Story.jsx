import React, { useEffect, useState } from "react";
import "./styles.css";
import booksApi from "../booksApi.json";
import { useNavigate } from "react-router-dom";
import HTMLFlipBook from "react-pageflip";
import axios from "axios";
import { useParams } from "react-router-dom";
const Page = React.forwardRef((props, ref) => {
  return (
    <div className="page" ref={ref}>
      <h1>{props.name}</h1>
      <p>{props.children}</p>
      <p>Page number: {props.number}</p>
    </div>
  );
});

export default function Story(props) {
  const [book, setBook] = useState();
  const navigate = useNavigate();
  const auth_user_id = localStorage.getItem("userId");
  const [userPremium, setUserPremium] = useState();

  const { id } = useParams();
  useEffect(() => {
    axios.get(`/api/stories/${id}`).then((response) => {
      setBook(response.data.story);
    });
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/users/${auth_user_id}`)
      .then((response) => {
        console.log(response);
        setUserPremium(response.data.is_premium);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  if (userPremium) {
    if (userPremium != 1 && book.is_premium == 1) {
      navigate(`/premium/${id}`);
    }
  }
  return (
    <div className="center my-5">
      {/* {booksApi[0].map((book, index) => { */}
      {/* return ( */}
      <HTMLFlipBook width={500} height={700} style={{ height: "700px" }}>
        {book?.pages?.map((info) => {
          return (
            <div>
              <Page number={info.num} name={book.title}>
                {info.num % 2 == 0 ? (
                  <p>{info.text}</p>
                ) : (
                  <img src={info.img} alt="" />
                )}
              </Page>
            </div>
          );
        })}
      </HTMLFlipBook>
      {/* ); */}
      {/* })} */}
    </div>
  );
}
