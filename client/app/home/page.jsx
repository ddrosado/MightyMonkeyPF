import Cards from "../../components/cards/Cards";
import styles from './page.module.css'
import Banner from "../../components/banner/Banner";

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <Banner/>
      <Cards />
    </div>
  )
}
