// import React from 'react';
// import styles from './About.module.css';
// import { getImageUrl } from "../../utils";

// const About = () => {
//   return (
//     <section className={styles.container}>
//       <h2 className={styles.title}>About</h2>
//       <div   className={StyleSheet.content}>
//         <img
//           src={getImageUrl("about/aboutImage.png")}
//           alt="aboutImage"
//           className={styles.aboutImage}
//         />
//         <ul  className={styles.aboutItems}>
//           <li   className={styles.aboutItemText}>
//             <img
//               src={getImageUrl("about/front.png")}
//               alt="cursorImage"
//                className={styles.aboutItem}
//             /> 
//             <div>
                
//               <h3>Full Stack Developer</h3>
//               <p>Experienced in developing web applications using a variety of technologies, including React and ExpressJS. I bring a comprehensive understanding of both frontend and backend development to deliver full-featured solutions.</p>
//             </div>
//           </li>
//           <li   className={styles.aboutItemText}>  
//             <img
//               src={getImageUrl("about/cursorIcon.png")}
//               alt="frontendIconImage"
//             //   className={styles.aboutItem}
//             className={styles.icon}

//             /> 
//             <div>
//               <h3>Frontend Developer</h3>
//               <p>Specialized in crafting responsive, user-friendly interfaces with React. I enjoy turning design ideas into seamless and interactive user experiences.</p>
//             </div>
//           </li>
//           <li   className={styles.aboutItemText}>
//             <img
//               src={getImageUrl("about/serverIcon.png")}
//               alt="backendIconImage"
//             //   className={styles.aboutItem}

//               className={styles.icon}
//             /> 
//             <div>
//               <h3>Backend Developer</h3>
//               <p>Proficient in building robust APIs with ExpressJS  </p>  </div>
//           </li>
          
//           <li   className={styles.aboutItemText}>
//             <img
//               src={getImageUrl("about/mern.png")}
//               alt="mernIconImage"
//               className={styles.icon}
//             // className={styles.aboutItem}

//             /> 
//             <div>
//               <h3>MERN Stack Developer</h3>
//               <p>Currently deepening my expertise in the MERN stack. I am eager to leverage MongoDB, ExpressJS, React, and Node.js to build dynamic and scalable applications.</p>
//             </div>
//           </li>
//           <li    className={styles.aboutItemText}>
//             <img
//               src={getImageUrl("about/apiIcon.png")}
//               alt="apiIconImage"
//               // className={styles.icon}
              
//             className={styles.aboutItem}

//             /> 
//             <div>
//               <h3>API Development</h3>
//               <p>Certified Postman API Fundamentals Student Expert. I have a solid grasp of API design and testing, ensuring seamless communication between different parts of an application.</p>
//             </div>
//           </li>
//         </ul>
//       </div>
//     </section>
//   );
// }

// export default About;

import React, { useState } from 'react';
import styles from './About.module.css';
import { getImageUrl } from "../../utils";

const aboutItems = [
  {
    title: "Full Stack Developer",
    description:
      "Experienced in developing web applications using a variety of technologies, including React and ExpressJS. I bring a comprehensive understanding of both frontend and backend development to deliver full-featured solutions.",
    image: getImageUrl("about/front.png"),
  },
  {
    title: "Frontend Developer",
    description:
      "Specialized in crafting responsive, user-friendly interfaces with React. I enjoy turning design ideas into seamless and interactive user experiences.",
    image: getImageUrl("about/cursorIcon.png"),
  },
  {
    title: "Backend Developer",
    description:
      "Proficient in building robust APIs with ExpressJS.",
    image: getImageUrl("about/serverIcon.png"),
  },
  {
    title: "MERN Stack Developer",
    description:
      "Currently deepening my expertise in the MERN stack. I am eager to leverage MongoDB, ExpressJS, React, and Node.js to build dynamic and scalable applications.",
    image: getImageUrl("about/mern.png"),
  },
  {
    title: "API Development",
    description:
      "Certified Postman API Fundamentals Student Expert. I have a solid grasp of API design and testing, ensuring seamless communication between different parts of an application.",
    image: getImageUrl("about/apiIcon.png"),
  },
];

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % aboutItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? aboutItems.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>About</h2>
      <div className={styles.slider}>
        <button onClick={prevSlide} className={styles.arrowButton}>
          &#8249;
        </button>
        <div className={styles.content}>
          <img
            src={aboutItems[currentIndex].image}
            alt={aboutItems[currentIndex].title}
            className={styles.aboutImage}
          />
          <div className={styles.textContent}>
            <h3>{aboutItems[currentIndex].title}</h3>
            <p>{aboutItems[currentIndex].description}</p>
          </div>
        </div>
        <button onClick={nextSlide} className={styles.arrowButton}>
          &#8250;
        </button>
      </div>
    </section>
  );
};

export default About;
