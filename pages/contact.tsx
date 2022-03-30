import { faEnvelope, faPhone, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Head from 'next/head'
import withHeaderMenu from '../component/withMenu'
import styles from '../styles/Contact.module.css'

const Contact: React.FC = () => {
  return (
    <>
      <Head>
        <title>Responsive Coffee Shop Contact Page</title>
      </Head>
      <section className={styles.contact}>
        <h1 className="heading"> contact <span className='span'>us</span></h1>
        <div className={styles.row}>
        <iframe className={styles.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.679349658889!2d90.43126031469102!3d23.829998691648306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c63f1ea325a3%3A0x1d12e560678ff689!2z4KaW4Ka_4Kay4KaV4KeN4Ka34KeH4KakIOCmleCmrOCmsOCmuOCnjeCmpeCmvuCmqA!5e0!3m2!1sbn!2sbd!4v1648552041750!5m2!1sbn!2sbd" allowFullScreen loading="lazy" referrerpolicy="no-referrer-when-downgrade" />
        <form action='' className={styles.form}>
          <h3 className={styles.title}>get in touch</h3>
          <div className={styles.inputBox}>
            <FontAwesomeIcon icon={faUser} className={styles.icon} />
            <input className={styles.input} type={'text'} placeholder='name' />
          </div>
          <div className={styles.inputBox}>
            <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
            <input className={styles.input} type={'email'} placeholder='email' />
          </div>
          <div className={styles.inputBox}>
            <FontAwesomeIcon icon={faPhone} className={styles.icon} />
            <input className={styles.input} type={'number'} placeholder='number' />
          </div>
          <input type="submit" value="contact now" className='btn' />
        </form>
        </div>
        </section>
    </>
  )
}

export default withHeaderMenu(Contact);
