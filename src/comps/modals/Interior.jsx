import React from 'react'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './uidb.css'
import ImageSliderInterior from '../ImageSliderInterior'
import { SliderDataInterior } from '../SliderDataInterior'

const Interior = ({open, onClose}) => {
    if(!open) return null
  return (
    <div onClick={onClose} className='overlay'>
        <div onClick={(e) => {e.stopPropagation()}} className="modal-container">
          <ImageSliderInterior slides={SliderDataInterior} />
        </div>
        <div className="modal-close">
          <p><FontAwesomeIcon icon={faXmark} color='white' size='2x' onClick={onClose} /></p>
        </div>
    </div>
  )
}

export default Interior