import React, { useEffect, useState } from 'react';
import './Galleries.scss';
import axios from 'axios';
import Gallery from '../../components/Gallery/Gallery';

const Galleries = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resPhoto = await axios.get(`http://localhost:8000/api/gallery/`);
        setPhotos(resPhoto.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className='gallery'>
        <div className='container'>
          {photos.map(photo => (
            <Gallery item={photo} key={photo.id} />
          ))}
        </div>
    </div>
  );
};

export default Galleries;
