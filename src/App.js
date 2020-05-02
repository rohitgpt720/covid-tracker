//basic imports
import React from 'react';

//our imports
import styles from './App.module.css';
import { Cards } from './components/Cards/Cards';
import { CountryPicker } from './components/CountryPicker/CountryPicker';
import { fetchingData } from './api/api';
import coronaImage from './images/image.png';

//third party imports

class App extends React.Component {
  
  state = {
    data : {},
    country : ''
  }

  async componentDidMount() {
    const fetchedData = await fetchingData();
    this.setState({data : fetchedData});
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchingData(country);
    this.setState({data : fetchedData});
  }

  render() {
    return (
      <div className={styles.container}>
        <img className = {styles.image} src={coronaImage} alt="COVID-19"/>
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Cards data={this.state.data} />
      </div>
    );  
  }
}

export default App;
