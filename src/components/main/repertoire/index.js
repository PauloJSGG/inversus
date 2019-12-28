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
    backgroundColor       : 'black'
  },
  overlay: { zIndex: 99999, backgroundColor: 'rgba(188,158,91,0.2)' }
};

const getAudioIcon = () => {
  if (document.getElementById('myAudio') && document.getElementById('myAudio').muted)
    return  <FontAwesomeIcon icon={['fas','volume-up']} />
  else
    return  <FontAwesomeIcon icon={['fas','volume-mute']} />

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


  return (
    <div className='overflow-hidden fixed w-full'>
      <div className = 'flex flex-row w-full justify-center'>
        <Divider classs='test' />
        <h2 style = {{color: 'white', marginTop: '60px', fontSize: '20px'}} >{staticData.repertoire}</h2>
        <Divider classs='test test--flip'  />
      </div>
      <Modal
          isOpen={isModalOpen}
          // onAfterOpen={afterOpenModal}
          onRequestClose={() => handleModalOpen(false)}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <audio autoPlay loop id="myAudio" muted={props.muted} >
            <source src={currentTrack.previewUrl}/>
          </audio>
          <div className = 'repetoire-modal'>
            <div className = 'flex w-full h-1/2 justify-center'>
            <button onClick = { handleMute } style={{color: 'white'}}>{props.muted ? <FontAwesomeIcon icon={['fas','volume-mute']} style={{height: '2rem', width: '2rem'}} /> : <FontAwesomeIcon  icon={['fas','volume-up']} style={{height: '2rem', width: '2rem'}} />}</button>
            <a href={currentTrack.spotifyUrl} target="blank"><FontAwesomeIcon style={{height: '2rem', width: '2rem',marginLeft: '10px' }} icon={['fab','spotify']} /></a>
            </div>
            <div className = 'flex justify-between m-3'>
              <h1>{currentTrack.name}</h1>
            </div>

            <div className = 'flex justify-between m-3'>
              <h1>{currentTrack.lyrics}</h1>
            </div>

          </div>
        </Modal>
      <div className = 'flex flex-col items-center w-full'>
        {dynamicData.repertoire.map(item => {
          return(
            <div key = {item.id} className = "repetoire-card" onClick = {() => handleSelectTrack(item.id)}>
              {/* <img className = "repertoire__track-logo" src = {item.data.imgUrl === "" ? guitarImg : item.data.imgUrl } alt = "track"/> */}
              <h1>{item.data.name}</h1>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default repertoire