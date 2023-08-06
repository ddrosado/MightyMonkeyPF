"use client";
import React, { useEffect } from "react";
import styles from "./InfoReviews.module.css";
import { getReviews } from "../../redux/actions/reviewsAction";
import { useDispatch, useSelector } from "react-redux";
const InfoReviews = () => {
  const dispatch = useDispatch();
  const reviews = useSelector((state) => state.reviews.reviews);

  useEffect(() => {
    dispatch(getReviews());
  }, []);

  const lastThreeReviews = reviews.slice(-3).reverse();

  function formatDateWithoutTime(dateString) {
    if (!dateString) return null;
    const date = new Date(dateString);
    return date.toISOString().split("T")[0];
  }

  const firstreview = lastThreeReviews[0];
  const secodreview = lastThreeReviews[1];
  const terdreview = lastThreeReviews[2];

  const firstDateModifi = formatDateWithoutTime(firstreview?.createdAt);
  const secondDateModifi = formatDateWithoutTime(secodreview?.createdAt);
  const thirdDateModifi = formatDateWithoutTime(terdreview?.createdAt);

  function li(rating) {
    let list = [];
    for (let i = 1; i <= rating; i++) {
      list.push(
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 96 960 960"
            className="w-5 text-warning"
          >
            <path
              fill="currentColor"
              d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
            />
          </svg>
        </li>
      );
    }
    return list;
  }
  const stars = li(firstreview?.rating);
  const stars1 = li(secodreview?.rating);
  const stars2 = li(terdreview?.rating);

  return (
    <div className={styles.cardSection}>
      <div className="container mx-auto md:px-6 ">
        <section className="mb-16 text-center" style={{ display: "flex", flexDirection:"column", alignItems:"center" }}>
          <div className={styles.titleContainer}>
            <h1>
              Our <span> CLIENTS !</span>
            </h1>
          </div>
          <div
            id="carouselExampleCaptions"
            className="relative"
            data-te-carousel-init
            data-te-carousel-slide
          >
            <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
              <div
                className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                data-te-carousel-active
                data-te-carousel-item
                style={{ backfaceVisibility: "hidden" }}
              >
                <img
                  style={{
                    marginBottom: "6px",
                    borderRadius: "50%",
                    boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.2)",
                    width: "150px",
                    height:"150px"
                  }}
                  src={firstreview?.user?.image}
                  alt="avatar"
                />
                <div className="flex flex-wrap justify-center">
                  <div className="w-full shrink-0 grow-0 basis-auto px-3 lg:w-8/12">
                    <h5 className="mb-2 text-lg font-bold">
                      {firstreview?.user?.name} {firstreview?.user?.surname}
                    </h5>
                    <p className="mb-4 font-medium text-neutral-700 dark:text-neutral-400">
                      {firstDateModifi}
                    </p>
                    <p className="mb-6 text-neutral-500 dark:text-neutral-300">
                      {firstreview?.comment}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 96 960 960"
                        className="inline-block w-6"
                      >
                        <path
                          fill="currentColor"
                          d="M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z"
                        />
                      </svg>
                    </p>
                    <ul className="mb-0 flex justify-center">
                      {stars}
                      {/* Add other list items here */}
                    </ul>
                  </div>
                </div>
              </div>

              <div
                className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                data-te-carousel-item
                style={{ backfaceVisibility: "hidden" }}
              >
                <img
                  style={{
                    margin: "auto",
                    marginBottom: "6px",
                    borderRadius: "50%",
                    boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.2)",
                    width: "150px",
                  }}
                  src={secodreview?.user?.image}
                  alt="avatar"
                />
                <div className="flex flex-wrap justify-center">
                  <div className="w-full shrink-0 grow-0 basis-auto px-3 lg:w-8/12">
                    <h5 className="mb-2 text-lg font-bold">
                      {secodreview?.user?.name} {secodreview?.user?.surname}
                    </h5>
                    <p className="mb-4 font-medium text-neutral-700 dark:text-neutral-400">
                      {secondDateModifi}
                    </p>
                    <p className="mb-6 text-neutral-500 dark:text-neutral-300">
                      {secodreview?.comment}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 96 960 960"
                        className="inline-block w-6"
                      >
                        <path
                          fill="currentColor"
                          d="M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z"
                        />
                      </svg>
                    </p>
                    <ul className="mb-0 flex justify-center">
                      {stars1}
                      {/* Add other list items here */}
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                data-te-carousel-item
                style={{ backfaceVisibility: "hidden" }}
              >
                <img
                  style={{
                    margin: "auto",
                    marginBottom: "6px",
                    borderRadius: "50%",
                    boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.2)",
                    width: "150px",
                  }}
                  src={terdreview?.user.image}
                  alt="avatar"
                />
                <div className="flex flex-wrap justify-center">
                  <div className="w-full shrink-0 grow-0 basis-auto px-3 lg:w-8/12">
                    <h5 className="mb-2 text-lg font-bold">
                      {terdreview?.user.name} {terdreview?.user.surname}
                    </h5>
                    <p className="mb-4 font-medium text-neutral-700 dark:text-neutral-400">
                      {thirdDateModifi}
                    </p>
                    <p className="mb-6 text-neutral-500 dark:text-neutral-300">
                      {terdreview?.comment}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 96 960 960"
                        className="inline-block w-6"
                      >
                        <path
                          fill="currentColor"
                          d="M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z"
                        />
                      </svg>
                    </p>
                    <ul className="mb-0 flex justify-center">
                      {stars2}
                      {/* Add other list items here */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="absolute top-0 bottom-0 left-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
              type="button"
              data-te-target="#carouselExampleCaptions"
              data-te-slide="prev"
            >
              <span className="inline-block h-8 w-8">
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  className="text-neutral-600 dark:text-neutral-300"
                >
                  <path
                    fill="currentColor"
                    d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                  />
                </svg>
              </span>
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Previous
              </span>
            </button>
            <button
              className="absolute top-0 bottom-0 right-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
              type="button"
              data-te-target="#carouselExampleCaptions"
              data-te-slide="next"
            >
              <span className="inline-block h-8 w-8">
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  className="text-neutral-600 dark:text-neutral-300"
                >
                  <path
                    fill="currentColor"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              </span>
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Next
              </span>
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default InfoReviews;
