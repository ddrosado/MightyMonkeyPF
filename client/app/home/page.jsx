import styles from './page.module.css'
import Banner from "../../components/banner/Banner";
import InfoHome from "../../components/infoHome/InfoHome";
import Publicity from "../../components/publicity/Publicity";
<<<<<<< HEAD
import InfoReviews from '../../components/infoReviews/InfoReviews';
=======
import FormReview from "../../components/formReview/FormReview";
import InfoReviews from "../../components/infoReviews/InfoReviews";
>>>>>>> 4cc2ab1fed9a365c5c88be94ca5766e3dda298cc


export default async function Home() {
  return (
    <div className={styles.homeContainer}>
      <Banner />
      <Publicity />
      <InfoHome />
<<<<<<< HEAD
      <InfoReviews/>
=======
      {/* <FormReview />
      <InfoReviews/> */}
>>>>>>> 4cc2ab1fed9a365c5c88be94ca5766e3dda298cc
    </div>
  )
}
