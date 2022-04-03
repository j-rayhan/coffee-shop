import { NextPage } from 'next'
import styles from '../styles/Home.module.css'

const HomeSection: NextPage = () => {
  return (
    <section className={styles.home}>
      <div className={styles.content}>
        <h3 className={styles.title}>fresh coffee in the morning</h3>
        <p className={styles.text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s</p>
        {/* order btn */}
        <a href="/checkout" className={`btn ${styles.btn}`}>get yours now</a>
      </div>
    </section>
  )
}

export default HomeSection;
