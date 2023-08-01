'use client'
import React from 'react';
import './pricingPLans.css'

const PricingPlans = () => {
  return (
    <div className="font-sans plansContainer">
      <div className="min-h-screen flex justify-center items-center">
        <div>
          <div className="text-center font-semibold">
            <h1 className="text-5xl">
              <span className="tracking-wide flexible">Flexible </span>
              <span className='plans'>Plans</span>
            </h1>
            <p className="pt-6 text-xl text-gray-400 font-normal w-full px-8 md:w-full">
              Choose the best plan for you.
            </p>
          </div>
          <div className="pt-24 flex flex-row">
            {/* Basic Card */}
            <div className="w-96 p-8 bg-white text-center rounded-3xl pr-16 shadow-xl">
              <h1 className="text-black font-semibold text-2xl">1 Month</h1>
              <p className="pt-2 tracking-wide">
                <span className="text-gray-400 align-top">$ </span>
                <span className="text-3xl font-semibold">10</span>
                <span className="text-gray-400 font-medium">/ user</span>
              </p>
              <hr className="mt-4 border-1" />
              <div className="pt-8">
                <p className="font-semibold text-gray-400 text-left">
                  <span className="material-icons align-middle">done</span>
                  <span className="pl-2">Get started with <span className="text-black">messaging</span></span>
                </p>
                <p className="font-semibold text-gray-400 text-left pt-5">
                  <span className="material-icons align-middle">done</span>
                  <span className="pl-2">Flexible <span className="text-black">team meetings</span></span>
                </p>
                <p className="font-semibold text-gray-400 text-left pt-5">
                  <span className="material-icons align-middle">done</span>
                  <span className="pl-2"><span className="text-black">5 TB</span> cloud storage</span>
                </p>

                <a href="#">
                  <p className="w-full py-4 bgYellow mt-8 rounded-xl text-black">
                    <span className="font-medium">Choose Plan</span>
                    <span className="pl-2 material-icons align-middle text-sm">east</span>
                  </p>
                </a>
              </div>
            </div>
            {/* Startup Card */}
            <div className="w-80 p-8 bgCard text-center rounded-3xl text-white border-4 shadow-xl transform scale-125">
              <h1 className="text-white font-semibold text-2xl">3 Months</h1>
              <p className="pt-2 tracking-wide">
                <span className="text-gray-400 align-top">$ </span>
                <span className="text-3xl font-semibold">24</span>
                <span className="text-gray-400 font-medium">/ user</span>
              </p>
              <hr className="mt-4 border-1 border-gray-600" />
              <div className="pt-8">
                <p className="font-semibold text-gray-400 text-left">
                  <span className="material-icons align-middle">done</span>
                  <span className="pl-2">All features in <span className="text-white">Basic</span></span>
                </p>
                <p className="font-semibold text-gray-400 text-left pt-5">
                  <span className="material-icons align-middle">done</span>
                  <span className="pl-2">Flexible <span className="text-white">call scheduling</span></span>
                </p>
                <p className="font-semibold text-gray-400 text-left pt-5">
                  <span className="material-icons align-middle">done</span>
                  <span className="pl-2"><span className="text-white">15 TB</span> cloud storage</span>
                </p>

                <a href="#">
                  <p className="w-full py-4 bgBlack mt-8 rounded-xl textYellow">
                    <span className="font-medium">Choose Plan</span>
                    <span className="pl-2 material-icons align-middle text-sm">east</span>
                  </p>
                </a>
              </div>
              <div className="absolute top-4 right-4">
                <p className="bgBlack font-semibold px-4 py-1 rounded-full uppercase text-xs">Popular</p>
              </div>
            </div>
            {/* Enterprise Card */}
            <div className="w-96 p-8 bg-white text-center rounded-3xl pl-16 shadow-xl">
              <h1 className="text-black font-semibold text-2xl">1 Year</h1>
              <p className="pt-2 tracking-wide">
                <span className="text-gray-400 align-top">$ </span>
                <span className="text-3xl font-semibold">35</span>
                <span className="text-gray-400 font-medium">/ user</span>
              </p>
              <hr className="mt-4 border-1" />
              <div className="pt-8">
                <p className="font-semibold text-gray-400 text-left">
                  <span className="material-icons align-middle">done</span>
                  <span className="pl-2">All features in <span className="text-black">Startup</span></span>
                </p>
                <p className="font-semibold text-gray-400 text-left pt-5">
                  <span className="material-icons align-middle">done</span>
                  <span className="pl-2">Growth <span className="text-black">oriented</span></span>
                </p>
                <p className="font-semibold text-gray-400 text-left pt-5">
                  <span className="material-icons align-middle">done</span>
                  <span className="pl-2"><span className="text-black">Unlimited</span> cloud storage</span>
                </p>

                <a href="#">
                  <p className="w-full py-4 bgYellow mt-8 rounded-xl text-black">
                    <span className="font-medium">Choose Plan</span>
                    <span className="pl-2 material-icons align-middle text-sm">east</span>
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;