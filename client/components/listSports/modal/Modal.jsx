import React from "react";

export const Modal = ({handlePage}) => {
  return (
    <div
    style={{display: "flex", alignItems:"center", justifyContent:"center"}}
      id="popup-modal"
      tabindex="-1"
      class={`fixed top-0 left-0 right-0 z-50 p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full`}
    >
      <div class="relative w-full max-w-md max-h-full">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div class="p-6 text-center">
            <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
            Sport created successfully! Do you want to add a court?
            </h3>
            <button
            onClick={()=>handlePage(3)}
              data-modal-hide="popup-modal"
              type="button"
              class="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
            >
              
Yes! I want to add
            </button>
            <button
            onClick={()=>handlePage(1)}
              data-modal-hide="popup-modal"
              type="button"
              class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
            >
              No! thank you
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
