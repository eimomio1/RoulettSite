import React, { useState, useEffect } from 'react';
import image1 from './assets/image1.jpg'; 
import image2 from './assets/image2.jpg';
import image3 from './assets/image3.jpg';

function PictureBox() {
    const images = [image1, image2, image3]; 

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 5000); 

    return () => clearInterval(intervalId); 
  }, [images.length]);

  return (
    <div className="picture-box">
      <img src={images[currentImageIndex]} alt={`Picture ${currentImageIndex + 1}`} />
    </div>
  );
}

export default PictureBox;
