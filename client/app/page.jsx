"use client";
import styles from "./login.module.css";
import RecoverPass from "../components/recoverPass/RecoverPass";
import SignIn from "../components/signin/SignIn";
import SignUp from "../components/register/Register";
import logo from "../assets/images/monologin.png";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function Login() {

  const [activeComponent, setActiveComponent] = useState("signIn");

  const changeComponent = (componentName) => {
    // console.log('Changing component to:', componentName);
    setActiveComponent(componentName);
  };

  let componentToDisplay;
  if (activeComponent === "signIn") {
    componentToDisplay = <SignIn changeComponent={changeComponent} />;
  } else if (activeComponent === "register") {
    componentToDisplay = <SignUp changeComponent={changeComponent} />;
  } else if (activeComponent === "recoverPass") {
    componentToDisplay = <RecoverPass changeComponent={changeComponent} />;
  }

  return (
    <div className={styles.loginScreen}>
      <Image className={styles.logo} src={logo} alt="Logo" />
      <div className={styles.loginTrapezoid}>
        <div className={styles.contentContainer}>{componentToDisplay}</div>
      </div>
      <Link href="/home">
        <button className={styles.guestBtn}>Enter as guest</button>
      </Link>
    </div>
  );
}
