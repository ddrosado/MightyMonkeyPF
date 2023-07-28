
import { useRouter } from "next/router";
import { useState } from "react";


const userLogin = async (form) => {
  const data = await fetch("http://localhost:3000/api/login", {
    method: "POST",
    body: JSON.stringify(form),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const rep = await data.json();
  return rep;
};

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const router = useRouter()

  const inputHandler = (e) => {
    const { value, name } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const res = await userLogin(form);
    if(res){alert('usuario logueado con exito'); router.push('/home2')}
  };

  return (
    <form>
      {/* <label>NOMBRE</label>
            <input type="text" value={form.name} name="name" onChange={inputHandler} /> */}
      <label>EMAIL</label>
      <input
        type="text"
        value={form.email}
        name="email"
        onChange={inputHandler}
      />
      <label>PASSWORD</label>
      <input
        type="text"
        value={form.password}
        name="password"
        onChange={inputHandler}
      />
      <button onClick={onSubmit}>ENVIAR</button>
    </form>
  );
}

export const getStaticProps = ()=>{}

export default Login;
