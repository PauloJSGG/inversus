import React from 'react'
// import Fire from '../../firebase/Fire'
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
  overlay: { backgroundColor: 'rgba(188,158,91,0.2)' }
};

const RepertoireEdit = (props) => {
  const {
    handleModalOpen,
    isModalOpen,
    repertoire,
    handleTrackChange,
    submitTrack,
    currentTrack
  } = props

  console.log('current',currentTrack)

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
              <input name = "name" value = {currentTrack.name} onChange={e => handleTrackChange(e)}/>
            </div>
            <div className = 'flex justify-between m-3'>
              <label>URL Imagem:</label>
              <input name = "imageUrl" value = {currentTrack.imageUrl} onChange={e => handleTrackChange(e)}/>
            </div>
            <div className = 'flex justify-between m-3'>
              <label>URL Spotify:</label>
              <input name = "spotifyUrl" value = {currentTrack.spotifyUrl} onChange={e => handleTrackChange(e)}/>
            </div>
            <div className = 'flex justify-between m-3'>
              <label >Letra:</label>
              <textarea name = "lyrics" value = {currentTrack.lyrics} className='h-56 w-1/2' onChange={e => handleTrackChange(e)}/>
            </div>
            <div className = 'flex justify-end'>
              <button
                className = 'shared-button shared-button--second'
                onClick = {submitTrack}
                type='submit'
                title='submit'
              >
                <FontAwesomeIcon icon={['fas','plus']} />
              </button>
            </div>
          </div>
        </Modal>
          {repertoire.map((item => {
            return(
              <div className = "repetoire-card">
                <h1>
                  {item.name}
                </h1>
                <button><FontAwesomeIcon icon={['fas','edit']} /></button>
              </div>
            )
          }))}
          <button className = 'shared-button shared-button--second' onClick = { () => handleModalOpen(true)}>Adicionar</button>
      </div>
    </>
  )
}

export default RepertoireEdit
