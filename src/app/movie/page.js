import styles from "../style/common.module.css"
import MovieCard from '../components/MovieCard';
const page= async () => {

  return (
    <section className={styles.movieSection}>
    <div className={styles.container}>
      <h1 className="text-4xl">Series and Movies</h1>
      <div className={styles.card_section}>
  <MovieCard  />
           
      </div>
    </div>
      </section>
  )
}

export default page