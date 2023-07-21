"use client";
import styles from "./login.module.css";
import validation from "./validation"
import { useState } from "react";
import Link from "next/link";

export default function Login() {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  // const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({
      ...userData,
      [name]: value,
    });
    setErrors(
      validation({
        ...userData,
        [name]: value,
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validation(userData);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      // se submitea
    }
    setUserData({
      username: "",
      password: "",
    });
  };

  return (
    <div className={styles.loginScreen}>
      <div className={styles.loginTrapezoid}>
        <div className={styles.loginContainer}>
          <form className={styles.loginForm} onSubmit={handleSubmit}>
            <div className={styles.loginFormGroup}>
              <label htmlFor="username">Email</label>
              <input
                type="email"
                id="username"
                name="username"
                placeholder="youremail@mail.com"
                value={userData.username}
                onChange={handleChange}
                class="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors.username && (
                <p className={styles.loginError}>{errors.username}</p>
              )}
            </div>

            <div className={styles.loginFormGroup}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                value={userData.password}
                onChange={handleChange}
                class="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors.password && (
                <p className={styles.loginError}>{errors.password}</p>
              )}
            </div>
            <div className={styles.loginButtonContainer}>
              <button
                type="submit"
                class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
              >
                Sign In
              </button>
            </div>
          </form>

          <button class="bg-white px-4 py-2 border flex gap-2 border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
            <img
              class="w-6 h-6"
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              loading="lazy"
              alt="google logo"
            />
            <span>Sign in with Google</span>
          </button>

          <div className={styles.forgotPass}>
            <a href="#">Forgot your password?</a>
          </div>
          <div className={styles.createAccount}>
            <a href="#">
              Don't have an account?{" "}
              <span className={styles.signUp}>
                <u>Sign Up!</u>
              </span>
            </a>
            <Link href="/signUp">Link Text</Link>
          </div>
          <div className={styles.loginGoogle}></div>
        </div>
      </div>
    </div>
  );
}
