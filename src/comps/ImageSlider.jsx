import React, { useState } from 'react'
import { SliderData } from './SliderData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import './imageslider.css'

const ImageSlider = ({slides}) => {
  const [ current, setCurrent ] = useState(0)
  const length = slides.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1 )
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length -1 : current - 1)
  }

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null
  }

  return (
    <section className='slider'>
      <FontAwesomeIcon icon={faChevronLeft} size='3x' color='white' className='left-arrow' onClick={prevSlide} />
      <FontAwesomeIcon icon={faChevronRight} size='3x' color='white' className='right-arrow' onClick={nextSlide} />
        {SliderData.map((slide, index) => {
            return(
              <div className={index === current ? 'image active' : 'image'} key={index}>
                {index === current && (
                  <img src={slide.image} alt=''/>
                )}
              </div>
            )
        })}
    </section>

  )
}

export default ImageSlider