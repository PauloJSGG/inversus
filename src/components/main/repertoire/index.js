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
    backgroundColor       : 'black',
    animation             : 'repertoire 1s'
  },
  overlay: { zIndex: 99999, backgroundColor: 'rgba(188,158,91,0)' }
};

const fade = (e) => {
  if(e.volume >= 0 && e.volume < 1){
    if(((e.volume + 0.01) * 2) < 1){
      e.volume += 0.01;
      setTimeout(() => fade(e), 75);
    }
  }
}

export const repertoire = (props) => {
  const {
    dynamicData,
    currentTrack,
    handleSelectTrack,
    handleModalOpen,
    handleMute,
    isModalOpen
  } = props

  return (
    <div className="content-container">
      <Modal
          isOpen={isModalOpen}
          onRequestClose={() => handleModalOpen(false)}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <audio
            autoPlay
            loop
            id="myAudio"
            muted={props.muted}
            onLoadStart={e => {
              const element = e.target
              element.volume = 0
              setTimeout(() => fade(element), 1000)
            }}
          >
            <source src={currentTrack.previewUrl}/>
          </audio>
          <div className="repertoire-modal">
            <div className="repertoire-header">
              <div className="repertoire-header__icon-close">
                <button onClick={() => handleModalOpen(false)}><FontAwesomeIcon icon={['fas','window-close']} style={{height: '1rem', width: '1rem', color: 'white' }} /></button>
              </div>
              <div className="repertoire-header__icon-center">
                <button onClick = { handleMute } style={{color: 'white'}}>
                  {
                    props.muted ? <FontAwesomeIcon icon={['fas','volume-mute']} style={{height: '2rem', width: '2rem'}} /> :
                      <FontAwesomeIcon  icon={['fas','volume-up']} style={{height: '2rem', width: '2rem'}} />
                  }
                </button>
                <a href={currentTrack.spotifyUrl} style={{color: 'white'}} target="blank"><FontAwesomeIcon style={{height: '2rem', width: '2rem'}} icon={['fab','spotify']} /></a>
              </div>
            </div>
            <div className="repertoire-body">
              <div className="repertoire-body__title">
                <h1>{currentTrack.name}</h1>
              </div>

              <div className = 'repertoire-body__lyrics whitespace-pre-wrap'>
                <p>{currentTrack.lyrics}</p>
              </div>
            </div>
          </div>
        </Modal>
      <div className = 'repertoire'>
        <div className = 'shade1'/>
        <div className = 'repertoire-container'>
          {dynamicData.repertoire.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)).map((item, i) => {
            return(
              <div key = {item.id} className={`repertoire-card`} onClick = {() => handleSelectTrack(item.id)}>
                <div className="repertoire-card__background">
                  <h1>{item.name}</h1>
                </div>
              </div>
            )
          })}
        </div>
        <div className = 'shade2'/>
      </div>
    </div>
  )
}

export default repertoire