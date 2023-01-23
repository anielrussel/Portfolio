import React from 'react'
import ImageSliderBl from '../ImageSliderBl'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './uidb.css'
import { SliderDataBl } from '../SliderDataBl'

const Bl = ({open, onClose}) => {
    if(!open) return null
  return (
    <div onClick={onClose} className='overlay'>
        <div onClick={(e) => {e.stopPropagation()}} className="modal-container">
          <ImageSliderBl slides={SliderDataBl} />
        </div>
        <div className="modal-close">
          <p><FontAwesomeIcon icon={faXmark} color='white' size='2x' onClick={onClose} /></p>
        </div>
    </div>
  )
}

export default Bl