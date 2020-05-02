import React, {useState, useEffect} from 'react'
import { NativeSelect, FormControl } from '@material-ui/core'

import styles from './CountryPicker.module.css'

import { fetchCountries } from '../../api/api'
 
export const CountryPicker = ({ handleCountryChange }) => {

  const [fetchedCountries, setFetchedCountries] = useState([])

  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCountries(await fetchCountries());
    }

    fetchAPI();
  }, [setFetchedCountries])
  
  return (
    <div className={styles.container}>
      <p className={styles.content}>Showing data of </p>
      <FormControl className = {styles.formControl}>
        <NativeSelect defaultValue="" onChange={(e)=> handleCountryChange(e.target.value)}>
          <option value="global"> Global </option>
          {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
        </NativeSelect>
      </FormControl>
    </div>    
  )
}
