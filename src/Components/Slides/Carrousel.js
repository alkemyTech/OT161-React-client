import React, { useState, useEffect } from "react";
import "./carrousel.css";
import getDataMethod from '../../Services/publicApiService'
import parser from "html-react-parser";

const Carrousel = () => {

  const[slides, setSlides] =useState([])

  const getData = async () => {
    const data = await getDataMethod('slides')
    setSlides(data.data.data)
    
  }

useEffect(()=>{
  getData()
},[])


  const [current, setCurrent] = useState(0);
  const length = slides.length;


  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    },5000)
    return () => clearInterval(interval);
  },[]);


  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      <div className="left-arrow" onClick={prevSlide}>
        &lt;
      </div>
      <div className="right-arrow" onClick={nextSlide}>
        &gt;
      </div>
      {slides.map((slide, index) => {
        return (
          <div key={index}>
            {index === current && (
              <div className="mySlides fade">
                <h2 className="carrousel-title">{slide.title}</h2>
                <div className="carrousel-image-container">
                <img src={slide.image} alt="img" className="carrousel-image" />
                </div>
                <p className="carrousel-description">{parser(slide.description)}</p>
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default Carrousel;