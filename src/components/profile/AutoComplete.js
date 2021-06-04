import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {withStyles, makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  fillwidth: {
    //margin:theme.spacing(2),
    margin: theme.spacing(2),

  },
}));

export default function ComboBox() {

  const label = (step) => {
    switch (step) {
      case 0:
        return "Choose a location";
        break;
      case 1:
        return "Choose your specialization";
        break;
      case 2:
        return "Choose one";
        break;
      case 3:
        return "Upload Photo";
        break;
      default:

    }
  }
  const classes = useStyles();

  return (
    <Autocomplete
      className={classes.fillwidth}
      id="combo-box-demo"
      label="Choose a location"
      options={top100Films}
      getOptionLabel={(option) => option.title}
      fullWidth
      size="medium"
      renderInput={(params) => <TextField {...params} label="Choose a location" variant="outlined" color="secondary"/>}
    />

  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: 'Rumuibekwe', year: 500102 },
  { title: 'Rumuodara', year: 1972 },
  { title: 'Woji', year: 1974 },
  { title: 'Elelenwe', year: 2008 },
  { title: 'Eneka', year: 1957 },
  { title: "Atali", year: 1993 },
  { title: 'Alakahia', year: 1994 },
  { title: 'Oginigba', year: 2003 },
  { title: 'Megbuesilaru', year: 1966 },
  { title: 'Iriebe', year: 1999 },
  { title: 'Iwofe', year: 2001 },
  { title: 'Eliozu', year: 1980 },
  { title: 'Rumu -okwurusi', year: 1994 },
];
