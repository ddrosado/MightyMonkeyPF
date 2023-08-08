import React from "react";
import style from "./HistoryCard.module.css";
import dayjs from "dayjs";

export const HistoryCard = ({
  court,
  hour,
  createdAt,
  price,
  id,
  clientName,
  date,
  isMember
}) => {
  const status = {
    Finished: (
      <div className="ml-3 my-5 bg-yellow-600 p-1 w-20">
        <div className="uppercase text-xs leading-4 font-semibold text-center text-yellow-100">
          Finished
        </div>
      </div>
    ),
    Reserverd: (
      <div>
        <div className="ml-3 my-5 bg-green-600 p-1 w-20">
          <div className="uppercase text-xs leading-4 font-semibold text-center text-green-100">
            Reserved
          </div>
        </div>
      </div>
    ),
    Canceled: (
      <div className="ml-3 my-5 bg-red-600 p-1 w-20">
        <div className="uppercase text-xs leading-4 font-semibold text-center text-red-100">
          Canceled
        </div>
      </div>
    ),
  };

  return (
    <div className={style.card}>
      {/*inicio card */}
      <div className="bg-gray-50 mx-auto border-gray-500 border rounded-md text-gray-700 mb-0.5 h-30">
        <div className="flex p-3 border-l-8 border-yellow-600">

          <div className="space-y-1 border-r-2 pr-3">

            {/*Id de la reserva */}
            <div className="text-sm leading-5 font-semibold">
              <span className="text-xs leading-4 font-normal text-gray-500">
                {" "}
                ID #
              </span>{" "}
              {id}
            </div>

            {/*fecha de emision de la reserva */}
            <span className="text-xs leading-4 font-normal text-gray-500 pr">
              {" "}
              Emition date
            </span>{" "}
            <div className="text-sm leading-5 font-semibold">
              {dayjs(createdAt).format("YYYY-MM-DD")}
            </div>

          </div>

          <div className="flex-1">
            <div className="ml-3 space-y-1 border-r-2 pr-3">
              <div className="text-base leading-6 font-normal"></div>

              {/*nombre del cliente*/}
              <div className="text-sm leading-4 font-normal">
                <span className="text-xs leading-4 font-normal text-gray-500">
                  Client:
                </span>{" "}
                {clientName}
              </div>

              {/*nombre de la cancha*/}
              <div className="text-sm leading-4 font-normal">
                <span className="text-xs leading-4 font-normal text-gray-500">
                  Court:
                </span>{" "}
                {court?.name}
              </div>

              {/*fecha de la reserva*/}
              <div className="text-sm leading-4 font-normal">
                <span className="text-xs leading-4 font-normal text-gray-500">
                  Date:
                </span>{" "}
                {date}
              </div>

              {/*hora de la reserva*/}
              <div className="text-sm leading-4 font-normal">
                <span className="text-xs leading-4 font-normal text-gray-500">
                  {" "}
                  Hour:
                </span>{" "}
                {hour}
              </div>

              {/*precio de la reserva*/}
              <div className="text-sm leading-4 font-normal">
                <span className="text-xs leading-4 font-normal text-gray-500">
                  {" "}
                  Price:
                </span>{" "}
                {price}
              </div>
            </div>
          </div>
          <div className="border-r-2 pr-3">
            <div>
              <div className="ml-3 my-3 border-gray-200 border-2 bg-gray-300 p-1">
                <div className="uppercase text-xs leading-4 font-medium">
                  Trailer
                </div>
                <div className="text-center text-sm leading-4 font-semibold text-gray-800">
                  89732
                </div>
              </div>
            </div>
          </div>

          <div>{/*status de la card */}</div>
          <div></div>
        </div>
      </div>
      {/*fin card */}
    </div>
  );
};
