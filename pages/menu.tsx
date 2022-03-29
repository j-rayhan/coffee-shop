import Head from "next/head";
import Image, { StaticImageData } from "next/image";
import withHeaderMenu from "../component/withMenu";
import menu1 from '../assets/images/menu-1.png'
import menu2 from '../assets/images/menu-2.png'
import menu3 from '../assets/images/menu-3.png'
import menu4 from '../assets/images/menu-4.png'
import menu5 from '../assets/images/menu-5.png'
import menu6 from '../assets/images/menu-6.png'
import styles from '../styles/Menu.module.css'
type menu = {
  id: number,
  key: string,
  title: string,
  image: StaticImageData,
  price: number,
  oldPrice: number,
}
const menuList: menu[] = [
  {
    id: 1,
    key: '1',
    title: 'testy and healthy',
    image: menu1,
    price: 15.99,
    oldPrice: 20.50,
  },
  {
    id: 2,
    key: '2',
    title: 'testy and healthy',
    image: menu2,
    price: 15.99,
    oldPrice: 20.50,
  },
  {
    id: 3,
    key: '3',
    title: 'testy and health',
    image: menu3,
    price: 15.99,
    oldPrice: 20.50,
  },
  {
    id: 4,
    key: '4',
    title: 'testy and health',
    image: menu4,
    price: 15.99,
    oldPrice: 20.50,
  },
  {
    id: 5,
    key: '5',
    title: 'testy and health',
    image: menu5,
    price: 15.99,
    oldPrice: 20.50,
  },
  {
    id: 6,
    key: '6',
    title: 'testy and health',
    image: menu6,
    price: 15.99,
    oldPrice: 20.50,
  },
]
const Menu: React.FC = () => {
  return (
    <>
      <Head>
        <title>Responsive Coffee Shop Menu Page</title>
      </Head>
      <section className={styles.menu}>
        <h1 className='heading'>Our <span className="span">Menu</span></h1>
        <div className={styles.boxContainer}>
          {
            menuList.map(({ key, title, price, oldPrice, image }) => (
              <div key={key} className={styles.box}>
                <Image className={styles.image} src={image} alt={title} />
                <h3 className={styles.title}>{title}</h3>
                <div className={styles.price}>${price}/- <span className={styles.span}>${oldPrice}/-</span></div>
                <a href="https://" className="btn">add to cart</a>
              </div>
            ))
          }
        </div>
      </section>
    </>
  )
};

export default withHeaderMenu(Menu);
