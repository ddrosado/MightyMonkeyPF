import Cards from "../../components/cards/Cards";
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <h1>home</h1>
      <Cards />
    </div>
  )
}
