import React, { useState } from "react";
import { Link, useNavigate  } from "react-router-dom";
import SignUp_Logic from "./SignUpLogic";
import axios from 'axios'

function SignUp() {
    const navigate = useNavigate();

    const [values, setValues] = useState({
        email : '',
        password : '',
        confirm_password : ''
    })

    const [errors, setErrors] = useState({})

    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name] : [event.target.value]}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(SignUp_Logic(values));
        if (errors.email === ''&& errors.password === '' && errors.confirm_password === '')
        {
            axios.post('http://localhost:8081/signup', values)
            .then(res => {
                if (res.data === "Email already exists")
                {
                    alert('Email already exists! Please try again.');
                    window.location.reload(); 
                }
                else
                {
                    alert('Create Account Success !')
                    navigate('/');
                }
            })
            .catch(err => console.log(err));
        }
    }

    return (  
        <div className='d-flex justify-content-center align-items-center bg-info vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <form action="" onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="email" class="mb-2"><strong>Email</strong></label>
                        <input type="email" placeholder='Enter Email' name="email"
                        onChange={handleInput} className='form-control rounded-0'/>
                        {errors.email && <span className="text-danger">{errors.email}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password" class="mb-2"><strong>Password</strong></label>
                        <input type="password" placeholder='Enter Password' name="password"
                        onChange={handleInput} className='form-control rounded-0'/>
                        {errors.password && <span className="text-danger">{errors.password}</span>}  
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password" class="mb-2"><strong>Confirm Password</strong></label>
                        <input type="password" placeholder='Enter Password Again' name="confirm_password"
                        onChange={handleInput} className='form-control rounded-0'/>
                        {errors.confirm_password && <span className="text-danger">{errors.confirm_password}</span>}
                    </div>
                    <button to="/" type='submit'  className='btn btn-success w-100'>Create Account</button>
                </form>
            </div>
        </div>
    );
}

export default SignUp;