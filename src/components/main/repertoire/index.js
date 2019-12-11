import React from 'react'
import guitarImg from '../../../assets/img/FADO.jpg'
import Divider from '../../shared/Divider.js'

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

export const repertoire = (props) => {
  const {
    staticData,
    dynamicData,
    currentTrack,
    handleSelectTrack,
    handleModalOpen,
    isModalOpen
  } = props

  return (
    <div>
      <div className = 'flex flex-row w-full'>
        <Divider classs='test test--flip' />
  <h2 style = {{color: 'white'}} className = 'my-20'>{staticData.repertoire}</h2>
        <Divider classs='test'  />
      </div>
      {/* <svg src = {divider}/> */}
      <Modal
          isOpen={isModalOpen}
          // onAfterOpen={afterOpenModal}
          onRequestClose={() => handleModalOpen(false)}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className = 'repetoire-modal'>
            <div className = 'flex justify-between m-3'>
              <h1>{currentTrack.name}</h1>
            </div>

            <div className = 'flex justify-between m-3'>
              <h1>{currentTrack.lyrics}</h1>
            </div>

          </div>
        </Modal>
      <div className = 'flex flex-row flex-wrap w-full'>
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