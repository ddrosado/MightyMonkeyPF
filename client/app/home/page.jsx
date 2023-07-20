import Image from "next/image";
import Cards from "../../components/cards/Cards";
import styles from './page.module.css'
import homeImage from '../../assets/images/mmclub.jpg'

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <Image className={styles.homeImage} src={homeImage}/>
      <Cards />
    </div>
  )
}
