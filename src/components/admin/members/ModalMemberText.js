import React from 'react'
import { Formik, Field, setFieldValue } from 'formik';
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

const FormRender = (props) => {
  const { setFieldValue, handleSubmit, values, currentLanguage } = props;

  return(
    <form onSubmit={handleSubmit}>
      <div className='admin-modal'>
        <div className='admin-modal__row'>
          <label className='admin-modal__label'>Texto:</label>
          <textarea className='admin-modal__textarea' name = "lyric" value = {values[currentLanguage] ? values[currentLanguage].text : ""} onChange={(e) => setFieldValue(`${currentLanguage}.text`, e.currentTarget.value)}/>
        </div>
        <div className = 'admin-modal__row'>
          <label className='admin-modal__label'>Activo?</label>
          <Field type="checkbox" name="active"/>
        </div>
        <div className = 'admin-modal__button'>
          <button
            className = 'shared-button shared-button--second'
            type='submit'
            title='submit'
          >
            <FontAwesomeIcon icon={['fas','plus']} />
          </button>
        </div>
      </div>
    </form>
  )
}

const ModalMemberText = (props) => {
  const {
    onSubmit,
    onModalOpen,
    values,
    isModalOpen,
    currentLanguage
  } = props
  return (
    <Modal
      isOpen={isModalOpen}  
      onRequestClose={() => onModalOpen(false)}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <Formik
        initialValues={{
          ...values
        }}
        onSubmit={onSubmit}
      >
        {props => <FormRender currentLanguage={currentLanguage} {...props}/>}  
      </Formik>
    </Modal>
  )
}

export default ModalMemberText
