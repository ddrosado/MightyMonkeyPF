import React, { useState } from "react";
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
  sport,
  time,
  isMember
}) => {

  const [status, setStatus] = useState({
    name: "reserved",
    color: "green",
  });

  const reserveDate = dayjs(date + "T" + hour + ":00");
  const finishTime = reserveDate.add(1, "hour"); //tiempo limite de la reserva
  const finishHour = dayjs(finishTime).format("HH:ss");

  if (dayjs(finishHour).isBefore(time)) {
    setStatus({
      name: "finished",
      color: "yellow",
    });
  }
  const member = isMember ? '(Member)' : '(No Member)'

  return (
    <div className={style.card}>
      {/*inicio card */}
      <div className="bg-gray-50 mx-auto border-gray-500 border rounded-md text-gray-700 mb-0.5 h-30">
        <div className={`flex p-3 border-l-8 border-${status.color}-600`}>
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
                {`${clientName} - ${member}`}
              </div>

              {/*nombre de la cancha*/}
              <div className="text-sm leading-4 font-normal">
                <span className="text-xs leading-4 font-normal text-gray-500">
                  Court:
                </span>{" "}
                {`${court?.name} / (${sport})`}
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
                {`${hour} - ${finishHour}`}
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

          {/*status de la card*/}
          <div>
            <div className={`ml-3 my-5 bg-${status.color}-600 p-1 w-20`}>
              <div className="uppercase text-xs leading-4 font-semibold text-center text-red-100">
                {status.name}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*fin card */}
    </div>
  );
};
