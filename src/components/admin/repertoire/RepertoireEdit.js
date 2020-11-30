import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Modal from 'react-modal';
import { Formik, Field, setFieldValue } from 'formik';
import ModalSong from './ModalSong'
import ModalLyric from './ModalLyric'

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
    values,
    handleModalOpen,
    handleModalSongOpen,
    handleModalLyricOpen,

    isModalOpen,
    repertoire,
    currentSong
  } = props

  return (
    <>
      <ModalSong
        {...props}
      />
      <ModalLyric
        {...props}
      />
      <div className='admin-repertoire'>
        <div className = 'admin-repertoire__list'>
          {repertoire.map((item => {
              return(
                <>
                  <div key={item.id} onClick = {() => handleModalLyricOpen(true,item) } className="admin-repertoire__row">
                    <h1>
                      {item.name}
                    </h1>
                  </div>
                  <button style={{color: 'red'}} onClick={() => props.handleDelete(item.id)}><span role="img" aria-label="out">❌</span></button>
                </>
              )
          }))}
        </div>
          <button
            style={{}}
            className='shared-button shared-button--second'
            onClick = { () => handleModalSongOpen(true)}
          >
            Adicionar Musica
          </button>
      </div>
    </>
  )
}

export default RepertoireEdit
