import Head from 'next/head'
import Image from 'next/image'
import withHeaderMenu from '../component/withMenu'
import aboutImg from '../assets/images/about-img.jpeg'
import styles from '../styles/About.module.css'

const About: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Responsive Coffee Shop About Page</title>
      </Head>
      <section className={styles.about}>
        <h1 className='heading'><span className="span">About</span> us</h1>
        <div className={styles.row}>
          <div className={styles.image}>
            <Image src={aboutImg} alt='about' />
          </div>
          <div className={styles.content}>
            <h3 className={styles.title}>what make our coffee special?</h3>
            <p className={styles.text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s </p>
            <p className={styles.text}>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
            <a href='/about-more' className='btn'>learn more</a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default withHeaderMenu(About);
