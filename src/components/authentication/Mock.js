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

export default function Mock() {
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [error, setError] = useState(null);

  const [checked, setChecked] = React.useState({fullname:false, email:false,pass:false});

  const onChangeHandler = event => {
    const { id, value } = event.currentTarget;
    if (id === "userEmail") {
      setEmail(value);
      setChecked({
        ...checked,
        email:false
      })
    } else if (id === "userPassword") {
      setPassword(value);
      setChecked({
        ...checked,
        pass:false
      })
    } else if (id === "displayName") {
      setDisplayName(value);
      setChecked({
        ...checked,
        fullname:false
      })
    }
  };
  const errorTest = () => {
    if (email === '') {
      setChecked({
        ...checked,
        email:true
      })
    }
    if (password === '') {
      setChecked(prevState =>({...prevState,pass:true}))
    }
    if (displayName === '') {
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
            onClick={errorTest}
          >
            <Typography  variant="h6" >
              Sign Up
            </Typography>
          </Button>
          <Typography className={classes.fontSize} component="div"  variant="body2" color="textSecondary" align="center" >
            By signing up, I agree to AconList's <a href="">Terms of Service</a> and <a href="">Privacy Policy</a>
          </Typography>
          <Typography className={classes.fontSize} variant="body2" align="center" >
            Already have an account? <a href=""> Sign in </a>
          </Typography>
          </Grid>
          </Paper>
        </Grid>
    </React.Fragment>
  );
}
