"use client";

import React, { useEffect } from "react";
import useSWR from "swr";
import { fetcher } from "../../pages/api/fetcher";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPlans } from "../../redux/actions/plansActions";

import { Plan } from "./plan/plan";



const Membership = () => {
  let [member, setMember] = useState(true);
  let [count, setCount] = useState(0);
  const dispatch = useDispatch()
  const plans = useSelector(state=>state.plans.plans)
  useEffect(()=>{
  dispatch(getPlans())
  },[])
  // const plans = useSWR("api/plans", fetcher);
  const user = useSWR("api/user", fetcher);
  const router = useRouter();

  if (user.data && count <= 5) {
    const isMember = () => {
      setMember(user.data.isMember);
    };
    isMember();
    setCount(count + 1);
  }


  return (
    <div>
          {plans?.map((plan) => {
              return (
                <Plan plan={plan} user={user}/>
              );
            })}
    </div>
  );
};

export default Membership;
