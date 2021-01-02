import React, {useEffect, useState} from 'react';
import {loadData} from '../utils/loadData';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const DogCarousel = (props) =>{
  const [dog, setDogs] = useState([]);

  useEffect(() =>{
    (async function(){
      const dogs = await loadData(
        `https://dog.ceo/api/breed/bulldog/boston/images`
      );
      const dogImg = dogs.message.map(dog =>
        <img src={dog} alt="Boston Terrier"/>);

        setDogs(dogImg);
    })();
  },[setDogs]);

  const _responsive = {
    0: { items: 1 },
    1024: { items: 2 },
  }

  return(
    <>
     <AliceCarousel
        items={dog}
        autoHeight={true}
        autoPlay={true}
        animationType={"fadeout"}
        autoPlayInterval={3000}


      />
    </>
  );
}

export default DogCarousel;
