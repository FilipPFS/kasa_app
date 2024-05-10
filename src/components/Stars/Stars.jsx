import { StarIcon as StarFilled } from '@heroicons/react/24/solid';
import React from 'react';
import styles from "./Stars.module.scss";

const Stars = ({ rating }) => {

  const filledStars = parseInt(rating);
  
  const starsArray = [];
  for (let i = 0; i < 5; i++) {
    if (i < filledStars) {
      starsArray.push(<StarFilled className={styles.starFilled}/>);
    } else {
      starsArray.push(<StarFilled className={styles.starEmpty}/>);
    }
  }

  return (
    <div className={styles.stars}>
      {starsArray.map((star, index) => (
        <span key={index}>{star}</span>
      ))}
    </div>
  );
};

export default Stars;
