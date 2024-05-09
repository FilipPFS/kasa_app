import React from 'react'
import styles from "./About.module.scss"
import nature from "../../images/nature.webp";
import items from "./items";
import Collapse from '../../components/Collapse/Collapse';

const About = () => {


  return (
    <main className={styles.main}>
      <div className={styles.imgContainer}>
        <img src={nature} alt="La nature" />
      </div>

      <div className={styles.collapses}>
        {items.map((item) => {
          return (
            <Collapse
              key={item.id}
              id={item.id}
              title={item.title}
              desc={item.desc}
            />
          )
        })}
      </div>
    </main>
  )
}

export default About