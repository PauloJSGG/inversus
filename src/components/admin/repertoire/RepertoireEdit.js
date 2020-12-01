import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Modal from 'react-modal';
import { Formik, Field, setFieldValue } from 'formik';
import ModalSong from './ModalSong'
import ModalLyric from './ModalLyric'

import pt from '../../../assets/img/pt.svg'
import en from '../../../assets/img/gb.svg'
import de from '../../../assets/img/de.svg'

import languages from '../../../util/languages'

const flags = {
  pt: pt,
  en: en,
  de: de
}


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

const RepertoireEdit = (props) => {
  const {
    onModalSongOpen,
    onModalLyricOpen,
    onSubmitSongForm,
    onSubmitLyricForm,
    onDelete,
    onVisibility,
    isModalSongOpen,  
    isModalLyricOpen,
    currentSong,
    currentLanguage,
    repertoire,
  } = props

  return (
    <>
      <ModalSong
        onModalOpen = {onModalSongOpen}
        isModalOpen = {isModalSongOpen}
        submitForm = {onSubmitSongForm}
      />
      <ModalLyric
        onModalOpen = {onModalLyricOpen}
        onSubmitForm = {onSubmitLyricForm}
        isModalOpen = {isModalLyricOpen}  
        currentSong = {currentSong}
        currentLanguage = {currentLanguage}
      />
      <div className='admin-repertoire'>
        <div className = 'admin-repertoire__list'>
          {repertoire.map((item => {
              return(
                <>
                  <div key={item.id} onClick = {() => onModalLyricOpen(true,item) } className="admin-repertoire__row">
                    <h1>
                      {item.name}{Object.keys(item).map(element => {
                        if(languages.includes(element)){
                          return <img src={flags[element]} style={{width: '30px',  margin: '2px 2px'}}></img>
                      }
                  })}
                    </h1>
                  </div>
                  <button style={{color: 'red'}} onClick={() => onDelete(item)}><span role="img" aria-label="out">❌</span></button>
                  <button style={{color: 'red'}} onClick={() => onVisibility(item)}>{item.visibility ? <FontAwesomeIcon icon={['fas','eye-slash']}/> : <FontAwesomeIcon icon={['fas','eye']}/>}</button>
                </>
              )
          }))}
        </div>
          <button
            style={{}}
            className='shared-button shared-button--second'
            onClick = { () => onModalSongOpen(true)}
          >
            Adicionar Musica
          </button>
      </div>
    </>
  )
}

export default RepertoireEdit
