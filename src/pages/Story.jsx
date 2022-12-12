import React from "react";
import "./styles.css";
import booksApi from "../booksApi.json";

import HTMLFlipBook from "react-pageflip";

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
  return (
    <div className="center">
      {/* {booksApi[0].map((book, index) => { */}
      {/* return ( */}
      <HTMLFlipBook width={500} height={700} style={{ height: "700px" }}>
        {booksApi[0].pages.map((info) => {
          return (
            <div>
              <Page number={info.num} name={booksApi[0].storyName}>
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
