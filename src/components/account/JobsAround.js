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
    padding: theme.spacing(1)
  }
}));
export default function NoJobs() {
  const classes = useStyles();

  return (
    <Paper elevation={3} className={classes.jobsPaper}>
      <Grid >
        <Typography className={classes.recentJobs} variant="h6">
          Available Jobs Around You
        </Typography>
        <Divider  />
        <div className={classes.title}>
        <Typography color="primary" variant="h6">
          Professional electrician needed for internal conduit wiring
        </Typography>
        <Typography  variant="body" align="justify" display="block">
          I need a certified electrician to work on a three bedroom duplex.
          The job entails laying of the internal conduit pipes, wiring and
          installation of distribution boxs, lighting points and switches.
        </Typography>
        </div>
        <Typography color='primary' className={classes.viewAll}>
          View all
        </Typography>
      </Grid>
    </Paper>
  )

}
