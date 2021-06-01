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

const useStyles = makeStyles((theme) => ({
  bids : {
    minWidth: '20vw',
    marginLeft: theme.spacing(2),
    //height: 'inherit'
  },
  bidCount : {
    fontWeight: 'bold',
    padding: theme.spacing(2),

  },
  browse: {
    padding: theme.spacing(8)
  },

}));
export default function ViewBids() {
  const classes = useStyles();
  return (
    <Paper elevation={3}  className={classes.bids}>
      <Grid
        elevation={3}
        direction= "column"
        container
        >
        <Typography className={classes.bidCount} variant="h6">
          My Bids
        </Typography>
        <Divider light />
        <Grid
          className={classes.browse}
          container
          direction="column"
          justify="center"
          alignItems="center">
          <Typography className={classes.bidCount}>
            You have 10 bids left
          </Typography>
          <Button style={{width: '100%'}} variant="outlined" color="secondary" size="small">
          <Typography variant="h6">
            View Bids
          </Typography>
          </Button>
        </Grid>
      </Grid>
    </Paper>
  )
}
