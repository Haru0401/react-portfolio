import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Gayathiri</h1>
        <p className={styles.description}>
        <p className={styles.description}>
         A passionate MCA student with skills in Python, SQL, and web development using React and ExpressJS.
        Currently wrapping up my MCA, and always up for a good project or a chat. Let’s connect!
</p>

        </p>
        <a href="gayathiri.23mca@kct.ac.in" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/g3-modified.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur}/>
      <div className={styles.bottomBlur}/>

    </section>
  );
};
export default Hero;