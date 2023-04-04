import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles({
    footerPage: {
        display: 'flex',
        width: '100vw',
        height: '6vh',
        backgroundColor: '#2E1D1E',
        justifyContent: 'center',
        alignItems: 'center'
    },

    footerText: {
        display: 'flex',
        width: '75%',
        height: '70%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        color: 'white'
    },
})

function Footer() {

    const classes = useStyles();
    return (
        <Box className={classes.footerPage}>
            <span className={classes.footerText}>Copyright &#169; 2023. Bookstore Private Limited. All Rights Reserved</span>
        </Box>
    )

}

export default Footer