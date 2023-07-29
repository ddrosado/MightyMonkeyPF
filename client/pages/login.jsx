
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
    const session = await data.json();
    if(!data.ok) throw Error(session)
    return session;   
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
    try {
      await userLogin(form);
      alert('usuario logueado con exito'); router.push('/home2')
    } catch (error) {
      alert(error.message)
    }
  };

  return (
    <form>
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



export default Login;
