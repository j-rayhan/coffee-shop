import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../component/header'
import HomeSection from './home'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Responsive Coffee Shop Home Page</title>
      </Head>
      {/* Header menu */}
      <Header />
      {/* Home section */}
      <HomeSection />
    </div>
  )
}

export default Home
