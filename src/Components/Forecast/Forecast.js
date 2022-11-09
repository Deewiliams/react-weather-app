import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
    

  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
    padding: 8
  },
}));

const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const Forecast = ({ data }) => {
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );
  console.log("days", forecastDays);

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      {data.list.splice(0, 7).map((item, idx) => (
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
          key={item.idx}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
             <div>
             <Typography className={classes.heading}>
              <img
              width={50}
              height={50}
              src={`icons/${item.weather[0].icon}.png`}
              className="icon-small"
              alt="weather"
            />
              </Typography>
             </div>
             <Typography className={classes.secondaryHeading}>
             {forecastDays[idx]}
             
            
           </Typography>
           
            <Typography className={classes.secondaryHeading}>
             
              {item.weather[0].description}
            </Typography>
            <Typography className={classes.secondaryHeading}>
            </Typography>
            <Typography className={classes.secondaryHeading}>
              {Math.round(item.main.temp_max)}°C /
              {Math.round(item.main.temp_min)}°C
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <label>Pressure:</label>
              <label>{item.main.pressure}</label>

              <label>Humidity:</label>
              <label>{item.main.humidity}</label>

              <label>Clouds:</label>
              <label>{item.clouds.all}%</label>

              <label>Wind speed:</label>
              <label>{item.wind.speed} m/s</label>

              <label>Sea level:</label>
              <label>{item.main.sea_level}m</label>

              <label>Feels like:</label>
              <label>{item.main.feels_like}°C</label>
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default Forecast;
