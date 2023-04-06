import axios from 'axios';

const headerConfig = {
    headers: {
        
         authorization: `Bearer ${localStorage.getItem("token")}`
    }
}

const newheaderConfig = {
    headers: {
        
         authorization: `Bearer ${localStorage.getItem("newToken")}`
    }
}

export const loginApi = (loginObj) => {
    //console.log("service" +loginObj)
    let response = axios.post(`https://localhost:5001/BookStore/User/Login?EmailID=${loginObj.EmailID}&Password=${loginObj.Password}`, loginObj)
    
    return response
}

export const signUpApi = (signUp) => {
    //console.log("service" +signUp)
    let response = axios.post("https://localhost:5001/BookStore/User/Register", signUp)
    return response
}

export const forgetApi = (forgetObj) => {
    
    console.log("service" +forgetObj.EmailID)
    let response = axios.post(`https://localhost:5001/BookStore/User/ForgotPassword?EmailId=${forgetObj.EmailID}`)
    return response
}

export const resetApi = (resetObj) => {
    console.log(newheaderConfig.headers.authorization)
    let response = axios.put(`https://localhost:5001/BookStore/User/ResetPassword?pass=${resetObj.Password}&confirmPass=${resetObj.ConfirmPassword}`,resetObj, newheaderConfig)
    return response
}