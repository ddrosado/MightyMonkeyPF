import React from "react";
import style from "./History.module.css";
import useSWR from "swr";
import axios from "axios";
import { HistoryCard } from "../historyCard/HistoryCard";
const { DateTime } = require("luxon");
import { fetcher } from "../../pages/api/fetcher";

const fetcherMultiple = async (args) => {
  const id = (await axios.get(args[0])).data.id;
  const user = axios.get(args[1] + id);
  const time = axios.get(args[2]);
  const res = await axios.all([user, time]);
  return res;
};

export const History = () => {
  const { data: multiple } = useSWR(
    ["api/user", "api/users/", "https://worldtimeapi.org/api/ip"],
    fetcherMultiple
  );

  const user = multiple && multiple[0].data;
  const time = multiple && multiple[1].data;

  const realTime = DateTime.fromISO(time?.datetime).toFormat(
    "yyyy/MM/dd HH:mm"
  );

  return (
    <div className={style.historyContainer}>
      <div className={style.titleContainer}>
        <h1>
          My <span>TURNS</span>
        </h1>
      </div>
      <div className={style.bookingsContainer}>
        {user?.booking?.map((book, index) => (
          <HistoryCard
            key={index}
            clientName={`${user?.name} ${user?.surname}`}
            isMember={user?.isMember}
            hour={book.hour}
            court={book.court}
            createdAt={book.createdAt}
            price={
              user?.isMember ? book.court.memberPrice : book.court.noMemberPrice
            }
            id={book.id}
            date={book.date}
            sport={book.court.sport.name}
            time={realTime}
          />
        ))}
        <div className="bg-gray-50 mx-auto border-gray-500 border rounded-md text-gray-700 mb-0.5 h-30"></div>
      </div>
    </div>
  );
};
