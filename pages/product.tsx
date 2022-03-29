import { faEye, faHeart, faSearch, faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image';
import withHeaderMenu from '../component/withMenu';
import product1 from '../assets/images/product-1.png'
import product2 from '../assets/images/product-2.png'
import product3 from '../assets/images/product-3.png'

import styles from '../styles/Product.module.css'
const products = [
  {
    key: '1',
    image: product1,
  },
  {
    key: '2',
    image: product2,
  },
  {
    key: '3',
    image: product3,
  },

]
const Product: React.FC = () => {
  return (
    <>
      <Head>
        <title>Responsive Coffee Shop Product Page</title>
      </Head>
      <section className={styles.product}>
        <h1 className="heading"> our <span className='span'>products</span></h1>
        <div className={styles.boxContainer}>
        {products.map(({key, image }) => (
            <div key={key} className={styles.box}>
              <div className={styles.icons}>
                <FontAwesomeIcon icon={faSearch} className={styles.icon} />
                <FontAwesomeIcon icon={faHeart} className={styles.icon} />
                <FontAwesomeIcon icon={faEye} className={styles.icon} />
              </div>
              <div className={styles.image}>
                <Image src={image} alt="product" />
              </div>
              <div className={styles.content}>
                <h3 className={styles.title}>fresh coffee</h3>
                <div className={styles.stars}>
                  <FontAwesomeIcon icon={faStar} className={styles.icon} />
                  <FontAwesomeIcon icon={faStar} className={styles.icon} />
                  <FontAwesomeIcon icon={faStar} className={styles.icon} />
                  <FontAwesomeIcon icon={faStar} className={styles.icon} />
                  <FontAwesomeIcon icon={faStarHalfAlt} className={styles.icon} />
                </div>
                <div className={styles.price}>$15.99/- <span className={styles.span}>$20.50/-</span></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default withHeaderMenu(Product);
