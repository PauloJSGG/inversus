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
  const { setFieldValue, handleSubmit, values, currentLanguage, galleryCategories } = props;

  return (
    <form onSubmit={handleSubmit}>
      <div className='admin-modal'>
        <div className='admin-modal__row'>
          <label className='admin-modal__label'>Categoria:</label>
          <Field as="select" className='admin-modal__input' name="category" style={{width: '100%'}}>
            <option label="Selecione uma categoria" />
            {galleryCategories &&galleryCategories.map((item, index) => {
              return(
                <option value={item.value}>{item[currentLanguage]}</option>
              )
            })}
          </Field>
        </div>
        <div className='admin-modal__row'>
          <label className='admin-modal__label'>Descrição:</label>
          <Field  name="description" style={{width: '100%'}}/>
        </div>
        <div className='admin-modal__row'>
          <label className='admin-modal__label'>Imagem:</label>
          <input type="file" name="image" style={{width: '100%'}} onChange={(e) => setFieldValue("image", e.currentTarget.files[0])}/>
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

const GalleryEdit = (props) => {
  const {
    onSubmit,
    onDelete,
    onModalOpen,
    isModalOpen,
    isGalleryModalOpen,
    currentLanguage,
    galleryCategories,
    galleries,
    currentImage
  } = props

  return (
    <>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => onModalOpen(false)}
        style={customStyles}
      >
        <Formik
          initialValues={{
          }}
          onSubmit={onSubmit}
        >
          {props => <FormRender currentLanguage = {currentLanguage} galleryCategories={galleryCategories} {...props}/>}  
        </Formik>
      </Modal>
      <div className="content-container">
        <div className="admin-gallery">
          <div className="admin-gallery-container">
            {galleries.map((item, i) => {
              return(
                <>
                  <div key = {item.id} className={`gallery-card`}>
                    <div className="gallery-card__background" style={{backgroundImage: `url(${item.imageUrl})`}}>
                      <h1>{item.description}</h1>
                      <h1>{item.category}</h1>

                    </div>
                  </div>
                  <button style={{color: 'red'}} onClick={() => onDelete(item)}><span role="img" aria-label="out">❌</span></button>
                </>
              )
            })}
          </div>
        </div>
        <button
            style={{}}
            className='shared-button shared-button--second'
            onClick = {() => onModalOpen(true)}
          >
            Adicionar Foto
          </button>
      </div>
    </>
  )
}

export default GalleryEdit
