import React from 'react'
import styles from "../styles/Footer.module.css"
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" layout="fill" alt=""  />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>I am the  Light of the World</h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <p className={styles.text}>777 Epignosis Lane #304. 
            <br />Kampala, 77777
            <br />(256) 777 777 777
            </p>
            <p className={styles.text}>777 Epignosis Lane #304. 
            <br />Kampala, 77777
            <br />(256) 777 777 777
            </p>
            <p className={styles.text}>777 Epignosis Lane #304. 
            <br />Kampala, 77777
            <br />(256) 777 777 777
            </p>
            <p className={styles.text}>777 Epignosis Lane #304. 
            <br />Kampala, 77777
            <br />(256) 777 777 777
            </p>
        </div>
        <div className={styles.card}>
            <h1 className={styles.title}>Working Hours</h1>
            <p className={styles.text}>
              Monday Until Friday
              <br />9:00 - 22:00
            </p>
            <p className={styles.text}>
            Monday Until Friday
              <br />9:00 - 22:00
            </p>
            <p className={styles.text}>
            Saturday Until Sunday
              <br />9:00 - 22:00
            </p>
              


        </div>
      </div>
    </div>
  )
}

export default Footer