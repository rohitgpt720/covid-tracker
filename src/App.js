//basic imports
import React from 'react';

//our imports
import styles from './App.module.css';
import { Cards } from './components/Cards/Cards';

//third party imports

function App() {
  return (
    <div className={styles.container}>
      <Cards />
    </div>
  );
}

export default App;
