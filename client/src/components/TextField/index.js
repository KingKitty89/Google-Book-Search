import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Box, TextField }from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(3),
            width: '40ch',
            
        }
    },
    form: {
        backgroundColor: "white"
    }
}));



export default function SearchTextField(props) {
    const classes = useStyles();
    

    return (
        <Box display="flex" alignItems="center" justifyContent="center">
            <form className={classes.root} noValidate autoComplete="off">
                <TextField className={classes.form} id="filled-basic" label="Search Books" variant="filled" onChange={props.handleInputChange} value={props.searchTerm}/>
            </form>
        </Box>
    );
}