import Head from 'next/head'
import withHeaderMenu from '../component/withMenu'
import blog1 from '../assets/images/blog-1.jpeg'
import blog2 from '../assets/images/blog-2.jpeg'
import blog3 from '../assets/images/blog-3.jpeg'
import styles from '../styles/Blog.module.css'
import Image, { StaticImageData } from 'next/image'
type blog = {
  key: string,
  image: StaticImageData
}
const blogList: blog[] = [
  {
    key: '1',
    image: blog1
  },
  {
    key: '2',
    image: blog2
  },
  {
    key: '3',
    image: blog3
  },
]
const Blog: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Responsive Coffee Shop Blog Page</title>
      </Head>
      <section className={styles.blog}>
        <h1 className="heading"> our <span className='span'>blogs</span></h1>
        <div className={styles.boxContainer}>
          {
            blogList.map(({ key, image }) => (
              <div key={key} className={styles.box}>
                <div className={styles.image}>
                  <Image src={image} alt='blog' />
                </div>
                <div className={styles.content}>
                  <a href='https://' className={styles.title}>testy and refresh coffee</a>
                  <span className={styles.span}> by admin / 21st may, 2022</span>
                  <p className={styles.text}>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                  <a href='#' className='btn'>read more</a>
                </div>
              </div>
            ))
          }
        </div>
      </section>
    </div>
  )
}

export default withHeaderMenu(Blog);
