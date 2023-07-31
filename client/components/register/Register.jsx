'use client'
import { useState, useEffect } from "react";
import BackArrow from "../goBack/BackArrow";
import styles from "./Register.module.css"
import validation from "./validation";
import { createUser, getUsers } from "../../redux/actions/userActions";
import { useDispatch, useSelector } from "react-redux";


const SignUp = (props) => {
  const [registerData, setRegisterData] = useState({
    name: '',
    surname:'',
    password: '',
    confirmPassword: '',
    email: '',
    confirmEmail: ''
  })

 const dispatch = useDispatch()

 useEffect(() => {
  dispatch(getUsers())
}, [dispatch])

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setRegisterData({
      ...registerData,
      [name]: value
    });
    setErrors(validation({
      ...registerData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validation(registerData);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      dispatch(createUser(registerData))
    }
    setRegisterData({
      name: '',
      surname:'',
      password: '',
      confirmPassword: '',
      email: '',
      confirmEmail: ''
    });
  };





  return(
    <div>
    <BackArrow changeComponent={props.changeComponent}/>
    <form 
    onSubmit={handleSubmit}>
    <div className={styles.registerParent}>

  <div className={styles.div1}>
    <label 
    htmlFor="name"
    className={styles.registerLabel}>
      
      </label>
    <input
      type="text"
      id="name"
      placeholder="Name"
      name="name"
      value={registerData.name}
      onChange={handleChange}
      required
      className="register-input"
    />
  </div>

  <div className={styles.div2}>
    <label 
    htmlFor="surname"
    className={styles.registerLabel}>
     
      </label>
    <input
      type="text"
      id="surname"
      placeholder="Surname"
      name="surname"
      value={registerData.surname}
      onChange={handleChange}
      required
      className="register-input"
    />
  </div>

  <div className={styles.div3}>
    <label htmlFor="email"
    className={styles.registerLabel}>
      
      </label>
    <input
      type="email"
      id="email"
      placeholder="Email"
      name="email"
      value={registerData.email}
      onChange={handleChange}
      required
      className="register-input-mail"
    />
  </div>

  <div className={styles.div4}>
    <label htmlFor="email"
    className={styles.registerLabel}>
      
      </label>
    <input
      type="email"
      id="confirmEmail"
      placeholder="Confirm email"
      name="confirmEmail" 
      value={registerData.confirmEmail}
      onChange={handleChange}
      required
      className="register-input-mail"
    />
    {errors.email && <p className={styles.registerError}>{errors.email}</p>}
  </div>

  <div className={styles.div5}>
    <label 
    htmlFor="password"
    className={styles.registerLabel}>
      
      </label>
    <input
      type="password"
      id="password"
      placeholder="Password"
      name="password"
      value={registerData.password}
      onChange={handleChange}
      required
      className="register-input"
    />

  </div>

  <div className={styles.div6}>
    <label 
    htmlFor="confirmPassword"
    className={styles.registerLabel}>
      
      </label>
    <input
      type="password"
      id="confirmPassword"
      placeholder="Confirm password"
      name="confirmPassword"
      value={registerData.confirmPassword}
      onChange={handleChange}
      required
      className="register-input"
    />
        {errors.password && <p className={styles.registerError}>{errors.password}</p>}
  </div>
</div>

<div className={styles.registerButtonContainer}>
  <button 
  type="submit"
  className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-slate-300 rounded shadow">
    Register
    </button>
  </div>

</form>
      </div>
  )
  };
  
  export default SignUp;