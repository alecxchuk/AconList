import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import Divider from '@material-ui/core/Divider';
import ViewBids from './ViewBids'
import Chip from '@material-ui/core/Chip';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  jobsPaper : {
    minWidth: '40vw',
  },
  recentJobs : {
    fontWeight: 'bold',
    padding: theme.spacing(2),
  },
  viewAll : {
    margin: theme.spacing(2),
    fontWeight: 'bold'
  },
  title: {
    padding: theme.spacing(1),
    paddingLeft:theme.spacing(2),
    paddingRight:theme.spacing(2),
  },
  jobCatelogPrice: {
    fontWeight: 'bold'
  },
  roost: {
    display: 'flex',
    //justifyContent: 'center',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5),
    margin: 0,
    paddingStart: 0
  },
  chip: {
    marginRight: theme.spacing(0.5),
    marginTop: theme.spacing(1),
    padding: 0,
    //borderRadius:0,
  },
}));
export default function NoJobs() {
  const classes = useStyles();
  const [chipData, setChipData] = React.useState([
    { key: 0, label: 'Electrical' },
    { key: 1, label: 'Electronics' },
    { key: 2, label: 'Technician' },
    { key: 3, label: 'React' },
    { key: 4, label: 'Vue.js' },
  ]);

  // Method to handle clickin a chip
  const handleChipClick = () => {
    console.info('You clicked the Chip.');
  };

  return (
    <Paper elevation={3} className={classes.jobsPaper}>
      <Grid >
        <Typography className={classes.recentJobs} variant="h6">
          Available Jobs Around You
        </Typography>
        <Divider  />
        <div className={classes.title}>
          <Grid
            direction="row"
            container
            justify="space-between">
            <Grid>
              <Typography color="primary" variant="subtitle1" noWrap="true">
                Professional electrician needed for internal conduit wiring
              </Typography>
            </Grid>
            <Grid>
              <Typography
                variant="subtitle1"
                noWrap="true"
                className={classes.jobCatelogPrice}>
                #35,000 - #50,000
              </Typography>
            </Grid>
          </Grid>
          <Grid
            direction="row"
            container
            justify="space-between"
            alignItems="center">
            <Grid>
              <Typography variant="caption" color="textSecondary"noWrap="true">
                Posted 14hrs ago
              </Typography>
            </Grid>
            <Grid direction row >
              <Typography variant="caption" color="textSecondary"noWrap="true">
                 <LocationOnOutlinedIcon style={{fontSize: 14, padding:0, margin:0, alignItems: 'center'}} color="action"/>Elimgbu Port Harcourt
              </Typography>
            </Grid>
          </Grid>
          <Typography  variant="body" align="justify" display="block" >
            I need a certified electrician to work on a three bedroom duplex.
            The job entails laying of the internal conduit pipes, wiring and
            installation of distribution boxs, lighting points and switches.
          </Typography>
          <Grid
            className={classes.roost}
            container
            direction="row"
            justify="flex-start">
            {chipData.map((data) => (
              <li key={data.key}>
                 <Chip
                   label={data.label}
                   className={classes.chip}
                   color="secondary"
                   variant="outlined"
                   clickable
                   onClick={handleChipClick}
                   size="small"
                 />
               </li>
            ))}
          </Grid>
        </div>
        <Grid
          item
          container
          justify="center">
          <Button variant="contained" color='primary' className={classes.viewAll} size="small">
            Show more jobs
          </Button>
        </Grid>
      </Grid>
    </Paper>
  )

}
