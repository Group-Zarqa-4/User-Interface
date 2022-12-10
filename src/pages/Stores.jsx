import React, { useCallback, useState } from "react";
import booksApi from "../booksApi.json";
import { RiHeart3Fill } from "react-icons/ri";

export default function Stores() {
  const [books, setBooks] = useState(booksApi);
  const [wishList, setWishList] = useState([]);
  const [toggleHeart, setToggleHeart] = useState(false);
  const addToFavorite = (id) => {
    const data = books.find((item) => item.id === id);
    setWishList([...wishList, data]);
    console.log(wishList);
  };

  const changeColor = useCallback(() => {
    setToggleHeart(!toggleHeart);
  }, []);

  return (
    <div>
      <div class="ht__bradcaump__area bradcaump__style--2">
        <div class="ht__bradcaump__container bg-pngimage--7">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="bradcaump__inner text-center">
                  <h2 class="bradcaump-title">Shop Grid</h2>
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
                    <span class="breadcrumb-item active">
                      Shop grid no sidebar
                    </span>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="dcare__shop__grid  section-padding--lg bg--white">
        <div className="container">
          <div className="row">
            {/* Shop Grid */}
            <div className="col-lg-12">
              <div className="row shop-grid-page">
                {/* Start Single Product */}
                {books?.map((book) => {
                  return (
                    <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                      <div className="product--2 product__grid">
                        <div className="product__imges">
                          <a href="shop-single.html">
                            <img
                              src={book.backgroundImage}
                              alt="product images"
                              height="200px"
                            />
                          </a>
                          <div className="pro__label">
                            <span>Premium</span>
                          </div>
                          <div className="product__cart__wrapper">
                            <ul className="cart__list">
                              <li>
                                <a
                                  href="#"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    addToFavorite(book.id);
                                  }}
                                >
                                  <span>
                                    <RiHeart3Fill
                                      id="heart"
                                      className={
                                        toggleHeart
                                          ? "ri-heart active"
                                          : "ri-heart"
                                      }
                                      onClick={changeColor}
                                    />
                                  </span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="product__inner">
                          <div className="pro__title">
                            <h4>
                              <a href="shop-single.html">{book.storyName}</a>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
                {/* End Single Product */}
              </div>
              {/* Start Pagination */}
              <div className="row">
                <div className="col-12">
                  <div className="dcare__pagination mt--80">
                    <ul className="dcare__page__list d-flex justify-content-center">
                      <li>
                        <a href="#">
                          <span className="ti-angle-double-left" />
                        </a>
                      </li>
                      <li>
                        <a className="page" href="#">
                          Prev
                        </a>
                      </li>
                      <li>
                        <a href="#">1</a>
                      </li>
                      <li>
                        <a href="#">2</a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-ellipsis-h" />
                        </a>
                      </li>
                      <li>
                        <a href="#">28</a>
                      </li>
                      <li>
                        <a className="page" href="#">
                          Next
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="ti-angle-double-right" />
                        </a>
                      </li>
                    </ul>
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

// {
//   (user && userFavorites.some(x => x.animeId == anime.animeId)) ?
//     <button class="text-4xl font-bold text-white text-yellow-300 cursor-pointer shadow-black">
//       <FaHeart onClick={() => removeToFav(anime.animeId)} />
//     </button>
//     :
//     <button class="text-4xl font-bold text-white text-white-300 cursor-pointer shadow-black">
//       <FaHeart onClick={() => addToFav(anime.animeId)} />
//     </button>
// }

// const addToFav = (name) => {
//   if (user) {
//     let favorite = new Favorite();
//     if (
//       !favorites.some(
//         (fav) => fav.animeId == name && fav.userId == user.userID
//       )
//     ) {
//       favorite.animeId = name;
//       favorite.userId = user.userID;
//       favorites.push(favorite);
//       localStorage.setItem("favorites", JSON.stringify(favorites));
//       fetchAllData();
//     }
//   }
// };

// const removeToFav = (name) => {
//   if (
//     user &&
//     favorites.findIndex(
//       (fav) => fav.animeId == name && fav.userId == user.userID
//     ) > 0
//   ) {
//     const index = favorites.findIndex(
//       (fav) => fav.animeId == name && fav.userId == user.userID
//     );
//     favorites.splice(index, 1);
//     console.log(favorites);
//     localStorage.setItem("favorites", JSON.stringify(favorites));
//     fetchAllData();
//   }
// };
