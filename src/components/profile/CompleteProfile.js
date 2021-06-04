import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Stepper from './Stepper'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {

  },
  fillwidth:{
    //margin:theme.spacing(2),
    margin:theme.spacing(2)
  },
  nextButton: {
    //marginRight:theme.spacing(2)
    padding:theme.spacing(2)
  },
  skipButton: {
    marginRight:theme.spacing(1),
  }

}));
export default function CompleteProfile() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
    <Grid
      style={{ minHeight:'100vh', backgroundColor:""}}
      container
      direction="column"
      alignItems="center"
      >
        <Grid >
          <Typography variant="h3" style={{padding:24}}>
          Complete Your Profile
          </Typography>
        </Grid>
          <Grid container alignItems="center" justify="center" style={{backgroundColor:""}}>
          <Stepper />
          </Grid>
        {/*<Grid
          style={{ backgroundColor:'', height:'100vh',width:'25vw'}}
          container
          direction="column"
          justify="center"
          alignItems="center">

        <Grid container
          justify="center">
          <Typography variant="h3">
          What's your location?
          </Typography>
        </Grid>
        <Grid container  >
          <TextField
            className={classes.fillwidth}
            id="displayName"
            label="Choose a location" variant="outlined"
            size="medium"  margin='none' fullWidth
            color="secondary"
          />
        </Grid>
        <Grid container justify="flex-end" className={classes.nextButton} >
          <Button className={classes.skipButton} size="small" variant="contained" color="primary">
            Skip
          </Button>
          <Button size="small" variant="contained" color="primary">
            Next
          </Button>
        </Grid>
      </Grid>*/}
    </Grid>
    </div>
  );
}
