import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        flexGrow: 1,
        
    },

  appbar: {
    backgroundColor: "#e64a19",
    padding: 20,
  },
  button: {
    color: "white",
    margin: "auto",
    marginRight: theme.spacing(2)
  },
}));

export default function SearchAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            Google Book Search
          </Typography>
          <Button color="inherit" href="/search" >
            Search
          </Button>
          <Button color="inherit" href="/saved" >
            Saved Books
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
