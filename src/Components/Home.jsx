import React, { useEffect } from "react";

import { useApi } from "../context/ServerContext";
import "./Home.css";
import ProductCard from "./ProductCard";
import Searchbar from "./Searchbar";

const Home = () => {
  const {
    checkAuthentication,
    getProducts,
    Products,
    FeaturedProducts,
    history,
  } = useApi();

  useEffect(() => {
    checkAuthentication();
    getProducts();
    history();
  }, []);

  const featureProducts = FeaturedProducts.slice(0, 3);

  return (
    <section className="space-y-20">
      <div
        id="carouselExampleCaptions"
        className="carousel slide max-h-[92vh] overflow-hidden"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="./img/slider1.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Image Scanner</h5>
              <p>
                Witness a best experience with us,search your desire product
                through image scanning
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="./img/slider2.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="./img/slider3.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="container space-y-10">
        <h2 className="font-bold text-4xl">Search Products</h2>
        <div className="row">
          <div className="col-lg-8 offset-lg-2 flex flex-col justify-center items-center space-y-20 relative">
            <Searchbar />

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
              {Products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container align-self-center">
        <h2 className="font-bold text-4xl">Search Methods</h2>
        <div className="row">
          <div className="col align-self-start">
            <img src="./img/fimg1.png" alt="" className="fimg" />
            <p>
              Scan your product by your self phone <br />
              & search this product through cheapfinder <br />
              to make a best deal ,Good Luck!!!
            </p>
          </div>
          <div className="col align-self-center">
            <img src="./img/bc1.png" alt="" className="fimg" />
            <p>
              Search Your desire product through Barcode <br />
            </p>
          </div>
          <div className="col align-self-end">
            <img src="./img/search1.png" alt="" className="fimg" />

            <p>
              Use product Name to find out your product <br />
              Cheapfinder is concern about user satisfiction <br />
              you gonna witness a new experience with us{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="container space-y-10">
        <h2 className="font-bold text-4xl">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
