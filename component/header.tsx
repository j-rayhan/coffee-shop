import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import { faSearch, faBars, faCartShopping, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from '../assets/images/logo.png'
import cart1 from '../assets/images/cart-item-1.png'
import cart2 from '../assets/images/cart-item-2.png'
import cart3 from '../assets/images/cart-item-3.png'
import cart4 from '../assets/images/cart-item-4.png'
import styles from '../styles/Header.module.css'

type cart = {
  id: number,
  key: string,
  name: string,
  image: StaticImageData,
  price: number,
}

const cartList: cart[] = [
  {
    id: 1,
    key: '1',
    name: 'cart item 01',
    image: cart1,
    price: 12.99,
  },
  {
    id: 2,
    key: '2',
    name: 'cart item 02',
    image: cart2,
    price: 10.49,
  },
  {
    id: 3,
    key: '3',
    name: 'cart item 03',
    image: cart3,
    price: 11.99,
  },
  {
    id: 4,
    key: '4',
    name: 'cart item 04',
    image: cart4,
    price: 14.99,
  },
]

const Header: React.FC = (props) => {
  return (
    <header className={styles.header}>
      {/* App LOGO */}
      <a href="#logo" className={styles.logo}>
        <Image className={styles.image} src={logo} alt="logo" />
      </a>
      {/* navbar */}
      <nav className={styles.navbar}>
        <Link href="/">
          <a className={styles.menuLink}>Home</a>
        </Link>
        <Link href="/about">
          <a className={styles.menuLink}>About</a>
        </Link>
        <Link href="/menu">
          <a className={styles.menuLink}>Menu</a>
        </Link>
        <Link href="/product">
          <a className={styles.menuLink}>Product</a>
        </Link>
        <Link href="/review">
          <a className={styles.menuLink}>Review</a>
        </Link>
        <Link href="/contact">
          <a className={styles.menuLink}>Contact</a>
        </Link>
        <Link href="/blog">
          <a className={styles.menuLink}>Blog</a>
        </Link>
      </nav>
      {/* Icons Search, Cart, menu */}
      <div className={styles.icons}>
        <div>
          <FontAwesomeIcon className={styles.faIcon} icon={faSearch} />
        </div>
        <div>
          <FontAwesomeIcon className={styles.faIcon} icon={faCartShopping} />
        </div>
        <div>
          <FontAwesomeIcon className={styles.faIcon} icon={faBars} />
        </div>
      </div>
      {/* Search Form */}
      <div className={styles.searchForm}>
        <input type="search" id="search-box" className={styles.input} placeholder="search here..." />
        <FontAwesomeIcon icon={faSearch} className={styles.faIcon} />
      </div>
      {/* Cart items */}
      <div className={styles.cartItemsContainer}>
        {cartList.map(({ key, name, image, price }) => (
          <div key={key} className={styles.cartItem}>
            <FontAwesomeIcon className={styles.faIcon} icon={faTimes} />
            <Image src={image} height={'70%'} width={'100%'} alt="cart1" />
            <div className={styles.content}>
              <h3 className={styles.name}>{name}</h3>
              <div className={styles.price}>${price}/-</div>
            </div>
          </div>
        ))}
        {/* submit btn */}
        <a href="/checkout" className={`btn ${styles.btn}`}>checkout now</a>
      </div>

    </header>
  )
};

export default Header;
