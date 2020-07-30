import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  
  form: {
    backgroundColor: "white",
    margin: theme.spacing(10),
    width: "40ch",
  },
}));

export default function SearchTextField(props) {
  const classes = useStyles();

  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      <TextField
        className={classes.form}
        id="filled-basic"
        label="Search Books"
        variant="filled"
        onChange={props.handleInputChange}
        value={props.searchTerm}
      />
    </Box>
  );
}
