import React from 'react'
import ImageSlider from '../ImageSlider'
import { SliderData } from '../SliderData'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './uidb.css'

const uidb = ({open, onClose}) => {
    if(!open) return null
  return (
    <div onClick={onClose} className='overlay'>
        <div onClick={(e) => {e.stopPropagation()}} className="modal-container">
          <ImageSlider slides={SliderData} />
        </div>
        <div className="modal-close">
          <p><FontAwesomeIcon icon={faXmark} color='white' size='2x' onClick={onClose} /></p>
        </div>
    </div>
  )
}

export default uidb