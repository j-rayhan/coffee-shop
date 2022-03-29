import { NextPage } from 'next'
import Head from 'next/head'
import withHeaderMenu from '../component/withMenu';
import quoteImg from '../assets/images/quote-img.png'
import review1 from '../assets/images/pic-1.png'
import review2 from '../assets/images/pic-2.png'
import review3 from '../assets/images/pic-3.png'
import styles from '../styles/Review.module.css'
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
const reviews = [
  {
    key: '1',
    image: review1,
  },
  {
    key: '2',
    image: review2,
  },
  {
    key: '3',
    image: review3,
  },

]
const Review: React.FC = () => {
  return (
    <>
      <Head>
        <title>Responsive Coffee Shop Review Page</title>
      </Head>
      <section className={styles.review}>
        <h1 className="heading"> customer&apos;s <span className='span'>review</span></h1>
        <div className={styles.boxContainer}>
          {reviews.map(({ key, image }) => (
            <div key={key} className={styles.box}>

              <Image src={quoteImg} alt="product" />
              <p className={styles.text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s </p>
              <div className={styles.image}>
                <Image src={image} alt="user" />
              </div>
              <h3 className={styles.title}>fresh coffee</h3>
              <div className={styles.stars}>
                <FontAwesomeIcon icon={faStar} className={styles.icon} />
                <FontAwesomeIcon icon={faStar} className={styles.icon} />
                <FontAwesomeIcon icon={faStar} className={styles.icon} />
                <FontAwesomeIcon icon={faStar} className={styles.icon} />
                <FontAwesomeIcon icon={faStarHalfAlt} className={styles.icon} />
              </div>

            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default withHeaderMenu(Review);
