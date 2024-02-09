import React, { useState, useEffect } from 'react';
import img1 from '../../images/Atomheimer.png';
import img2 from '../../images/Chemica.png';
import img3 from '../../images/Electrica.png';
import img4 from '../../images/Electronica.png';
import img5 from '../../images/Food.png';
import img6 from '../../images/Karyarachna.png';
import img7 from '../../images/Kermis.png';
import img8 from '../../images/Mechanica.png';
import img9 from '../../images/Plexus.png';
import img10 from '../../images/Robozar.png';
import { Box, Modal } from '@mui/material';

const Loader = ({when}) => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9
  ];

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "10rem",
    hight:"9rem",
    bgcolor: 'transparent',
  };
  

  useEffect(() => {
    if (currentIndex < images.length) {
      const image = new Image();
      image.src = images[currentIndex];
      image.onload = () => {
        setTimeout(() => {
          setCurrentIndex((currentIndex + 1)%9);
        }, 150); 
      };
    }
  }, [currentIndex, images, isLoading]);


  if (when) {

  return (<>
    {isLoading && 
    <div>
    <Modal open={true}
    sx={{
      backdropFilter:"blur(40px)"
    }}
    >
      <Box>
        <img src={images[currentIndex]} style={style} alt="Loading"/>
      </Box>
    </Modal>
  </div>
}
  </>
  );
  }

  return null;
};

export default Loader;