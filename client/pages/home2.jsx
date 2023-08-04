import { useRouter } from "next/router";
import useSWR from "swr";
import {fetcher} from './api/fetcher'




const logout = async (props) => {
  console.log(props)
  const data = await fetch("http://localhost:3000/api/logout", {
    method: "GET",
  });
  const res = await data.json();
  return res;
};



export default function Home2() {
 
 const { data, error } = useSWR("api/user", fetcher);

  const router = useRouter();

  const logoutHandler = async () => {
    const res = await logout();
    alert(res.message);
    router.push("/login");
  };

  console.log(data)
  return (
    <>
      <h1 onClick={logoutHandler}>LOGOUT</h1>
      <button>only members</button>
    </>
  );
}
