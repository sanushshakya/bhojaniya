import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Cookies from 'js-cookie';
import './FoodDonate.scss'

const FoodDonate = () => {
    const user = Cookies.get('user');
    const access_token = Cookies.get('access_token');
    const [isLoggedIn, setIsLoggedIn] = useState(!!Cookies.get("access_token"));
    const csrf_token = Cookies.get('csrf_token');
    // const [formData, setFormData] = useState({
    //     location: '',
    //     name: '',
    //     time: '',
    //     date: '',
    //     quantity:'',
    //     image: '',
    //     user: user
    // });

    // const handleChange = (e) => {
    // setFormData({ ...formData, [e.target.name]: e.target.value });
    // };

    const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('location', e.target.location.value);
    formData.append('name', e.target.name.value);
    formData.append('time', e.target.time.value);
    formData.append('date', e.target.date.value);
    formData.append('quantity', e.target.quantity.value);


    const headers = {
        'Content-Type': 'application/json',
        'X-CSRFToken': csrf_token,
    };
    axios.defaults.headers.common['Authorization'] = `Bearer ${access_token}`;
    try {
        const response = await axios.post('http://localhost:8000/api/fooddonations/create_food/', formData, { headers, withCredentials: true});
        window.location.href = '/food'
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
    <div className='food'>
        <div className="container">
            <div className="top">
                <img src='banner.png' />
            </div>
            <div className="bottom">
                <form onSubmit={handleSubmit}>
                    <h1>Donate Food Details</h1>
                    <div className="credentials">
                        <span>
                            <label>Pickup Location</label>
                            <input type='location' name='location' placeholder='Location Name'  />
                        </span>
                        <span>
                            <label>Food Items</label>
                            <input type='text' name='name' placeholder='Food Name'  />
                        </span>
                        <span>
                            <label>Preferred Time</label>
                            <input type='time' name='time' placeholder='time'/>
                        </span>
                        <span>
                            <label>Pickup Day</label>
                            <input type='date' name='date' placeholder='dd-mm-yyyy'  />
                        </span>
                        <span>
                            <label>Quantity: Person</label>
                            <input type='text' name='quantity' placeholder='Total Number'  />
                        </span>
                       
                    </div>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default FoodDonate
