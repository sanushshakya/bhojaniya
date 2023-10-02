import React, {useEffect, useState} from 'react'
import './Home.scss'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Gallery from '../../components/Gallery/Gallery'

const Home = () => {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const resGallery = await axios.get(`http://localhost:8000/api/gallery/`);
            setPhotos(resGallery.data);
          } catch (error) {
            console.error(error);
          }
        };
        fetchData();
      }, []);
  return (
    <div className='home'>
      <div className="container">
        <div className="feature">
            <img src='banner.png'/>
            <div className="btns">
                <Link to='/food' className='link'><button>Donate</button></Link>
            </div>
        </div>
        <div className="about">
            <div className="left">
                <img src='vite.svg'/>
            </div>
            <div className="right">
                <h1>About Us</h1>
                <span>
                Welcome to Bhojaniya,

                We are trying to reduce food waste and fight hunger by connecting surplus food with those in need. Our story began with the realization that millions of people around the world go hungry every day while a significant amount of food goes to waste. We saw an opportunity to make a difference by connecting restaurants, caterers, and other food businesses with local organizations that serve food-insecure communities. Through our platform, we make it easy for donors to donate their surplus food, and for recipient organizations to receive it quickly and efficiently.

                We believe that everyone deserves access to nutritious and delicious food, regardless of their socioeconomic status. By donating to these organizations, we are not only reducing food waste but also helping to alleviate hunger in our communities. 

                If you're interested in joining our mission, please reach out to us through our platform. Together, we can make a difference and create a world where no one goes hungry.
                </span>
            </div>
        </div>
        <div className="services ">
            <div className="top cmpTitle">
                <h1>Our Services</h1>
                <span>We are in a mission to help the helpless</span>
            </div>
            <div className="bottom">
                <div className="card">
                    <img src='vite.svg' />
                    <h2>Donors</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <Link to='/food' className='link'><button>Join Now</button></Link>
                </div>
                <div className="card">
                    <img src='vite.svg' />
                    <h2>Volunteers</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <Link to='/' className='link'><button>Join Now</button></Link>
                </div>
                <div className="card">
                    <img src='vite.svg' />
                    <h2>Funding</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <Link to='/fund' className='link'><button>Join Now</button></Link>
                </div>
            </div>
        </div>
        <div className="gallery">
            <div className="top cmpTitle">
                <h1>Memory Lane</h1>
                <span>We are in a mission to help the helpless</span>
            </div>
            <div className="box">
                <div className="photos">
                    {photos.slice(0,3).map(photo => (
                        <Gallery item={photo} key={photo.id} />
                    ))}
                </div>
                <Link to='/' className='link'><button>View More</button></Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home
