import React from 'react'
import guitarImg from '../../../assets/img/FADO.jpg'
import Divider from '../../shared/Divider.js'

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

const getAudioIcon = () => {
  if (document.getElementById('myAudio') && document.getElementById('myAudio').muted)
    return  <FontAwesomeIcon icon={['fas','volume-up']} />
  else
    return  <FontAwesomeIcon icon={['fas','volume-mute']} />
}

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
    staticData,
    dynamicData,
    currentTrack,
    handleSelectTrack,
    handleModalOpen,
    handleMute,
    isModalOpen
  } = props

  const repertoire = dynamicData.repertoire.sort()

  return (
    <div className='content-container'>
      {/* <div className = 'flex flex-row w-full justify-center'>
        <Divider classs='test' />
        <h2 style = {{color: 'white', marginTop: '60px', fontSize: '20px'}} >{staticData.repertoire}</h2>
        <Divider classs='test test--flip'  />
      </div> */}
      <Modal
          isOpen={isModalOpen}
          // onAfterOpen={afterOpenModal}
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
          <div className = 'repertoire-modal'>
            <div className = 'repertoire-header'>
              <div className='repertoire-header__icon-close'>
                <button onClick={() => handleModalOpen(false)}><FontAwesomeIcon icon={['fas','window-close']} style={{height: '1rem', width: '1rem',marginLeft: '10px', color: 'white' }} /></button>
              </div>
              <div className = 'repertoire-header__icon-center'>
                <button onClick = { handleMute } style={{color: 'white'}}>{props.muted ? <FontAwesomeIcon icon={['fas','volume-mute']} style={{height: '2rem', width: '2rem'}} /> : <FontAwesomeIcon  icon={['fas','volume-up']} style={{height: '2rem', width: '2rem'}} />}</button>
                <a href={currentTrack.spotifyUrl} style={{color: 'white'}} target="blank"><FontAwesomeIcon style={{height: '2rem', width: '2rem',marginLeft: '10px' }} icon={['fab','spotify']} /></a>
              </div>
            </div>
            <div className='repertoire-body'>
              <div className = 'repertoire-body__title'>
                <h1>{currentTrack.name}</h1>
              </div>

              <div className = 'repertoire-body__lyrics whitespace-pre-line'>
                <h1>{currentTrack.lyrics}</h1>
              </div>
            </div>
          </div>
        </Modal>
      <div className = 'repertoire'>
        <div className = 'shade1'/>
        <div className = 'repertoire-container'>
          {dynamicData.repertoire.map(item => {
            return(
              <div key = {item.id} className = "repetoire-card" onClick = {() => handleSelectTrack(item.id)}>
                {/* <img className = "repertoire__track-logo" src = {item.data.imgUrl === "" ? guitarImg : item.data.imgUrl } alt = "track"/> */}
                <h1>{item.name}</h1>
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