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

const MembersEdit = (props) => {
  const {
    handleModalOpen,
    handleSubmitMember,
    handleMembersChange,
    handleEditClick,
    isModalOpen,
    members,
    currentMember
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
              <input name = "name" value = {currentMember.data.name} onChange={e => handleMembersChange(e)}/>
            </div>
            <div className = 'flex justify-between m-3'>
              <label>URL Imagem:</label>
              <input name = "imgUrl" value = {currentMember.data.imgUrl} onChange={e => handleMembersChange(e)}/>
            </div>
            <div className = 'flex justify-between m-3'>
              <label >Texto:</label>
              <textarea name = "text" value = {currentMember.data.text} className='h-56 w-1/2 whitespace-pre-line' onChange={e => handleMembersChange(e)}/>
            </div>
            <div className = 'flex justify-end'>
              <button
                className = 'shared-button shared-button--second'
                onClick = {handleSubmitMember}
                type='submit'
                title='submit'
              >
                <FontAwesomeIcon icon={['fas','plus']} />
              </button>
            </div>
          </div>
        </Modal>
        <div className = 'flex flex-row flex-wrap w-1/4'>
          {members.map((item => {
              return(
                <>
                  <div key={item.id} onClick = {() => handleEditClick(item.id) } className = "repetoire-card" >
                    <h1>
                      {item.data.name}
                    </h1>
                    {/* <button data-id={item.id} onClick = {() => handleEditClick(item.id) }><FontAwesomeIcon icon={['fas','edit']} /></button> */}
                  </div>
                  {/* <button onClick = {() => props.handleRemoveTrack(item.id)}>❌</button> */}
                </>
              )
          }))}
        </div>
        <button className = 'shared-button shared-button--second' onClick = { () => handleModalOpen(true)}>Adicionar</button>
      </div>
    </>
  )
}

export default MembersEdit
