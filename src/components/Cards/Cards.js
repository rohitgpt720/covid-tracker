//Basic React imports
import React from 'react';

//Our Imports
import styles from './Cards.module.css'

//Third Party Imports
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

export const Cards = ( { data: {confirmed, deaths, recovered, lastUpdate} } ) => {
  if(!confirmed){
    return 'Loading..'
  }
  
  return (
    <div className={styles.container}>
      <Grid container spacing={5} justify="center"> 
        <Grid item component={Card} xs={12} md={3} className = {cx(styles.card,styles.confirmed)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected 
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={confirmed.value}
                duration={1.5}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of active coronavirus cases.
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={4} className = {cx(styles.card,styles.recovered)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recovered 
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={recovered.value}
                duration={1.5}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of people recovered from coronavirus.
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className = {cx(styles.card,styles.deaths)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths 
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={deaths.value}
                duration={1.5}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
            {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of deaths due to coronavirus.
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  )
}
