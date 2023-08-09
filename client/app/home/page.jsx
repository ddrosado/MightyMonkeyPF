import Cards from "../../components/cards/Cards";
import styles from './page.module.css'
import Banner from "../../components/banner/Banner";
import InfoHome from "../../components/infoHome/InfoHome";
import Publicity from "../../components/publicity/Publicity";


export default async function Home() {
  return (
    <div className={styles.homeContainer}>
      <Banner />
      <Publicity />
      {/* <Cards /> */}
      <InfoHome />
      <InfoReviews />
    </div>
  )
}
