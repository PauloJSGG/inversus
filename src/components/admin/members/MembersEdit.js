import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Formik, Field, setFieldValue } from 'formik';
import Modal from 'react-modal';

import ModalMember from './ModalMember'

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
    handleModalMemberOpen,

    isModalMemberOpen,
    members,
    values,
    currentMember,
    currentLanguage
  } = props

  return (
    <>
      <ModalMemberText
        values = {currentMember[currentLanguage].text}
      />
      <ModalMember
        {...props}
      />
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
      <button className = 'shared-button shared-button--second' onClick = { () => handleModalMemberOpen(true)}>Adicionar</button>
    </>
  )
}

export default MembersEdit
