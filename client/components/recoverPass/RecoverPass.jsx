import styles from "./Recover.module.css"
import BackArrow from "../goBack/BackArrow";

const Recover = (props) => {
  // console.log({props})
  return(
    <div>
      <BackArrow 
      changeComponent={props.changeComponent}/>
      <div className={styles.recoverContainer}>


        <div className={styles.recoverEmailContainer}>
        <p>
          Email Adress
        </p>
        </div>

      <div className={styles.recoverInputContainer}>
        <input
      type="email"
      id="recovermail"
      name="recovermail"
      placeholder="youremail@mail.com"
      value=""
      class="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    />
    </div>

        <button 
  type="submit" 
  className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-slate-300 rounded shadow">
    Send Reset Code
    </button>
        </div>
      </div>
  )
  };
  
  export default Recover;