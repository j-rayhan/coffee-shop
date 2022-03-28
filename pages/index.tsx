import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../component/header'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      {/* Header menu */}
      <Header />
    </div>
  )
}

export default Home
