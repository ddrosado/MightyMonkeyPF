'use client'
import { useState } from "react";
import styles from "../../app/login.module.css"
import validation from "./validation";
import { useRouter } from "next/navigation";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../pages/api/firebaseConfig";

const userLogin = async (userData) => {
  const data = await fetch("http://localhost:3000/api/login", {
    method: "POST",
    body: JSON.stringify(userData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const rep = await data.json();
  return rep;
};

const SignIn = (props) => {

  const [userData, setUserData] = useState({
    username: '',
    password: ''
  });


  //  user = firebase.auth().currentUser;
  // if (user) {
  //   const email = user.email;

  //   userData = {
  //     username: email,
  //   };
  // }
  

  const router = useRouter()

  
  const handleGoogle = (e) => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .catch(error => {
        if (error.code === "auth/popup-closed-by-user") {
          console.log("Sign-in popup closed by the user.");
        } else {
          console.error("Sign-in error:", error);
        }
      });
  };



  
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


  
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    // const validationErrors = validation(userData);
    // setErrors(validationErrors);
    // if (Object.keys(validationErrors).length === 0) {
    // const res = await userLogin(form);
    // if(res){alert('usuario logueado con exito'); router.push('/home2')}
    // }
    // setUserData({
    //   username: '',
    //   password: ''
    // });
    const res = await userLogin(userData);
    if(res){
      router.push('/home')
    }
  };




  return(

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
      className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
      className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    />
    {errors.password && <p className={styles.loginError}>{errors.password}</p>}
  </div>



  <div className={styles.loginButtonContainer}>
    <div className={styles.signinContainer}>
  <button 
  type="submit" 
  className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-slate-300 rounded shadow"
  onClick={handleSubmit}>
    Sign In
    </button>
    </div>
    <h3>or</h3>

    <div className={styles.googleButtonContainer}>
    <button
    className="bg-white px-4 py-2 border flex gap-2 border-slate-300 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150"
    onClick={handleGoogle} >
    
    <img 
    className="w-6 h-6" 
    src="https://www.svgrepo.com/show/475656/google-color.svg" 
    loading="lazy" 
    alt="google logo"
    />

 
    <span>Sign in with Google</span>
</button>  
</div>


<div 
        className={styles.createAccount}>
           <h1>Don't have an account? <a 
          href="#"
          onClick={(e) => {
            e.preventDefault(); // Prevent the default link behavior
            props.changeComponent('register'); // Call the changeComponent function
          }}>           
          <span className={styles.signUp} ><u>Sign Up!</u></span>
            </a></h1>
            
        </div>


<div 
        className={styles.forgotPass}>
          <a href="#"
          onClick={(e) => {
            e.preventDefault(); // Prevent the default link behavior
            props.changeComponent('recoverPass'); // Call the changeComponent function
          }}>
            Forgot your password?
            </a>
  </div>

        
    </div>
</form>



  )
  };
  
  export default SignIn;