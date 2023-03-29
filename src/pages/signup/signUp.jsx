import React, { useState } from "react";
import { makeStyles } from "@mui/styles"
import { Button, InputLabel, Paper, TextField } from "@mui/material";
import { signUpApi } from "../../services/userService";
const nameRegex = /^([A-Z]{1}[a-z,A-Z]{2,})$/;
const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;
//const mobileNumberRegex = /^(\+\d{1,3}[- ]?)?\d{10}$/;
const mobileNumberRegex = /^(\d{10})$/;


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
        height: '60%',
        width: '45%',
        // border: '1px solid red',
        

    },

    // formHeading: {
    //     display: "flex",
    //     flexDirection: "row",
    //     justifyContent: "space-between"
    // },

    imageBlock: {
        display: 'flex',
        flexDirection: 'column',
        height: '90%',
        width: '45%',
        justifyContent: 'center',
        alignContent: 'center',
       
    },

    imageContent: {
        height:'100%',
        width: '100%', 
        marginTop: '15%',
        marginBottom: '15%',
        
    },

    mainImageContent: {
        height:'100%',
        width: '100%', 
        marginTop: '10%',
        marginBottom: '25%',
        paddingTop: '10%',
        paddingBottom: '5%',
    },

    signInBlock: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: '55%',
        
    },

    SignInContent: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '70%',
        height: '100%',
        marginTop: '4%',
        //marginBottom: '5%',
        marginLeft: '15%',
        marginRight: '5%',
        // border: '1px solid red',
    },

    formHeading: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: '7%',
        width: '100%',
        marginBottom: '4%',
    },

    logintext: {
        fontSize: '1.5em',
        color: '#878787',
    },
    signupText: {
        fontSize: '1.5em',
        color: '#000000'
    },

    emailBlock :{
        height: '18%',
        width: '100%',
        
    },

    emailText: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },

    passwordBlock: {
        height: '18%',
        width: '100%',
    },

    textLabel: {
        textAlign:'left',
        fontSize: '0.5em',
        color: 'black',
    },

    loginButton: {
        display: 'flex',
        flexDirection: 'row',
        height: '7%',
        width: '100%',
        marginTop: '4%',
       
    },

})

function SignUp(props) {

    const classes = useStyles();

    const [signUpObj, setSignUpObj] = useState({fullName: '', emailId: '', password: '', mobileNumber: ''})
    const [regexObj, setRegexObj] = useState({fullNameBorder: false, fullNameHelper:'',emailBorder: false, emailHelper: '', passwordBorder: false, passwordHelper: '', mobileNumBorder: false, mobileNumHelper: ''})

    const takeEmail = (e) =>{
        setSignUpObj(prevState => ({
            ...prevState,
            emailId: e.target.value
        }))
        
        //setSignInObj({emailId: e.target.value})
    }

    const takePassword = (e) => {
        setSignUpObj(prevState =>({
            ...prevState,
            password: e.target.value
        }))
    }

    const takeFullName = (e) => {
        setSignUpObj(prevState => ({
            ...prevState,
            fullName: e.target.value
        }))
    }

    const takeMobileNum = (e) => {
        setSignUpObj(prevState => ({
            ...prevState,
            mobileNumber: e.target.value
        }))
    }

    console.log(signUpObj)

    const varifyEmailPass = () => {
        let emailTest = emailRegex.test(signUpObj.emailId)
        let passwordTest = passwordRegex.test(signUpObj.password)
        let fullNameTest = nameRegex.test(signUpObj.fullName)
        let mobileNumTest = mobileNumberRegex.test(signUpObj.mobileNumber)

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

        if(fullNameTest === false)
        {
            setRegexObj(prevState => ({
                ...prevState,
                fullNameBorder: true,
                fullNameHelper: 'Enter a valid name'
            }))
        }

        else if(fullNameTest === true)
        {
            setRegexObj(prevState => ({
                ...prevState,
                fullNameBorder: false,
                fullNameHelper: ''
            }))
        }

        if(mobileNumTest === false)
        {
            setRegexObj(prevState => ({
                ...prevState,
                mobileNumBorder: true,
                mobileNumHelper: 'Enter a valid mobile number'
            }))
        }

        else if(mobileNumTest === true)
        {
            setRegexObj(prevState => ({
                ...prevState,
                mobileNumBorder: false,
                mobileNumHelper: ''
            }))
        }

        if(emailTest === true && passwordTest === true && fullNameTest === true && mobileNumTest === true){
            signUpApi(signUpObj)
            .then((response)=>{
                console.log(response)
            }).catch((error)=>{
                console.log(error)
            })
        }


    }

    const openLoginPage = () => {
        props.listenToSignUp()
    }


    return (
        <div className={classes.LoginPage}>
            <div className={classes.pageContent}>

                <div className={classes.mainContent}>
                    <div className={classes.imageBlock}>
                    <div className={classes.imageContent}>
                        <Paper elevation={5} >
                        <div className={classes.mainImageContent}> 
                            
                            <img src="./bookstore.PNG" alt="icon" />
                            
                            <h4>ONLINE BOOK SHOPPING</h4>
                        </div>
                        </Paper>
                        </div>
                    </div>
                    <div className={classes.signInBlock}>
                        <Paper elevation={15} >
                            <div className={classes.SignInContent}>
                                <div className={classes.formHeading}>
                                    {/* <Button sx={{width: '47%',  textTransform: 'none', color: 'black'}} >LOGIN</Button>
                                    <Button sx={{width: '47%',  textTransform: 'none', color: 'black'}}>SIGNUP</Button> */}
                                     <div className={classes.logintext} onClick= {openLoginPage}>LOGIN</div> 
                                    {/*<Button className={classes.logintext} onClick= {openLoginPage}>LOGIN</Button>*/}
                                    <div className={classes.signupText}>SIGNUP</div>
                                    
                                </div>
                                <div className={classes.emailBlock}>
                                    <InputLabel className={classes.textLabel}>Full Name</InputLabel>
                                    <TextField onChange={takeFullName} error={regexObj.fullNameBorder} helperText={regexObj.fullNameHelper} size="small" fullWidth />
                                    
                                </div>
                                <div className={classes.emailBlock}>
                                    <InputLabel className={classes.textLabel}>Email id</InputLabel>
                                    <TextField onChange={takeEmail} error={regexObj.emailBorder} helperText={regexObj.emailHelper} size="small" fullWidth />
                                    
                                </div>
                                <div className={classes.passwordBlock}>
                                <InputLabel className={classes.textLabel}>Password</InputLabel>
                                    <TextField onChange={takePassword} error={regexObj.passwordBorder} helperText={regexObj.passwordHelper} size="small" type="password" fullWidth />
                                    
                                    
                                </div>
                                
                                <div className={classes.emailBlock}>
                                    <InputLabel className={classes.textLabel}>Mobile Number</InputLabel>
                                    <TextField onChange={takeMobileNum} error={regexObj.mobileNumBorder} helperText={regexObj.mobileNumHelper} size="small" fullWidth />
                                    
                                </div>
                                <div className={classes.loginButton}>
                                    <Button onClick={varifyEmailPass} variant="contained" sx={{width: '100%', backgroundColor: "#a03037", textTransform: 'none', color: 'white'}}>SignUp</Button>
                                    
                                </div>
                            </div>
                        </Paper>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default SignUp
