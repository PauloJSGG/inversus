import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Formik, Field } from 'formik';
import Modal from 'react-modal';

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
  const { setFieldValue, handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit}>
      <div className='admin-modal'>
        <div className='admin-modal__row'>
          <label className='admin-modal__label'>Nome:</label>
          <Field className='admin-modal__input' name="name"/>
        </div>
        <div className='admin-modal__row'>
          <label className='admin-modal__label'>Imagem:</label>
          <input type="file" name="image" onChange={(e) => setFieldValue("image", e.currentTarget.files[0])}/>
        </div>
        <div className='admin-modal__row'>
          <label className='admin-modal__label'>URL Spotify:</label>
          <Field className='admin-modal__input' name="spotifyUrl"/>
        </div>
        <div className='admin-modal__row'>
          <label className='admin-modal__label'>Música:</label>
          <input type="file" accept=".mp3" name="song" onChange={(e) => setFieldValue("song", e.currentTarget.files[0])}/>
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

const ModalSong = (props) => {
  const {
    onModalOpen,
    isModalOpen,
    submitForm,
    values,
  } = props

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={() => onModalOpen(false)}
      style={customStyles}
    >
      <Formik
        initialValues={values ? values : {
          name: "",
          image: {},
          spotifyUrl: "",
          song: {},
          visibility: true,
        }}
        onSubmit={(values) => {
          if(values.song.size < 5097152)
            submitForm(values);
          else
            alert("Ficheiro demasiado grande")
        }}
      >
        {props => <FormRender {...props}/>}  
      </Formik>
    </Modal>
  )
}

export default ModalSong
