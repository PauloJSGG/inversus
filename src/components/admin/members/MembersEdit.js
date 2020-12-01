import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Formik, Field, setFieldValue } from 'formik';
import Modal from 'react-modal';

import ModalMember from './ModalMember'
import ModalMemberText from './ModalMemberText'


const MembersEdit = (props) => {
  const {
    onModalOpen,
    onSubmit,
    onChange,
    onEditClick,
    onUpload,
    onDelete,
    onModalMemberOpen,
    onModalMemberTextOpen,
    onSubmitModalMemberText,


    isModalMemberOpen,
    isModalMemberTextOpen,
    members,
    values,
    currentMember,
    currentLanguage
  } = props

  return (
    <>
      <ModalMemberText
        values = {currentMember}
        currentLanguage = {currentLanguage}
        onSubmit = {onSubmitModalMemberText}
        isModalOpen = {isModalMemberTextOpen}
        onModalOpen = {onModalMemberTextOpen}
      />
      <ModalMember
        onModalOpen = {onModalMemberOpen}
        onSubmit = {onSubmit}
        isModalOpen = {isModalMemberOpen}
      />
      <div className='admin-members'>
        <div className='admin-members__list'>
          {members.map((item => {
              return(
                <>
                  <div key={item.id} onClick={() => onModalMemberTextOpen(true,item)} className="admin-members__row">
                    <h1>
                      {item.name}
                    </h1>
                  </div>
                  <button style={{color: 'red'}} onClick={() => onDelete(item.id)}><span role="img" aria-label="out">❌</span></button>
                </>
              )
          }))}
        </div>
      </div>
      <div style={{display: "flex", width: "100", justifyContent: "center "}}>
        <button className = 'shared-button shared-button--second' onClick = { () => onModalMemberOpen(true)}>Adicionar</button>
      </div>
    </>
  )
}

export default MembersEdit
