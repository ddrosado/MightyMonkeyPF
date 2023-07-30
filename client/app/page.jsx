'use client'
import styles from "./login.module.css"
import RecoverPass from "../components/recoverPass/RecoverPass"
import SignIn from "../components/signin/SignIn"
import SignUp from "../components/register/Register"
import logo from "../assets/images/logo.png"
import Image from "next/image";
import { useState } from "react"
import Link from "next/link";


export default function Login() {

  const [activeComponent, setActiveComponent] = useState('signIn');



  // switch between components
  const changeComponent = (componentName) => {
    console.log('Changing component to:', componentName);
    setActiveComponent(componentName);
  };

  // conditionally render the active component
  let componentToDisplay;
  if (activeComponent === 'signIn') {
    componentToDisplay = <SignIn 
      changeComponent = {changeComponent}    />;
  } else if (activeComponent === 'register') {
    componentToDisplay = <SignUp 
    changeComponent = {changeComponent} />;
  } else if (activeComponent === 'recoverPass') {
    componentToDisplay = <RecoverPass
    changeComponent = {changeComponent}  />;
  }
  

  return  (

    <div className={styles.loginScreen}>
          
          <div className={styles.loginImgContainer}>
          <Link href="/home">
          <Image src={logo} className={styles.loginLogo} alt="Logo" />
      </Link>
            </div>

      <div className={styles.loginTrapezoid}>
        <div className={styles.contentContainer}>
      {componentToDisplay}            
        </div>
      </div>
    </div>
  );
}