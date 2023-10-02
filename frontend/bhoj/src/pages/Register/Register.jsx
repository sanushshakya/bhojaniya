import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './Register.scss'

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
      
        try {
          const response = await axios.post('http://localhost:8000/api/register/', formData);
          window.location.href = '/login'
        } catch (error) {
          // Handle registration error
          if (error.response && error.response.data) {
            const errorMessage = error.response.data.email[0]; // Assuming email is the field causing the error
            console.error('Registration failed:', errorMessage);
            // Display the error message to the user (e.g., set it in state to render in your component)
          } else {
            console.error('Registration failed:', error.message);
          }
        }
      };
      
  return (
    <div className='register'>
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
                            <label>Username</label>
                            <input type='text' name='username' placeholder='Enter Username' onChange={handleChange} />
                        </span>
                        <span>
                            <label>Email</label>
                            <input type='email' name='email' placeholder='Enter Email' onChange={handleChange} />
                        </span>
                        <span>
                            <label>Password</label>
                            <input type='password' name='password' placeholder='Enter Password' onChange={handleChange} />
                        </span>
                    </div>
                    <button type='submit'>Sign Up</button>
                    <span>Already have account? <Link to='/login' className='link sign'>LOG IN</Link></span>                
                </form>
            </div>
            <div className="right">
                <img src='register1.png' />
            </div>
        </div>
    </div>
  )
}

export default Register
