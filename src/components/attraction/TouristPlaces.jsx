import React from 'react'
import ImageSlider from '../ImageSlider'

const TouristPlaces = () => {
    const domain = document.domain;
    let slides;
    if(domain === 'localhost'){
      slides = [
        {url:'http://localhost:5173/images/1.jpg',place:'Magod Falls'},
        {url:'http://localhost:5173/images/2.jpeg',place:'Dandeli river rafting'},
        {url:'http://localhost:5173/images/3.jpg',place:'Yana caves'},
        {url:'http://localhost:5173/images/4.jpeg',place:'Kali river rafting'},
        {url:'http://localhost:5173/images/5.png',place:'Hanging bridge'},
        {url:'http://localhost:5173/images/6.jpeg',place:'Sathodi falls'}
    ]
    }
    else{
      slides = [
        {url:'https://madhuhomestaysirsi.com/images/1.jpg',place:'Magod Falls'},
        {url:'https://madhuhomestaysirsi.com/images/2.jpeg',place:'Dandeli river rafting'},
        {url:'https://madhuhomestaysirsi.com/images/3.jpg',place:'Yana caves'},
        {url:'https://madhuhomestaysirsi.com/images/5.png',place:'Hanging bridge'},
        {url:'https://madhuhomestaysirsi.com/images/6.jpeg',place:'Sathodi falls'}
      ]
    }
    
  return (
    <div className='m-5 lg:m-10 bg-white'>
        
        <div className='w-full h-[35vh] lg:h-[70vh]'>
            <ImageSlider slides={slides}/>
        </div>
    </div>
  )
}

export default TouristPlaces