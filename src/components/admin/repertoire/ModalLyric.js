import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Modal from 'react-modal';
import { Formik, Field } from 'formik';

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

const FormRender = (props) => {
  const { setFieldValue, handleSubmit, values, currentLanguage } = props;

  return (
    <form onSubmit={handleSubmit}>
      <div className='admin-modal'>
        <div className='admin-modal__row'>
          <label className='admin-modal__label'>title:</label>
          <Field className='admin-modal__input' name={`${currentLanguage}.title`} value = {values[currentLanguage] ? values[currentLanguage].title : ""}/>
        </div>
        <div className='admin-modal__row'>
          <label className='admin-modal__label'>lyrics:</label>
          <textarea className='admin-modal__textarea' name={`${currentLanguage}.lyric`} value = {values[currentLanguage] ? values[currentLanguage].lyric : ""} onChange={(e) => setFieldValue(`${currentLanguage}.lyric`, e.currentTarget.value)}/>
        </div>
        <div className='admin-modal__button'>
          <button
            className='shared-button shared-button--second'
            type='submit'
            title='submit'
          >
            <FontAwesomeIcon icon={['fas','plus']} />
          </button>
        </div>
      </div>
    </form>
  )
}

const ModalLyric = (props) => {
  const {
    onModalOpen,
    onSubmitForm,
    isModalOpen,
    currentSong,
    currentLanguage,
  } = props

    return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={() => onModalOpen(false)}
      style={customStyles}
    >
      <Formik
        initialValues={{
          ...currentSong
        }}
        onSubmit={onSubmitForm}
      >
        {props => <FormRender currentLanguage = {currentLanguage} {...props}/>}  
      </Formik>
    </Modal>
  )
}

export default ModalLyric