"use client";
import { useState } from "react";
import styles from "../../app/login.module.css";
import { useRouter } from "next/navigation";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../pages/api/firebaseConfig";

const userLogin = async (form) => {
  const data = await fetch("http://localhost:3001/api/login", {
    method: "POST",
    body: JSON.stringify(form),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const { session } = await data.json();
  return session;
};
const userGoogle = async (user)=>{
  const response = await fetch("http://localhost:3001/api/google",{
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
    },
  })
  const data = await response.json()
  return data
}

const SignIn = (props) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [allowed, setAllowed] = useState(null);

  // /*------------------------- Firebase ------------------------- */

  //  user = firebase.auth().currentUser;
  // if (user) {
  //   const email = user.email;

  //   userData = {
  //     username: email,
  //   };
  // }

  // /*------------------------------------------------------------ */

  const router = useRouter();

  const handleGoogle = (e) => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
       
        console.log(user)
        userGoogle(user).then(res => 
              console.log(res)  
            ).catch(error => console.log(error.message))
        
      })
      .catch((error) => {
        if (error.code === "auth/popup-closed-by-user") {
          console.log("Sign-in popup closed by the user.");
        } else {
          console.error("Sign-in error:", error);
        }
      });
  };

  const hola = "hola";

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
    if (res) {
      setAllowed(true);
      router.push("/home");
    } else {
      setAllowed(false);
    }
  };

  return (
    <form className={styles.loginForm} onSubmit={onSubmit}>
      <div className={styles.loginFormGroup}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="youremail@mail.com"
          value={userData.email}
          onChange={handleChange}
          className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
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
      </div>

      {/* // ------------------------- Sign In ------------------------- */}
      <div className={styles.loginButtonContainer}>
        <div className={styles.signinContainer}>
          <button
            type="submit"
            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-slate-300 rounded shadow"
            onClick={onSubmit}
          >
            Sign In
          </button>
          {!allowed && allowed !== null && (
            <p className={styles.invalid}>Invalid username/password</p>
          )}
        </div>
        <h3>or</h3>

        {/* // ------------------------- Google ------------------------- */}
        <div className={styles.googleButtonContainer}>
          <button
            className="bg-white px-4 py-2 border flex gap-2 border-slate-300 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150"
            onClick={handleGoogle}
          >
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
    </form>
  );
};

export default SignIn;
