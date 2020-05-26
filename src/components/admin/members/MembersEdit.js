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
    handleSubmit,
    handleChange,
    handleEditClick,
    handleUpload,

    isModalOpen,
    members,
    currentMember
  } = props

  return (
    <>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => handleModalOpen(false)}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className='admin-modal'>
          <div className='admin-modal__row'>
            <label className='admin-modal__label'>Nome:</label>
            <input className='admin-modal__input' name = "name" value = {currentMember.name} onChange={e => handleChange(e)}/>
          </div>
          <div className = 'admin-modal__row'>
            <label className='admin-modal__label'>Imagem:</label>
            <input type="file" name="file"  onChange={e => handleUpload(e)}/>
          </div>
          <div className = 'admin-modal__row'>
            <label    className='admin-modal__label'>Texto:</label>
            <textarea className='admin-modal__textarea' name = "text" value = {currentMember.text} onChange={e => handleChange(e)}/>
          </div>
          <div className = 'admin-modal__button'>
            <button
              className = 'shared-button shared-button--second'
              onClick = {handleSubmit}
              type='submit'
              title='submit'
            >
              <FontAwesomeIcon icon={['fas','plus']} />
            </button>
          </div>
        </div>
      </Modal>
      <div className='admin-members'>
        <div className='admin-members__list'>
          {members.map((item => {
              return(
                <>
                  <div key={item.id} onClick={() => handleEditClick('currentMember',item)} className="admin-members__row">
                    <h1>
                      {item.name}
                    </h1>
                  </div>
                  <button style={{color: 'red'}} onClick={() => props.handleDelete(item.id)}><span role="img" aria-label="out">❌</span></button>
                </>
              )
          }))}
        </div>
      </div>
      <button className = 'shared-button shared-button--second' onClick = { () => handleModalOpen(true)}>Adicionar</button>
    </>
  )
}

export default MembersEdit
