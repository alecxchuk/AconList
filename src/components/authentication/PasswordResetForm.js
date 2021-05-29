import React , { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper'
import Alert from '@material-ui/lab/Alert';
import Collapse from '@material-ui/core/Collapse';
import { Link } from "@reach/router";
import { auth } from "../../auth/firebase";
import '../styling/SignIn.css'

const useStyles = makeStyles((theme) => ({
  button: {
    //margin: theme.spacing(1),
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    fontWeight: 'bold',
    //width: '80%',
      width: '100%',
    textTransform: 'none'

  },
  margin:{
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4)
      //height: '90%',
  },

  paddingBottom: {
    paddingBottom:theme.spacing(2)
  },

  root: {
    width: '100%',
    '& > *': {
      //display:'block',
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
      width: '100%',
    },
  },

  noMargin: {
    margin:0,
    padding:0
  }
}));

export default function PasswordResetForm() {
  const classes = useStyles();

  // State to store email, password,
  const [email, setEmail] = useState("");
  const [emailHasBeenSent, setEmailHasBeenSent] = useState(false);
  const [error, setError] = useState(null);

  const [checked, setChecked] = React.useState({email:false,pass:false});

  const invalidEmail = 'Please enter a valid email address'
  const noEmail = 'Please enter an email'
  const noPassword = 'Please enter a password'
  const invalidPassword = 'Password must have at least 6 characters'
  const passwordCase = 'Password must contain lowercase and uppercase letters'



  // Triggered when a user inputs data into the form
  const onChangeHandler = event => {
    // Get the id and value of the input  being edited
    const {id, value} = event.currentTarget;
    // If the id is userEmail
    if (id === "userEmail") {
      // Update the state with the user email
      setEmail(value);
      // Update the checked state for email to indicate the input email box is
      // not empty and hide the alert message
      setChecked({
        ...checked,
        email:false
      })
    }
  };

  // Triggered when any of the input boxes is empty when the signUp button is clicked
  const errorTest = () => {
    // if email box is empty
    if (email === '') {
      // Update the checked state for email to indicate the input email box is
      // empty and display an alert message
      setChecked({
        ...checked,
        email:true
      })
    }

  }

  //sends a reset link to the email if the user has an account
  // If the user does not have an account with our app, this function throws an error
  const sendResetEmail = event => {
    if ( email !== '' ) {
    event.preventDefault();
    auth
      .sendPasswordResetEmail(email)
      .then(() => {
        setEmailHasBeenSent(true);
        setTimeout(() => {setEmailHasBeenSent(false)}, 3000);
      })
      .catch(() => {
        setError("Error resetting password");
      });
    } else {
      errorTest()
    }
  };
  return (
    <React.Fragment>
      <CssBaseline />
        <Grid
          style={{  height: '100vh', }}
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
        <Paper elevation={3} >
        <Grid
          className={classes.margin}
          container
          direction="column"
          justify="center"
          alignItems="center">

          <Typography className={classes.paddingBottom}  variant="h4" align="center">
            Reset your Password
          </Typography>

          <Typography style={{width:'70%'}}className={classes.paddingBottom}  variant="body2" align='center'>
            Enter your email address to reset your password
          </Typography>

          <div className={classes.root} noValidate autoComplete="off">
          <TextField
            id="userEmail"
            label="Email or Phone"
            variant="outlined"
            size="medium"
            fullWidth='true'
            onChange={event => onChangeHandler(event)}
          />
          <Collapse className={classes.noMargin} in={checked.email}><Alert  severity="error">Email or Phone Required!</Alert></Collapse>

            <div style={{marginLeft:'auto'}} >
            <Link to="/" className="Links">
              Return to sign in page?
            </Link>
            </div>

          </div>

          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            onClick={event => {
              sendResetEmail(event);
            }}
          >
            <Typography  variant="h6" >
              Reset Password
            </Typography>
          </Button>
          </Grid>
          </Paper>
        </Grid>
    </React.Fragment>
  );
}
