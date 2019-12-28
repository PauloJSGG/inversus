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
    handleSubmitTrack,
    handleTrackChange,
    handleEditClick,
    isModalOpen,
    repertoire,
    currentTrack
  } = props

  return (
    <>
      <div className = 'w-full flex flex-col justify-center my-5 items-center'>
        <Modal
          isOpen={isModalOpen}
          // onAfterOpen={afterOpenModal}
          onRequestClose={() => handleModalOpen(false)}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className = 'repetoire-modal'>
            <div className = 'flex justify-between m-3'>
              <label>Nome:</label>
              <input name = "name" value = {currentTrack.data.name} onChange={e => handleTrackChange(e)}/>
            </div>
            <div className = 'flex justify-between m-3'>
              <label>URL Imagem:</label>
              <input name = "imgUrl" value = {currentTrack.data.imgUrl} onChange={e => handleTrackChange(e)}/>
            </div>
            <div className = 'flex justify-between m-3'>
              <label>URL Spotify:</label>
              <input name = "spotifyUrl" value = {currentTrack.data.spotifyUrl} onChange={e => handleTrackChange(e)}/>
            </div>
            <div className = 'flex justify-between m-3'>
              <label>URL Preview:</label>
              <input name = "previewUrl" value = {currentTrack.data.previewUrl} onChange={e => handleTrackChange(e)}/>
            </div>
            <div className = 'flex justify-between m-3'>
              <label >Letra:</label>
              <textarea name = "lyrics" value = {currentTrack.data.lyrics} className='h-56 w-1/2' onChange={e => handleTrackChange(e)}/>
            </div>
            <div className = 'flex justify-end'>
              <button
                className = 'shared-button shared-button--second'
                onClick = {handleSubmitTrack}
                type='submit'
                title='submit'
              >
                <FontAwesomeIcon icon={['fas','plus']} />
              </button>
            </div>
          </div>
        </Modal>
        <div className = 'flex flex-row flex-wrap w-1/4'>
          {repertoire.map((item => {
              return(
                <>
                  <div key={item.id} onClick = {() => handleEditClick(item.id) } className = "repetoire-card" >
                    <h1>
                      {item.data.name}
                    </h1>
                    {/* <button data-id={item.id} onClick = {() => handleEditClick(item.id) }><FontAwesomeIcon icon={['fas','edit']} /></button> */}
                  </div>
                  <button onClick = {() => props.handleRemoveTrack(item.id)}>❌</button>
                </>
              )
          }))}
        </div>
        <button className = 'shared-button shared-button--second' onClick = { () => handleModalOpen(true)}>Adicionar</button>
      </div>
    </>
  )
}

export default RepertoireEdit
