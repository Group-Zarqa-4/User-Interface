import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
// import booksApi from "../booksApi.json";
import { RiHeart3Fill } from "react-icons/ri";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";

export default function Stores() {
  const [pageNumber, setPageNumber] = useState(0);

  const [books, setBooks] = useState([]);
  const [allBooks, setAllBooks] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (search) {
      const result = books.filter((book) =>
        book.title.toLowerCase().includes(search)
      );
      setBooks(result);
    } else {
      setBooks(allBooks);
    }
  }, [search]);
  useEffect(() => {
    axios.get("/api/stories").then((response) => {
      setBooks(response.data.stories);
      setAllBooks(response.data.stories);
    });
  }, []);

  const usersPerPage = 9;
  const pagesVisited = pageNumber * usersPerPage;
  const displayUsers = books
    ?.slice(pagesVisited, pagesVisited + usersPerPage)
    .map((book) => {
      return (
        <>
          <div className="col-lg-4 col-md-2 col-sm-6 col-12">
            <div
              className="product--2 product__grid"
              style={{ border: "5px solid black" }}>
              <div className="product__imges">
                <Link to={`/story/${book.id}`}>
                  <img
                    src={book.backgroundImage}
                    alt="product images"
                    height="600px"
                    // width={"700px"}
                  />
                </Link>
                <div className="pro__label">
                  {book.is_premium ? <span>Premium</span> : ""}
                </div>
              </div>
              <div className="product__inner">
                <div className="pro__title">
                  <h4 className="text-truncate px-3">
                    <Link to={`/story/${book.id}`}>{book.title}</Link>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    });
  const pageCount = Math.ceil(books.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <div>
      <section
        class="junior__welcome__area section-padding--md bg-pngimage--2"
        style={{
          backgroundAttachment: "fixed",
          backgroundImage: `url("https://i.pinimg.com/564x/be/79/63/be79636d2f4363aacc6667722020e149.jpg")`,
          height: "700px",
          // opacity: 0.7,
        }}>
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="section__title text-center pt-5">
                <h1 class="title__line- text-dark">Welcome To Junior Home</h1>
                <h3 class="text-dark">
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

      <section className="dcare__shop__grid  section-padding--lg bg--white">
        <div className="container">
          <div className="row">
            {/* Shop Grid */}
            <div className="col-lg-12">
              <div className="row shop-grid-page">
                {/* Start Single Product */}
                <div className="row ml-2">
                  <input
                    type="text"
                    className="form-control w-25"
                    placeholder="Search"
                    name="search"
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>
                {displayUsers}
                {/* End Single Product */}
              </div>
              {/* Start Pagination */}
              <div className="row">
                <div className="col-12">
                  <div className="dcare__pagination mt--80">
                    <ReactPaginate
                      previousLabel={"Previous"}
                      nextLabel={"Next"}
                      pageCount={pageCount}
                      onPageChange={changePage}
                      containerClassName={"paginationBttns"}
                      previousLinkClassName={"previousBttn"}
                      nextLinkClassName={"nextBttn"}
                      disabledClassName={"paginationDisabled"}
                      activeClassName={"paginationActive"}
                    />
                  </div>
                </div>
              </div>
              {/* End Pagination */}
            </div>
            {/* End Shop Grid */}
          </div>
        </div>
      </section>
    </div>
  );
}
