import React,{useState} from 'react'
import './Homepage.css' 
import hero1 from '../../assets/hero-1.webp';
import hero2 from '../../assets/hero-2.webp';
import hero3 from '../../assets/hero-3.webp';

const backgroundImages = [hero1, hero2, hero3];

const Home = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? backgroundImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
    );
  };

   return (
    <div
      className="home-slider"
      style={{
        backgroundImage: `url(${backgroundImages[currentIndex]})`,
      }}
    >
      <button className="arrow left" onClick={goToPrevious}>&#10094;</button>
      <button className="arrow right" onClick={goToNext}>&#10095;</button>
    </div>
  );
}

export default Home
