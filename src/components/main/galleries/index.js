import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Modal from 'react-modal';
import { Formik, Field, setFieldValue } from 'formik';

import pt from '../../../assets/img/pt.svg'
import en from '../../../assets/img/gb.svg'
import de from '../../../assets/img/de.svg'

import languages from '../../../util/languages'

const flags = {
  pt: pt,
  en: en,
  de: de
}


Modal.setAppElement('#root')

const customStyles = {
  content: {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    backgroundColor       : 'black'
  },
  overlay: { zIndex: 99999, backgroundColor: 'rgba(188,158,91,0.2)' }
};

const Galleries = (props) => {
  const {
    galleryCategories,
    currentLanguage,
    onModalOpen,
    onGalleryNext,
    onGalleryBack,
    currentGallery,
    currentGalleryImageIndex,
    onNext,
    isModalOpen
  } = props

  return (
    <>
      <div className='content-container'>
        <Modal
          isOpen={isModalOpen && currentGallery.length > 0}
          onRequestClose={() => onModalOpen(false)}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="repertoire-modal">
            <div className="repertoire-header">
              <div className="repertoire-header__icon-close">
                <button onClick={() => onModalOpen(false)}><FontAwesomeIcon icon={['fas','window-close']} style={{height: '1rem', width: '1rem', color: 'white' }} /></button>
              </div>
            </div>
            <div className="repertoire-body">
              <img style={{width: '100%'}} src={currentGallery[currentGalleryImageIndex] && currentGallery[currentGalleryImageIndex].imageUrl}></img>
              <div style={{width: '100%', textAlign: 'center'}}>
                <button style={{cursor: 'pointer'}} onClick={onGalleryBack}><FontAwesomeIcon icon={['fas','chevron-left']} style={{height: '1rem', width: '1rem', color: 'white' }} /></button>
                <label>"{currentGallery[currentGalleryImageIndex] && currentGallery[currentGalleryImageIndex].description}"</label>
                <button style={{cursor: 'pointer'}} onClick={onGalleryNext}><FontAwesomeIcon icon={['fas','chevron-right']} style={{height: '1rem', width: '1rem', color: 'white' }} /></button>
              </div>
            </div>
          </div>
        </Modal>
        <div className="shade1"/>
        <div className = 'admin-repertoire__list' style={{justifyContent: 'center'}}>
          {galleryCategories.map((item => {
              return(
                <>
                  <div key={item.id} onClick = {() => onModalOpen(true, item.value) } className="admin-repertoire__row" style={{width: '44vw'}}>
                    <h1>
                      {item[currentLanguage]}
                    </h1>
                  </div>
                </>
              )
          }))}
          <div className="shade2"/>
        </div>
      </div>
    </>
  )
}

export default Galleries
