//basic imports
import React from 'react';

//our imports
import styles from './App.module.css';
import { Cards } from './components/Cards/Cards';
import { fetchingData } from './api/api';

//third party imports

class App extends React.Component {
  
  state = {
    data : {}
  }

  async componentDidMount() {
    const fetchedData = await fetchingData();
    this.setState({data : fetchedData});
  }

  render() {
    return (
      <div className={styles.container}>
        <Cards data={this.state.data} />
      </div>
    );  
  }
}

export default App;
