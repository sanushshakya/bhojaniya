import React, {useState, useEffect} from 'react'
import './Login.scss'
import axios from 'axios';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    
    const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    
    const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post('http://localhost:8000/api/login/', formData);
        const resCsrf = await axios.get('http://localhost:8000/api/get-csrf-token/');
        const {user_name, user, access_token } = response.data;
        const csrf_token = resCsrf.data.csrf_token;
        Cookies.set('user_name', user_name, { expires: 1 }); 
        Cookies.set('user', user, { expires: 1 }); 
        Cookies.set('access_token', access_token, { expires: 1 });
        Cookies.set('csrf_token', csrf_token, { expires: 1 })
        window.location.href = '/'
    } catch (error) {
        console.error('Registration failed:', error.message);
        }
    };
  return (
    <div className='login'>
        <div className="container">
            <div className="left">
                <img src='register.png' />
            </div>
            <div className="center">
                <form onSubmit={handleSubmit}>
                    <h1>Sign Up</h1>
                    <span>Make sure your entered details below is correct</span>
                    <div className="credentials">
                        <span>
                            <label>Email</label>
                            <input type='email' name='email' placeholder='Enter Email' onChange={handleChange} />
                        </span>
                        <span>
                            <label>Password</label>
                            <input type='password' name='password' placeholder='Enter Password' onChange={handleChange} />
                        </span>
                    </div>
                    <button type='submit'>Login</button>
                    <span>Create New Account ?<Link to='/register' className='link sign'>SIGN IN</Link></span>                
                </form>
            </div>
            <div className="right">
                <img src='register1.png' />
            </div>
        </div>
    </div>
  )
}

export default Login
