
import React from 'react';
import Hero from './components/Hero/Hero';
import styles from './App.module.css';
import Navbar from './components/Navbar/Navbar';
import About from './components/about/About';

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About/>
    </div>
  );
}

export default App;
