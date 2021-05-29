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
}));

export default function Dashboard() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      {/*<Container maxWidth="md">
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
      </Container>*/}
      <div className={classes.root}>

      <Grid
        style={{  height: '100vh' }}
        direction="column"
        container
        justify="center"
        alignItems="center"
      >
      <NoJobsFound />
      
      </Grid>
      </div>
    </React.Fragment>
  );
}
