import Cards from "../../components/cards/Cards";
import styles from './page.module.css'
import Banner from "../../components/banner/Banner";
import InfoReviews from "../../components/infoReviews/InfoReviews"
import InfoHome from "../../components/infoHome/InfoHome";

export default async function Home() {
  return (
    <div className={styles.homeContainer}>
      <Banner/>
      <Cards />
      <InfoHome />
      {/* <InfoReviews/> */}
    </div>
  )
}
