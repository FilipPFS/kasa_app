import React from 'react'
import styles from "./Page.module.scss";
import homeImg from "../../images/home-img.webp";
import data from "../../data.json";
import Gallery from '../../components/Gallery/Gallery';

const Page = () => {

  return (
    <main className={styles.main}>
      <div className={styles.imgContainer}>
        <img src={homeImg} alt="L'ocean et les montmagnes"/>
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
      <Gallery 
        data = {data}
      />
    </main>
  )
}

export default Page