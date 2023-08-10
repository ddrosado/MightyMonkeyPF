"use client";
import Link from "next/link";
import style from "./page.module.css";
import NavAdmin from "../../../components/navAdmin/NavAdmin";
import ListSocios from "../../../components/admin/listSocios/ListSocios";
import { ListSports } from "../../../components/admin/listSports/ListSports";
import { ListTurns } from "../../../components/admin/listTurns/ListTurns";
import ListPlans from "../../../components/admin/listPlans/ListPlans";

const Page = ({ params }) => {
  return (
    <div className={style.dashContainer}>
      <div className={style.btnsContainer}>
        <Link href={"/home"}>
          <button className={style.home}>Home</button>
        </Link>
        <NavAdmin page={params.page} />
      </div>
      <div className={style.views}>
        {params.page == "users" ? <ListSocios /> : null}
        {params.page == "sports" ? <ListSports /> : null}
        {params.page == "turns" ? <ListTurns /> : null}
        {params.page == "plans" ? <ListPlans /> : null}
      </div>
    </div>
  );
};

export default Page;
