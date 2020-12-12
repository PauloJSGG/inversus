import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Formik, Field, setFieldValue } from 'formik';
import Modal from 'react-modal';

import pt from '../../../assets/img/pt.svg'
import en from '../../../assets/img/gb.svg'
import de from '../../../assets/img/de.svg'

import ModalMember from './ModalMember'
import ModalMemberText from './ModalMemberText'

import languages from '../../../util/languages'

import { confirmAlert } from 'react-confirm-alert';
import "react-confirm-alert/src/react-confirm-alert.css";

const flags = {
  pt: pt,
  en: en,
  de: de
}

const MembersEdit = (props) => {
  const {
    onDelete,
    onModalMemberOpen,
    onSubmitModalMember,


    isModalMemberOpen,
    members,
    currentMember,
    currentLanguage,
  } = props


  const confirmDelete = (item) => {
    confirmAlert({
      title: 'Confirmar',
      message: 'Tem a certeza que deseja eliminar o membro?',
      buttons: [
        {
          label: 'Sim',
          onClick: () => onDelete(item)
        },
        {
          label: 'Não',
        }
      ]
    });
  }


  return (
    <>
      <ModalMember
        values = {currentMember}
        onModalOpen = {onModalMemberOpen}
        onSubmit = {onSubmitModalMember}
        isModalOpen = {isModalMemberOpen}
        currentLanguage = {currentLanguage}
      />

      <div className='admin-list'>
        {members.map((item => {
            return(
              <>
                <div key={item.id} className="admin-list__item" style={{backgroundColor: item.active ? '#245201' : '#AB0D0D'}}>
                  <h1>
                    {item.name}{Object.keys(item).map(element => {
                      if(languages.includes(element)){
                        return <img src={flags[element]} style={{width: '30px',  margin: '2px 2px'}}></img>
                    }
                })}
                  </h1>
                  <button className="admin-list__button" onClick={() => onModalMemberOpen(true, item)}><span role="img" aria-label="out">Editar</span></button>
                  <button className="admin-list__button" onClick={() => confirmDelete(item)}><span role="img" aria-label="out">Apagar</span></button>
                </div>
              </>
            )
        }))}
      </div>
      <div style={{display: "flex", width: "100", justifyContent: "center "}}>
        <button className = 'shared-button shared-button--second' onClick = { () => onModalMemberOpen(true)}>Adicionar</button>
      </div>
    </>
  )
}

export default MembersEdit
