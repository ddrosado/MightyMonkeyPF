import styles from "../../app/login.module.css"
import { faCircleLeft } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BackArrow = (props) => {
  return(
    <div className={styles.recoverArrow}>
      <FontAwesomeIcon icon={faCircleLeft}
      onClick={(e) => {
        e.preventDefault(); // Prevent the default link behavior
        props.changeComponent('signIn'); // Call the changeComponent function
      }} />
      </div>
  )
    
  };
  
  export default BackArrow;