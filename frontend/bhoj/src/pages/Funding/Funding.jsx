import React, {useState, useEffect} from 'react'
import './Funding.scss'
import axios from 'axios';
import Cookies from 'js-cookie';

const Funding = () => {
    const user = Cookies.get('user');
    const access_token = Cookies.get('access_token');
    const [isLoggedIn, setIsLoggedIn] = useState(!!Cookies.get("access_token"));
    const csrf_token = Cookies.get('csrf_token');
    const [formData, setFormData] = useState({
        phone: '',
        organization: '',
        amount: '',
        message: '',
        user: user
    });

    const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
    e.preventDefault();
    const headers = {
        'Content-Type': 'application/json',
        'X-CSRFToken': csrf_token,
    };
    axios.defaults.headers.common['Authorization'] = `Bearer ${access_token}`;
    try {
        const response = await axios.post('http://localhost:8000/api/fundcontributions/create_fund/', formData, { headers, withCredentials: true});
        window.location.href = '/congrats'
    } catch (error) {
        console.error(error.message);
        }
    };
    {
    !isLoggedIn && (
        window.location.href = '/login'
    )
    }
  return (
    <div className='funding'>
        <div className="container">
            <div className="top cmpTitle">
                <h1>Fund For Food</h1>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </span>
            </div>
            <div className="bottom">
                <div className="left">
                    <form onSubmit={handleSubmit}>
                        <div className="credentials">
                            <span>
                                <label>Phone</label>
                                <input type='text' name='phone' placeholder='Phone Number' onChange={handleChange}/>
                            </span>
                            <span>
                                <label>Organization</label>
                                <input type='text' name='organization' placeholder='Organization/Individual' onChange={handleChange}/>
                            </span>
                            <span>
                                <label>Amout</label>
                                <input type='text' name='amount' placeholder='Amount' onChange={handleChange}/>
                            </span>
                            <span>
                                <label>Message</label>
                                <textarea type='text' name='message' placeholder='Your Message' onChange={handleChange} />
                            </span>
                        </div>
                        <button type='submit'>Submit</button>
                    </form>
                </div>
                <div className="right">
                    <img src='register1.png' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Funding
