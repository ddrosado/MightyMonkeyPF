import React from "react";
import style from "./History.module.css";
import useSWR from "swr";
import { fetcher } from "../../pages/api/fetcher";
import { HistoryCard } from "../historyCard/HistoryCard";
const { DateTime } = require("luxon");

export const History = () => {
  const { data: { id }} = useSWR("api/user", fetcher);
  const { data: user } = useSWR("/api/users/" + id, fetcher);
  const { data: time } = useSWR("http://worldtimeapi.org/api/ip", fetcher, {
   revalidateOnMount: true,
   revalidateOnReconnect: true,
 });
 const realTime = DateTime.fromISO(time?.datetime).toFormat("yyyy/MM/dd HH:mm")

  return (
    <div className={style.container}>
      <div className={style.contentContainer}>
        <div className={style.historyTitle}>
          <span className={style.bookingsTitle}>
          </span>
        </div>
        <div>
          {user?.booking?.map((book) => (
            <HistoryCard
              clientName={`${user?.name} ${user?.surname}`}
              isMember={user?.isMember}
              hour={book.hour}
              court={book.court}
              createdAt={book.createdAt}
              price={
                user?.isMember
                  ? book.court.memberPrice
                  : book.court.noMemberPrice
              }
              id={book.id}
              date={book.date}
              sport={book.court.sport.name}
              time={realTime}
            />
          ))}
          <div className="bg-gray-50 mx-auto border-gray-500 border rounded-md text-gray-700 mb-0.5 h-30">
          </div>
        </div>
      </div>
    </div>
  );
};
