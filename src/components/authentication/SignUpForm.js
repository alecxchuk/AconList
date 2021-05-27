import React , { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { FaGoogle } from 'react-icons/fa';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper'
import Alert from '@material-ui/lab/Alert';
import Collapse from '@material-ui/core/Collapse';
import { Link } from "@reach/router";
import { signInWithGoogle, generateUserDocument } from '../../auth/firebase';
import { auth } from "../../auth/firebase";

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
  gridWidth: {
    width: '90%'
  },
  margin:{
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4)
      //height: '90%',
  },
  padding:{
    padding:theme.spacing(2)
  },
  paddingBottom: {
    paddingBottom:theme.spacing(2)
  },
  fontSize: {
    fontSize: 12
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
  bold: {
    fontWeight:'bold'
  },
  boot: {
    //width: '100%',

    '& > * + *': {
      marginTop: theme.spacing(2),



    },
  },
  noMargin: {
    margin:0
  }
}));

export default function SignUpForm() {
  const classes = useStyles();

  // State to store email, password, displayName
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [error, setError] = useState(null);

  const [checked, setChecked] = React.useState({fullname:false, email:false,pass:false});

  // event handler for signing up using email and password
  const createUserWithEmailAndPasswordHandler = async (event, email, password) => {

    if ( email !== '' || password !== '' || displayName !== '' ) {
      event.preventDefault();

      try{
        // create a new user with email and password
        const {user} = await auth.createUserWithEmailAndPassword(email, password);
        // generate a user document for the new user
        generateUserDocument(user, {displayName});
      }
      catch(error){
        setError('Error Signing up with email and password');
      }

      setEmail("");
      setPassword("");
      setDisplayName("");
    } else {
      errorTest()
    }

  };


  // Triggered when a user inputs data into the form
  const onChangeHandler = event => {
    // Get the id and value of the input  being edited
    const { id, value } = event.currentTarget;
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
    } else if (id === "userPassword") { // If the id is 'userPassword'
      // Update the state with the user password
      setPassword(value);
      // Update the checked state for password to indicate the input password
      // box is not empty
      setChecked({
        ...checked,
        pass:false
      })
    } else if (id === "displayName") {
      // Update the state with the user displayName
      setDisplayName(value);
      // Update the checked state for displayName to indicate the input fullname
      // box is not empty
      setChecked({
        ...checked,
        fullname:false
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
    if (password === '') {
      // Update the checked state for password to indicate the input password box
      // is empty and display an alert message
      setChecked(prevState =>({...prevState,pass:true}))
    }
    if (displayName === '') {
      // Update the checked state for displayName to indicate the input displayName box
      // is empty and display an alert message
      setChecked(prevState =>({...prevState,fullname:true}))
    }

  }
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
            Sign Up
          </Typography>

          <Button
            variant="outlined"
            color="secondary"
            className={classes.button}
            startIcon={<FaGoogle size={24}/>}
            onClick={signInWithGoogle}
          >
            <Typography  variant="h6">
              Sign Up with Google
            </Typography>
          </Button>

          <Typography className={classes.padding}  variant="h6" align="center">
            or
          </Typography>

          <div className={classes.root} noValidate autoComplete="off">
          <TextField
            id="displayName"
            label="Full name" variant="outlined"
            size="medium"  margin='none'
            onChange={event => onChangeHandler(event)}
          />
          <div><Collapse in={checked.fullname}><Alert severity="error">Fullname Required!</Alert></Collapse></div>
          <TextField
            id="userEmail"
            label="Email or Phone"
            variant="outlined"
            size="medium"
            fullWidth='true'
            onChange={event => onChangeHandler(event)}
          />
          <Collapse in={checked.email}><Alert  severity="error">Email or Phone Required!</Alert></Collapse>
          <TextField
            id="userPassword"
            label="Password (min 8 characters)"
            type="password"
            autoComplete="current-password"
            variant="outlined"
            size="medium"
            onChange={event => onChangeHandler(event)}
           />
          <Collapse in={checked.pass}><Alert  severity="error">Password Required. It must have at least 8 characters!</Alert></Collapse>
          </div>

          <Button
            variant="contained"
            color="secondary"
            className={classes.button}

            onClick={event => {
              createUserWithEmailAndPasswordHandler(event, email, password);
              
            }}
          >
            <Typography  variant="h6" >
              Sign Up
            </Typography>
          </Button>
          <Typography className={classes.fontSize} component="div"  variant="body2" color="textSecondary" align="center" >
            By signing up, I agree to AconList's <a href="">Terms of Service</a> and <a href="">Privacy Policy</a>
          </Typography>
          <Typography className={classes.fontSize} variant="body2" align="center" >
            Already have an account? ''
            <Link to="/" className="text-blue-500 hover:text-blue-600">
              Sign in here
            </Link>
          </Typography>
          </Grid>
          </Paper>
        </Grid>
    </React.Fragment>
  );
}
