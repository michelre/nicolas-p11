import "./carousel.scss";
import ArrowRight from "../../assets/arrow-right.svg"
import ArrowLeft from "../../assets/arrow-left.svg"
import PropTypes from "prop-types";
import { useState, useRef } from "react";

const Carousel = ({pictures}) => {
  const [index, setIndex] = useState(0);
  let refImage = useRef(null);


  const onPrevSlide = (e) => {
    e.preventDefault()
    if(index == 0){
      setIndex(pictures.length -1)
      return
    }
    setIndex(index - 1)
  }

  const onNextSlide = (e) => {
    e.preventDefault()
    if(index == pictures.length - 1){
      setIndex(0)
      return
    }
    setIndex(index + 1)
  }

  return <div className="carousel-container">
    <ul className="carousel" style={{transform: `translateX(-${index * refImage?.current?.width}px)`}}>
      {pictures.map((image, idx) => <li className="slide" key={`carousel-image-${idx}`}>
        <img src={image} ref={refImage}/>
      </li>)}
    </ul>
    {(pictures.length > 1) ? <div className="arrows">
      <a href="#" className="right" onClick={e => onNextSlide(e)}>
        <img src={ArrowRight} />
      </a>
      <a href="#" className="left" onClick={e => onPrevSlide(e)}>
        <img src={ArrowLeft}/>
      </a>
    </div> : ''}
    <div className="counter">
      {pictures.length > 1 ? `${index + 1} / ${pictures.length}` : ""}
    </div>
  
  </div>
};

Carousel.propTypes = {
  pictures: PropTypes.array.isRequired,
};

export default Carousel;