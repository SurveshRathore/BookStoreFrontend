import React from "react";
import { AppBar, Box, InputBase, Toolbar, IconButton, TextField, InputAdornment, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
    headerContent: {
        height: '8vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    mainContent: {
        display: 'flex',
        width: '70%',
        height: '90%',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },

    imgContent: {
        display: 'flex',
        width: '13%',
        height: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },

    bookLogo: {
        display: 'flex',
        width: '32%',
        height: '70%',
        justifyContent: 'flex-start',

    },
    bookLogoText: {
        width: '70%',
        height: '50%',

    },

    searchBook: {
        display: 'flex',
        width: '45%',
        height: '70%',
        marginLeft: '7%',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    iconContent: {
        display: 'flex',
        height: '90%',
        width: '13%',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 'auto',

    },
    profileContent: {
        display: 'flex',
        flexDirection: 'column',
    }

})
function Header() {

    const navigate = useNavigate()

    const navigateToCart = () =>{
        navigate('/mycart')
    }
    const classes = useStyles();
    return (

        <AppBar className={classes.headerContent} sx={{ backgroundColor: '#A03037' }}>
            <Box className={classes.mainContent}>
                <Box className={classes.imgContent}>
                    <img className={classes.bookLogo} src="./education.png" width='100%' height='100%' />
                    <span className={classes.bookLogoText}>Bookstore</span>
                </Box>
                <Box className={classes.searchBook}>
                    <TextField variant='standard' placeholder="Search ..." width="70%" size="larger"
                        InputProps={{
                            disableUnderline: true,
                            startAdornment:
                                <InputAdornment position="start">
                                    <SearchOutlinedIcon />
                                </InputAdornment>
                        }}
                    />

                </Box>
                <Box className={classes.iconContent}>
                    
                    <Box className={classes.profileContent}>
                        <Person2OutlinedIcon />
                        <span style={{ fontSize: "10px", marginTop: '1px' }}>Profile</span>
                    </Box>
                    <Box className={classes.profileContent}>
                        <ShoppingCartOutlinedIcon onClick={navigateToCart}/>
                        <span style={{ fontSize: "10px", marginTop: '1px' }}>Cart</span>
                    </Box>
                </Box>
            </Box>
        </AppBar>
    )
}

export default Header
