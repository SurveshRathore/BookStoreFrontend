import React, { useState } from "react";
import { makeStyles } from "@mui/styles"
import { Button, InputLabel, Paper, TextField } from "@mui/material";
import { loginApi } from "../../services/userService";
import { useNavigate } from "react-router-dom";
const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;

const useStyles = makeStyles({

    LoginPage: {
        height: '100vh',
        width: '100vw',
    },

    pageContent: {
        height: '100%',
        width: '100%',
        background: '#adadad',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    },


    mainContent: {
        display: 'flex',
        flexDirection: 'row',
        height: '50%',
        width: '50%',
        // border: '1px solid red',
        

    },

    

    imageBlock: {
        display: 'flex',
        flexDirection: 'column',
        height: '90%',
        width: '45%',
        justifyContent: 'center',
        alignContent: 'center',
        marginTop: '5%',
        marginBottom: '5%',
        borderRadius: '15%',
    },

    imageContent: {
        marginTop: '15%', 
        
    },

    signInBlock: {
        display: 'flex',
        flexDirection: 'column',
        height: '90%',
        width: '45%',
        
    },

    SignInContent: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '80%',
        height: '90%',
        marginTop: '5%',
        marginBottom: '5%',
        marginLeft: '10%',
        marginRight: '5%',
        // border: '1px solid red',
    },

    formHeading: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: '15%',
        width: '100%',
        marginBottom: '5%',
        
    },

    logintext: {
        fontSize: '1.5em',
    },

    signupText:{
        fontSize: '1.5em',
    },

    emailBlock :{
        height: '22%',
        width: '100%',
        marginBottom: '5%',
    },

    labelText: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        textAlign: 'left',
    },

    forgetText: {
        textAlign: 'right',
        fontSize: '0.2em',
    },

    passwordBlock: {
        height: '30%',
        width: '100%',
        marginBottom: '5%',
    },

    loginButton: {
        display: 'flex',
        flexDirection: 'row',
        height: '10%',
        width: '100%',
        marginTop: '5%',
        marginBottom: '5%',
    },

    fbGoogleButton: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: '10%',
        width: '100%',
        marginTop: '5%',
        marginBottom: '5%',
    }

})

function Login(props) {

    const classes = useStyles();

    //const openSignUpPage = () => {}

    const [signinObj, setSignInObj] = useState({EmailID: '', Password: ''})
    const [regexObj, setRegexObj] = useState({emailBorder: false, emailHelper: '', passwordBorder: false, passwordHelper: ''})

    const takeEmail = (e) =>{
        setSignInObj(prevState => ({
            ...prevState,
            EmailID: e.target.value
        }))
        
        //setSignInObj({emailId: e.target.value})
    }

    const takePassword = (e) => {
        setSignInObj(prevState =>({
            ...prevState,
            Password: e.target.value
        }))
    }

     console.log(signinObj)

    const varifyEmailPass = () => {
        let emailTest = emailRegex.test(signinObj.EmailID)
        let passwordTest = passwordRegex.test(signinObj.Password)

        if(emailTest === false)
        {
            setRegexObj(prevState => ({
                ...prevState,
                emailBorder: true,
                emailHelper: 'Enter a valid email'
            }))
        }

        else if(emailTest === true)
        {
            setRegexObj(prevState => ({
                ...prevState,
                emailBorder: false,
                emailHelper: ''
            }))
        }

        if(passwordTest === false)
        {
            setRegexObj(prevState => ({
                ...prevState,
                passwordBorder: true,
                passwordHelper: 'Enter a valid password'
            }))
        }

        else if(passwordTest === true)
        {
            setRegexObj(prevState => ({
                ...prevState,
                passwordBorder: false,
                passwordHelper: ''
            }))
        }

        if(emailTest === true && passwordTest === true){
            loginApi(signinObj).then((response)=>{
                console.log(response)
                navigateAllBook()
                localStorage.setItem("bookToken",response.data.result)
            }).catch((error)=>{
                console.log(error)
            })
        }


    }

    const openSignUpPage = () => {
        props.listenToLogin()
    }

    let navigate = useNavigate();
    const navigateForgetPage = () =>{
        navigate("/forgetpass")
    }

    const navigateAllBook = () => {
        navigate("/displayallbook")
    }

    return (
        <div className={classes.LoginPage}>
            <div className={classes.pageContent}>

                <div className={classes.mainContent}>
                    <div className={classes.imageBlock}>
                        <Paper elevation={5} >
                        {/* <div className={classes.imageContent}> */}
                            <div className={classes.imageContent}>
                                <img src="./bookstore.PNG" alt="icon" />
                            </div>
                            <h4>ONLINE BOOK SHOPPING</h4>
                        {/* </div> */}
                        </Paper>
                    </div>
                    <div className={classes.signInBlock}>
                        <Paper elevation={15}>
                            <div className={classes.SignInContent}>
                                <div className={classes.formHeading}>
                                    {/* <Button sx={{width: '47%',  textTransform: 'none', color: 'black'}} >LOGIN</Button>
                                    <Button sx={{width: '47%',  textTransform: 'none', color: 'black'}}>SIGNUP</Button> */}
                                    <div style={{ color: '#000000' }} className={classes.logintext}>LOGIN</div>
                                    {/*<Button style={{ color: '#878787' }} className={classes.signupText} onClick={openSignUpPage}>SIGNUP</Button>*/}
                                     <div style={{ color: '#878787' }} className={classes.signupText} onClick={openSignUpPage}>SIGNUP</div> 
                                    
                                </div>
                                <div className={classes.emailBlock}>
                                    <InputLabel className={classes.labelText}>Email id</InputLabel>
                                    <TextField onChange={takeEmail} error={regexObj.emailBorder} helperText={regexObj.emailHelper} size="small" fullWidth />
                                    
                                </div>
                                <div className={classes.passwordBlock}>
                                <InputLabel className={classes.labelText}>Password</InputLabel>
                                    <TextField onChange={takePassword} error={regexObj.passwordBorder} helperText={regexObj.passwordHelper} size="small" type="password" fullWidth />
                                    
                                    <InputLabel className={classes.forgetText} onClick={navigateForgetPage}>Forget Password?</InputLabel>
                                </div>
                                <div className={classes.loginButton}>
                                    <Button onClick={varifyEmailPass} variant="contained" sx={{width: '100%', backgroundColor: "#a03037", textTransform: 'none', color: 'white'}}>Login</Button>
                                    
                                </div>
                                <div>
                                    
                                    OR
                                </div>
                                <div className={classes.fbGoogleButton}>
                                    <Button variant="contained" sx={{width: '47%', backgroundColor: "#4266b2", textTransform: 'none'}} >Facebook</Button>
                                    <Button sx={{width: '47%', backgroundColor: "#dddddd", textTransform: 'none', color: 'black'}}>Google</Button>
                                    
                                </div>

                            </div>
                        </Paper>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default Login
