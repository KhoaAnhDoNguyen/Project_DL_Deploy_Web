function SignUp_Logic(values) {
    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;
    
    if(values.email === "") {
        error.email = "Name should not be empty"
    }
    else if(!email_pattern.test(values.email)) {
        error.email = "Email Didn't match"
    }
    else {
        error.email = ""
    }


    if(values.password === "") {
        error.password = "Password should not be empty"
    }
    else if(!password_pattern.test(values.password)) {
        error.password = "Password didn't match"
    }
    else {
        error.password = ""
    }

    if(values.confirm_password === "") {
        error.confirm_password = "Confirm Password should not be empty"
    }
    else if(!password_pattern.test(values.confirm_password)) {
        error.confirm_password = "Confirm Password didn't match"
    }
    else if(values.password.toString() !== values.confirm_password.toString()) {
        error.confirm_password = "Confirm Password must same as Password"
    }
    else {
        error.confirm_password = ""
    }

    return error;

}

export default SignUp_Logic;