import React from 'react';
import Carousel from './components/Carousel';
import './App.css';

const imageSlides = [
  {
    image: 'images/slide1.jpg',
    title: 'Mountain Adventure',
    text: 'Explore the great outdoors!'
  },
  {
    image: 'images/slide2.jpg',
    title: 'Beach Getaway',
    text: 'Relax on sunny shores!'
  },
  {
    image: 'images/slide3.jpg',
    title: 'City Lights',
    text: 'Discover the vibrant city life!'
  }
];


const App = () => {
  return (
    <div className="app">
      <h1>Image Carousel</h1>
      <Carousel slides={imageSlides} />

     
    </div>
  );
};

export default App;
