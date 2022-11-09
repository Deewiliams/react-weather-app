import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const CurrentWeather = ({ data }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <p style={{ fontSize: 30 }}>{data.city}</p>
                <p style={{ fontSize: 20 }}>{data.weather[0].description}</p>
                <p style={{ fontSize: 70 }}>{Math.round(data.main.temp)}°C</p>
              </Grid>
              <Grid item xs={6}>
                <img src={`icons/${data.weather[0].icon}.png`} alt="weather" />
                <p style={{ color: "black", fontWeight: "bold", fontSize: 30 }}>
                  Details
                </p>
                <div
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <div>
                    <p>Feels like</p>
                    <p>Wind</p>
                    <p>humidity</p>
                    <p>pressure</p>
                  </div>
                  <div style={{ color: "black", fontWeight: "bold" }}>
                    <p> {Math.round(data.main.feels_like)}°C</p>
                    <p>{data.wind.speed} m/s</p>
                    <p>{data.main.humidity}%</p>
                    <p>{data.main.pressure} hPa</p>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default CurrentWeather;
