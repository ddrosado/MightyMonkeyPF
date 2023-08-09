"use client";

import React, { useEffect } from "react";
import useSWR from "swr";
import { fetcher } from "../../pages/api/fetcher";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import getPlans from '../../pages/api/controllers/plans/getPlans';

const Membership = () => {
  let [member, setMember] = useState(true);
  let [count, setCount] = useState(0);

  const plans = useSWR("api/plans", fetcher);
  const user = useSWR("api/user", fetcher);
  const router = useRouter();

  if (user.data && count <= 5) {
    console.log("acaaaaaaa", user.data);
    console.log(count);
    const isMember = () => {
      setMember(user.data.isMember);
    };
    isMember();
    setCount(count + 1);
  }

  const urlPay = async (planId) => {
    console.log(planId);
    console.log(user.data.id);
    if (!user.data.id) router.push("/");
    const url = await axios
      .post("/api/pay", {
        type: "subscriptions",
        userId: user.data.id,
        planId,
      })
      .then(({ data }) => data.init_point);
    router.push(url);
  };

  const cancelSupscription = async () => {
    const cancel = await axios
      .put("/api/pay", {
        type: "cancel",
        userId: user.data.id,
      })
      .then(({ data }) => data);
  };

  return (
    <div>
      {!member ? (
        <div class="container mx-auto max-w-4xl">
          <div class="mt-10 text-center">
            <h1 class="text-4xl font-bold text-yellow-200">Choose your plan</h1>
            <p class="text-white mt-3 font-semibold">
              Every plan includes 30 day free trial
            </p>
          </div>
          <div className="mt-8">
            <div className="flex justify-between">
              <div>
                <p className="text-sm text-gray-600">
                  <span className="underline cursor-pointer text-blue-600"></span>
                </p>
              </div>
              <div className="flex space-x-16">
                <div className="flex">
                  <span className="font-semibold inline mr-4"></span>
                </div>
              </div>
            </div>
            <div></div>
          </div>
          <hr className="mt-10" />
          <div className="flex space-x-10 pt-10">
            {plans?.data?.map((plan) => {
              return (
                <div className="py-12">
                  <div className="bg-white  pt-4 rounded-xl space-y-6 overflow-hidden transition-all duration-500 transform hover:-translate-y-6 -translate-y-2 scale-105 shadow-xl hover:shadow-2xl cursor-pointer">
                    <div className="px-8 flex justify-between items-center">
                      <h4 className="text-xl font-bold text-gray-800">
                        {plan.duration === 12
                          ? `${plan.duration / 12} Year`
                          : `${plan.duration} Months`}
                      </h4>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-pink-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </div>
                    <h1 className="text-4xl text-center font-bold">
                      ${plan.price}
                    </h1>
                    <p className="px-4 text-center text-sm ">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem
                    </p>
                    <ul className="text-center">
                      <li>
                        <a href="#" className="font-semibold"></a>
                      </li>
                      <li>
                        <a href="#" className="font-semibold"></a>
                      </li>
                      <li>
                        <a href="#" className="font-semibold"></a>
                      </li>
                    </ul>
                    <div className="text-center bg-yellow-600 ">
                      <button
                        onClick={() => urlPay(plan.id)}
                        className="inline-block my-6 font-bold text-white"
                      >
                        Get started today
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div class="container mx-auto max-w-4xl">
          {/* <h1 class="text-4xl font-bold text-yellow-200">Ya estas suscripto</h1> */}
          <div
            id="main_container"
            class="relative grid place-content-center place-items-center gap-2 before:bg-gradient-to-t before:from-teal-500/70 before:via-fuchsia-600 before:to-transparent before:blur-xl before:filter"
          >
            <h1 class="title text-6xl font-black text-teal-500">
              Mighty Monkeys Basic
            </h1>
            <h2 class="cursive text-6xl font-thin text-white">beneficios</h2>
          </div>
          <button
            onClick={cancelSupscription}
            class="relative  shadow-xl group flex items-center text-white justify-center bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-2"
          >
            <div className="absolute  inset-0 w-0 bg-white opacity-10 transition-all duration-[0.3s] ease-out group-hover:w-full"></div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 mr-2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
            <span>Cancel</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default Membership;
