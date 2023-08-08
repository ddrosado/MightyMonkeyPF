"use client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postReviews } from "../../redux/actions/reviewsAction";
import useSWR from "swr";
import { fetcher } from "../../pages/api/fetcher";
import  Modal  from "../modal/Modal";

const ReviewForm = () => {
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(1);
  const [show, setShow] = useState(false);

  const { data } = useSWR("/api/user", fetcher);

  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const reviewData = {
        userId: data.id,
        comment,
        rating,
      };

      dispatch(postReviews(reviewData));

      setComment("");
      setRating(1);
    } catch (error) {
      // Maneja los errores si la solicitud falla.
      console.error("Error al enviar la revisión:", error);
    }
  };

  const handleChangeRating = (value) => {
    setRating(value);
  };

  return (
    <>
    <button
      type="button"
      onClick={() => setShow(true)}
      className="bg-primary text-white rounded-md px-4 py-2 font-medium"
    >
      Escribe tu opinión
    </button>
    
    {
    show === true ?
    <Modal onClose={() => setShow(false)}>
    <div className="">
    <h1 className="text-xl font-bold">Escribe tu opinión aqui</h1>
    <form onSubmit={handleSubmit}>
      <textarea
        id="comment"
        name="comment"
        rows="4"
        cols="50"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      ></textarea>
      <br />

      <label htmlFor="rating">Calificación:</label>
      <ul className="my-1 flex list-none gap-1 p-0">
        {[...Array(5)].map((_, index) => (
          <li key={index}>
            <span
              className={`text-primary ${
                rating >= index + 1 ? "text-yellow-500" : "text-gray-400"
              } cursor-pointer`}
              data-te-rating-icon-ref
              onClick={() => handleChangeRating(index + 1)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className={`h-5 w-5 ${
                  rating >= index + 1 ? "text-yellow-500" : "text-gray-400"
                }`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                />
              </svg>
            </span>
          </li>
        ))}
      </ul>
      <br />

      <button className="bg-blue-500 hover:bg-blue-700 text-white flex items-center justify-center py-2 px-4 rounded" type="submit">Enviar Revisión</button>
    </form>
    </div>
    </Modal>
    : null
    }
    </>
  );
};

export default ReviewForm;
