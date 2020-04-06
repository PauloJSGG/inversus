import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Modal from 'react-modal';

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

const RepertoireEdit = (props) => {
  const {
    handleModalOpen,
    handleSubmit,
    handleChange,
    handleEditClick,

    isModalOpen,
    repertoire,
    currentTrack
  } = props

  return (
    <>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => handleModalOpen(false)}
        style={customStyles}
      >
        <div className='admin-modal'>
          <div className='admin-modal__row'>
            <label className='admin-modal__label'>Nome:</label>
            <input className='admin-modal__input' name="name" value = {currentTrack.name} onChange={e => handleChange(e)}/>
          </div>
          <div className='admin-modal__row'>
            <label className='admin-modal__label'>URL Imagem:</label>
            <input className='admin-modal__input' name="imgUrl" value = {currentTrack.imgUrl} onChange={e => handleChange(e)}/>
          </div>
          <div className='admin-modal__row'>
            <label className='admin-modal__label'>URL Spotify:</label>
            <input className='admin-modal__input' name="spotifyUrl" value = {currentTrack.spotifyUrl} onChange={e => handleChange(e)}/>
          </div>
          <div className='admin-modal__row'>
            <label className='admin-modal__label'>URL Preview:</label>
            <input className='admin-modal__input' name="previewUrl" value = {currentTrack.previewUrl} onChange={e => handleChange(e)}/>
          </div>
          <div className='admin-modal__row'>
            <label className='admin-modal__label'>Letra:</label>
            <textarea className='admin-modal__textarea' name='lyrics' value = {currentTrack.lyrics} onChange={e => handleChange(e)}/>
          </div>
          <div className='admin-modal__button'>
            <button
              className='shared-button shared-button--second'
              onClick = {handleSubmit}
              type='submit'
              title='submit'
            >
              <FontAwesomeIcon icon={['fas','plus']} />
            </button>
          </div>
        </div>
      </Modal>
      <div className='admin-repertoire'>
        <div className = 'admin-repertoire__list'>
          {repertoire.map((item => {
              return(
                <>
                  <div key={item.id} onClick = {() => handleEditClick('currentTrack',item) } className="admin-repertoire__row">
                    <h1>
                      {item.name}
                    </h1>
                  </div>
                  <button style={{color: 'red'}} onClick={() => props.handleDelete(item.id)}><span role="img" aria-label="out">❌</span></button>
                </>
              )
          }))}
        </div>
        <button
          style={{}}
          className='shared-button shared-button--second'
          onClick = { () => handleModalOpen(true)}
        >
          Adicionar
        </button>
      </div>
    </>
  )
}

export default RepertoireEdit
