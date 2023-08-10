import styles from './page.module.css'
import Banner from "../../components/banner/Banner";
import InfoHome from "../../components/infoHome/InfoHome";
import Publicity from "../../components/publicity/Publicity";
import InfoReviews from '../../components/infoReviews/InfoReviews';


export default async function Home() {
  return (
    <div className={styles.homeContainer}>
      <Banner />
      <Publicity />
      {/* <Cards /> */}
      <InfoHome />
      <InfoReviews/>
    </div>
  )
}
