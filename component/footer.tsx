import Link from "next/link";
import React from "react";
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram, faPinterest } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from '../styles/Footer.module.css'

const Footer: React.FC = () => {

  return (
    <section className={styles.footer}>
      {/* Share icons */}
      <div className={styles.share}>
          <FontAwesomeIcon className={styles.faIcon} icon={faFacebookF} />
          <FontAwesomeIcon className={styles.faIcon} icon={faTwitter} />
          <FontAwesomeIcon className={styles.faIcon} icon={faLinkedinIn} />
          <FontAwesomeIcon className={styles.faIcon} icon={faInstagram} />
          <FontAwesomeIcon className={styles.faIcon} icon={faPinterest} />
      </div>
      <div className={styles.links}>
        <Link href='/' >home</Link>
        <Link href='/about' >about</Link>
        <Link href='/menu' >menu</Link>
        <Link href='/product' >product</Link>
        <Link href='/preview' >preview</Link>
        <Link href='/contact' >contact</Link>
        <Link href='/blog' >blog</Link>
      </div>
      <div className={styles.credit}>created by <span>mr. j-rayhan </span> | all rights reserved</div>
    </section>
  )
};

export default Footer;
