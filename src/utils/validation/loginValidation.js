function loginValidation (userInfo){

    const errorList =[]
    const {email, password}= userInfo

    if (email==="") {
        errorList.push({input:"email", message:"The email is neccessary"})
    }
    if (email.length>30) {
        errorList.push({input:"email", message:"The email should be less than 30 characters"})
    }
    
    if (password==="") {
        errorList.push({input:"password", message:"The password is neccessary"})
    }
    if (password.length<8) {
        errorList.push({input:"password", message:"The password should be at least 8 characters"})
    }

    return errorList

}
export default loginValidation