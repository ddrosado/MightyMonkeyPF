import { useState } from "react";
import BackArrow from "../goBack/BackArrow";
import styles from "./Register.module.css"

const SignUp = (props) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
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
      Name
      </label>
    <input
      type="text"
      id="name"
      value={name}
      onChange={(e) => setName(e.target.value)}
      required
      className="register-input"
    />
  </div>

  <div className={styles.div2}>
    <label 
    htmlFor="surname"
    className={styles.registerLabel}>
      Surname
      </label>
    <input
      type="text"
      id="surname"
      value={surname}
      onChange={(e) => setSurname(e.target.value)}
      required
      className="register-input"
    />
  </div>

  <div className={styles.div3}>
    <label htmlFor="email"
    className={styles.registerLabel}><p>Email</p></label>
    <input
      type="email"
      id="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required
      className="register-input-mail"
    />
  </div>

  <div className={styles.div4}>
    <label htmlFor="email"
    className={styles.registerLabel}><p>Confirm Email</p></label>
    <input
      type="email"
      id="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required
      className="register-input-mail"
    />
  </div>

  <div className={styles.div5}>
    <label 
    htmlFor="password"
    className={styles.registerLabel}>
      Password
      </label>
    <input
      type="password"
      id="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      required
      className="register-input"
    />
  </div>

  <div className={styles.div6}>
    <label 
    htmlFor="confirmPassword"
    className={styles.registerLabel}>
      Confirm Password
      </label>
    <input
      type="password"
      id="confirmPassword"
      value={confirmPassword}
      onChange={(e) => setConfirmPassword(e.target.value)}
      required
      className="register-input"
    />
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