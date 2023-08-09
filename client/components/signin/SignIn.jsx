"use client";
import { useEffect, useState } from "react";
import styles from "../../app/login.module.css";
import { useRouter } from "next/navigation";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../pages/api/firebaseConfig";
import useSWR from "swr";

const userLogin = async (form) => {
  const data = await fetch("api/login", {
    method: "POST",
    body: JSON.stringify(form),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const session = await data.json();
  return session;
};

const fetcher = async (route) => {
  const response = await fetch(route, {
    method: "GET",
  });
  const data = await response.json();
  return data;
};

const userGoogle = async (user) => {
  const data = await fetch("api/google", {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const res = await data.json();
  return res;
};

const SignIn = (props) => {
  const [userData, setUserData] = useState({
    email: "",
    password: ""
  });

  const router = useRouter();
  const [allowed, setAllowed] = useState(null);

  const { data, mutate } = useSWR("api/user", fetcher);

  const handleGoogle = (e) => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;

        console.log(user);
        userGoogle(user)
          .then((res) => {
            if (res?.session && res?.isActive) {
              setAllowed(true);
              mutate({ ...data, isLoggedIn: true });
              router.push("/home");
            } else if (res?.session && !res?.isActive) {
              setAllowed(false);
              alert("You are banned");
            }
          })
          .catch((error) => console.log(error.message));
      })
      .catch((error) => {
        if (error.code === "auth/popup-closed-by-user") {
          console.log("Sign-in popup closed by the user.");
        } else {
          console.error("Sign-in error:", error);
        }
      });
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const res = await userLogin(userData);
    if (res?.session && res?.isActive) {
      setAllowed(true);
      router.push("/home");
    } else if (res?.session && !res?.isActive) {
      setAllowed(false);
      alert("You are banned");
    } else {
      setAllowed(false);
    }
    setUserData({
      email: "",
      password: "",
    });
  };

  const isLoggedIn = data?.isLoggedIn;
  useEffect(() => {
  if (isLoggedIn && allowed === null) {
    // alert("donde vas perrito? ya tas logueado");
    router.push("/home");
  }
});

  return (
    <div>
      <form className={styles.loginForm} onSubmit={onSubmit}>
        <div className="relative mb-3">
          <input
            type="email"
            className="peer m-0 block h-[58px] w-full border-black border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
            id="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
          />
          <label
            for="floatingInput"
            className="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
          >
            Email address
          </label>
        </div>
        <div className="relative mb-3">
          <input
             type="password"
             id="password"
             name="password"
             value={userData.password}
             onChange={handleChange}
            className="peer m-0 block h-[58px] w-full border-black border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:shadow-te-primary focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
           
          />
          <label
            for="floatingPassword"
            className="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
          >
            Password
          </label>
        </div>

        {/* // ------------------------- Sign In ------------------------- */}
        <div className={styles.loginButtonContainer}>
          <div className={styles.signinContainer}>
            <button type="submit" className={styles.signInBtn}>
              Sign In
            </button>
            {!allowed && allowed !== null && (
              <p className={styles.invalid}>Invalid username/password</p>
            )}
          </div>
        </div>
      </form>
      {/* // ------------------------- Google ------------------------- */}
      <div className={styles.googleButtonContainer}>
        <h3>or</h3>
        <button className={styles.googleBtn} onClick={handleGoogle}>
          <img
            className="w-6 h-6"
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            loading="lazy"
            alt="google logo"
          />

          <span>Sign in with Google</span>
        </button>
      </div>

      {/* // ------------------------- Sign Up ------------------------- */}
      <div className={styles.createAccount}>
        <h1>
          Don't have an account?{" "}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault(); // Prevent the default link behavior
              props.changeComponent("register"); // Call the changeComponent function
            }}
          >
            <span className={styles.signUp}>
              <u>Sign Up!</u>
            </span>
          </a>
        </h1>
      </div>

      <div className={styles.forgotPass}>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault(); // Prevent the default link behavior
            props.changeComponent("recoverPass"); // Call the changeComponent function
          }}
        >
          Forgot your password?
        </a>
      </div>
    </div>
  );
};

export default SignIn;
