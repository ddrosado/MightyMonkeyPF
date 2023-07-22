"use client";
import styles from "./login.module.css";
import { useState } from "react";
import RecoverPass from "../components/recoverPass/RecoverPass"
import SignIn from "../components/signin/SignIn"
import SignUp from "../components/register/Register"
import logo from "../assets/images/logo.png"
import Image from "next/image";

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
  

  return  (
    <div className={styles.loginScreen}>
          
          <div className={styles.loginImgContainer}>
            <Image 
            src={logo}
            className={styles.loginLogo}/>
            </div>

      <div className={styles.loginTrapezoid}>
        <div className={styles.contentContainer}>
      {componentToDisplay}            
        </div>
      </div>
    </div>
  );
}
