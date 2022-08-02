import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function MyNavbar() {
    const classes = useStyles();
    return (
        <AppBar position="static" color="secondary">
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    SCRATCH
                </Typography>
            </Toolbar>
        </AppBar>
    )
}
