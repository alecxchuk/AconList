import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button';
import NoJobsFound from './NoJobs';
import ViewBids from './ViewBids'
import JobsAround from './JobsAround';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(1)
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },

  defaultProps : {
    bgcolor: 'background.paper',
    m: 1,
    style: { width: '5rem', height: '5rem' },
    borderColor: 'text.primary',
    borderStyle: 'solid',
    width: '50%',
    height: '50%'
  },
  recentJobs : {
    fontWeight: 'bold',
    padding: theme.spacing(2),
  },
  viewAll : {
    padding: theme.spacing(2),
  },
  container: {
    [theme.breakpoints.down("sm")]: {
      backgroundColor: theme.palette.secondary.main,
    },
    [theme.breakpoints.up("md")]: {
      backgroundColor: theme.palette.primary.main,
    },
    [theme.breakpoints.up("lg")]: {
      backgroundColor: "green",
    },
    [theme.breakpoints.up("xl")]: {
      backgroundColor: "blue",
      width: '40vw'
    },
  }
}));

export default function Dashboard() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.root}>
        <Grid
          direction="row"
          container
          justify="center"
          >
            <Grid
              className={classes.container}
              direction="column"
              item
              justify="center" >
              <NoJobsFound />
              <div style={{marginTop:8 , marginBottom: 8}}>
              <JobsAround />
              </div>

            </Grid>

            <Grid
              justify="center" >
              <ViewBids />
            </Grid>
          </Grid>
      </div>
    </React.Fragment>
  );
}
