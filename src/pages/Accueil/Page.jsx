import React, { useEffect, useState } from 'react'
import styles from "./Page.module.scss";
import homeImg from "../../images/home-img.webp";
import data from "../../data.json";
import Card from '../../components/Card/Card';

const Page = () => {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.imgContainer}>
        <img src={homeImg} alt="L'ocean et les montmagnes" />
        <h1>Chez vous,{windowWidth < 750 && <br />} partout et ailleurs</h1>
      </div>
      <div className={styles.gallery}>{data.map((item) => {
        return (
          <Card
            key={item.id}
            id={item.id}
            cover={item.cover}
            title={item.title}
          />
        )
      })}</div>
    </main>
  )
}

export default Page