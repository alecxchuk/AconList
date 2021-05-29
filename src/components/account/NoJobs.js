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

    width: '50vw',

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
  }
}));
export default function NoJobs() {
  const classes = useStyles();

  return (
    <Paper elevation={3} >
    <Grid className={classes.defaultProps}>
      <Typography className={classes.recentJobs} variant="h6">
        Recent Jobs
      </Typography>
      <Grid
        className={classes.browse}
        container
        direction="column"
        justify="center"
        alignItems="center">
      <SearchIcon className={classes.searchIcon} style={{ fontSize: 96, paddingBottom: 'theme.spacing(5)'  }} color = "primary"/>
      <Typography className={classes.recentJobs}>
        You currently do not have any job available
      </Typography>
      <Button variant="contained" color="primary" size="large">
      <Typography variant="h6">
        Find Jobs
      </Typography>
      </Button>
      </Grid>

      <Typography color='primary' className={classes.viewAll}>
        View all
      </Typography>
    </Grid>
    </Paper>
  )

}
