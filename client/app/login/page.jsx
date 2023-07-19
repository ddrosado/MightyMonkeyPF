'use client'
import validation from "./validation";
import { useState, useEffect } from "react";
import styles from "./login.module.css";

export default function Login() {

const [userData, setUserData] = useState({
  username: '',
  password: ''
});

const [errors, setErrors] = useState({});
// const [isValid, setIsValid] = useState(false);

const handleChange = (e) => {
  const name = e.target.name;
  const value = e.target.value;
  setUserData({
    ...userData,
    [name]: value
  });
  setErrors(validation({
    ...userData,
    [name]: value
  }));
};


const handleSubmit = (e) => {
  e.preventDefault();
  const validationErrors = validation(userData);
  setErrors(validationErrors);
  if (Object.keys(validationErrors).length === 0) {
    // se submitea
  }
  setUserData({
    username: '',
    password: ''
  });
};

// useEffect(() => {
//   setIsValid(Object.keys(errors).length === 0);
// }, [errors]);

// useEffect(() => {
//   setIsValid(false);
// }, []);

  return  (
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
            />
            {errors.username && <p className={styles.loginError}>{errors.username}</p>}
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
            />
            {errors.password && <p className={styles.loginError}>{errors.password}</p>}
          </div>
          <button type="submit">Log In</button>
        </form>
        <div className="forgot-password">
          <a href="#">Forgot your password?</a>
        </div>
        <div className="forgot-password">
          <a href="#">Don't have an account?</a>
        </div>
        <div className={styles.loginGoogle}>
        <button
    class="bg-white px-4 py-2 border flex gap-2 border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
    <img class="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo"/>
    <span>Login with Google</span>
</button>      
        </div>
      </div>
      </div>
    </div>
  );
}