import React
    , {
    useState
} from "react";
import './SingleTent.css'
import { SliderData } from './SliderData';
import leftArrow from '../assets/left-arrow.png'
import rightArrow from '../assets/right-arrow.png'


const SingleTent = ({ slides }) => {
    const [current, setCurrent] = useState(0)
    const length = slides.length

    const nextSlide = () => {
        setCurrent(current === length -1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length -1 : current -1)
    }

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <>
            <h1 className="center">tent naam</h1>
        <section className="slider">
            <img className="arrow left" src={leftArrow} alt="prevSlide" onClick={prevSlide} />
            <img className="arrow right" src={rightArrow} alt="prevSlide" onClick={nextSlide} />
            {SliderData.map((slide, index) => {
                return (
                    <div className={index === current ? 'slide active' : 'slide'} key={index}>
                        {index === current && (<img className="slider-images" src={slide.image} alt="foto"/>)}
                    </div>
                )
            })}
        </section>
            <div className="center tent-info">
                <h2>info</h2>
                <h2>plaats</h2>
                <h2>waar</h2>
                <h2>enzo</h2>
            </div>
        </>
    )
}

export default SingleTent;
