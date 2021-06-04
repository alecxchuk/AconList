import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import {withStyles, makeStyles} from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Stepper from "./Stepper";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import Tooltip from "@material-ui/core/Tooltip";
import AutoComplete from './AutoComplete'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: "100%"
  },
  container: {},
  fillwidth: {
    //margin:theme.spacing(2),
    margin: theme.spacing(2)
  },
  nextButton: {
    //marginRight:theme.spacing(2)
    padding: theme.spacing(2)
  },
  skipButton: {
    marginRight: theme.spacing(1)
  }
}));

export default function CompleteProfile() {
  const classes = useStyles();

  const LightTooltip = withStyles(theme => ({
    arrow: {
      //color: theme.palette.common.white,
      //boxShadow: theme.shadows[1],
    },
    tooltip: {
      backgroundColor: theme.palette.common.white,
      //fontWeight: "bold",
      color: "rgba(0, 0, 0, 0.87)",
      boxShadow: theme.shadows[1],
      fontSize: 12
    }
  }))(Tooltip);

  const location =
  ""

  const locationText =
    <Typography variant="body2" align="justify">Help us connect you with clients around your vicinity. You can always change your location.</Typography>
  return (
    <div className={classes.root} style={{backgroundColor: ""}}>
      <Grid container justify="center" alignItems="center" spacing={0}>
        <Grid container justify="center" item xs={9}>
          <Typography variant="h4" style={{backgroundColor: ""}}>
            What's your location?
          </Typography>
        </Grid>
        <Grid container item xs>
          <LightTooltip title={locationText} placement="top" arrow>
            <HelpOutlineIcon />
          </LightTooltip>
        </Grid>
      </Grid>
      <Grid container>
        <AutoComplete />
        {/*<TextField
          className={classes.fillwidth}
          id="displayName"
          label="Choose a location"
          variant="outlined"
          size="medium"
          margin="none"
          fullWidth
          color="secondary"
        />*/}
      </Grid>
      {/*<Grid container justify="flex-end" className={classes.nextButton} >
          <Button className={classes.skipButton} size="small" variant="contained" color="primary">
            Skip
          </Button>
          <Button size="small" variant="contained" color="primary">
            Next
          </Button>
        </Grid>*/}
    </div>
  );
}
