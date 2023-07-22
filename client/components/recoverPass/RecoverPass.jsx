import styles from "../../app/login.module.css"
import BackArrow from "../goBack/BackArrow";

const Recover = (props) => {
  // console.log({props})
  return(
    <div>
      <BackArrow 
      changeComponent={props.changeComponent}/>
      <h1>recover</h1>
      </div>
  )
  };
  
  export default Recover;