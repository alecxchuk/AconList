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
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
/*  border: {
    border:
  },*/
  defaultProps : {

    minWidth: '60vw',
    marginTop: theme.spacing(2)

  },
  bids : {
    minWidth: '20vw',
    marginLeft: theme.spacing(2),
    //height: 'inherit'
  },
  jobsPaper : {
    minWidth: '40vw',
  },
  recentJobs : {
    fontWeight: 'bold',
    padding: theme.spacing(2),

  },
  viewAll : {
    padding: theme.spacing(2),
  },
  searchIcon : {
    //marginBottom: theme.spacing(2),
  },
  browse: {
    padding: theme.spacing(8)
  },
  findJobs: {
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
          <Grid

            >
        <Typography color="primary" variant="subtitle1" noWrap="true">
          Professional electrician needed for internal conduit wiring
        </Typography>
        </Grid>
        <Grid
          >
        <Typography variant="subtitle1" noWrap="true" className={classes.jobCatelogPrice}>
          #35,000 - #50,000
        </Typography>
        </Grid>
        </Grid>
        <Typography variant="caption" color="textSecondary"noWrap="true">
          Posted 14hrs ago
        </Typography>
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
        ))
        }
        </Grid>
        </div>
        <Typography color='primary' className={classes.viewAll}>
          Find Jobs
        </Typography>
      </Grid>
    </Paper>
  )

}
