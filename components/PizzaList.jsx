import React from 'react'
import styles from '../styles/PizzaList.module.css';
import PizzaCard from './PizzaCard';

const PizzaList = ({pizzaList}) => {
  return (
    <div className={styles.container}>
    <h1 className={styles.title}>THE GREATEST PIZZA</h1>
    <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero repudiandae illo itaque est, vel fugit asperiores quo cum odio voluptatum maxime perspiciatis aspernatur provident dolores. Blanditiis unde totam officiis et?
    </p>

    <div className={styles.wrapper}>
      {pizzaList.map((pizza) =>(
        <PizzaCard key={pizza._id} pizza={pizza} />
      ))}
    </div>
        
    </div>
  )
}

export default PizzaList