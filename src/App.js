//basic imports
import React from "react";

//our imports
import styles from "./App.module.css";
import { Cards } from "./components/Cards/Cards";
import { CountryPicker } from "./components/CountryPicker/CountryPicker";
import { fetchingData } from "./api/api";
import coronaImage from "./images/image.png";

import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      "Montserrat",
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(","),
  },
});

class App extends React.Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchingData();
    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchingData(country);
    this.setState({ data: fetchedData });
  };

  render() {
    return (
      <div className={styles.container}>
        <ThemeProvider theme={theme}>
          {/* <img className = {styles.image} src={coronaImage} alt="COVID-19"/> */}
          <h1 className={styles.header}>Corona Tracker</h1>
          <CountryPicker handleCountryChange={this.handleCountryChange} />
          <Cards data={this.state.data} />
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
