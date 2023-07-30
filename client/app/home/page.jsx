import Image from "next/image";
import Cards from "../../components/cards/Cards";
import styles from './page.module.css'
import homeImage from '../../assets/images/mmclub.jpg'
import Banner from "../../components/banner/Banner";

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <Banner/>
      <Cards />
    </div>
  )
}
