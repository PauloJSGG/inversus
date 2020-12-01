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
  const { setFieldValue, handleSubmit, currentMember } = props;

  return(
    <form onSubmit={handleSubmit}>
      <div className='admin-modal'>
        <div className='admin-modal__row'>
          <label className='admin-modal__label'>Nome:</label>
          <Field className='admin-modal__input' name="name"/>
        </div>
        <div className = 'admin-modal__row'>
          <label className='admin-modal__label'>Imagem:</label>
          <input type="file" name="file" onChange={(e) => setFieldValue("image", e.currentTarget.files[0])}/>
        </div>
        <div className = 'admin-modal__row'>
          <label    className='admin-modal__label'>Activo?</label>
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

const ModalMember = (props) => {
  const {
    values,
    isModalOpen,
    onSubmit,
    onModalOpen
  } = props

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={() => onModalOpen(false)}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <Formik
        initialValues={values ? values : {
          name: "",
          image: {},
          active: false,
        }}
        onSubmit={(values) => {
          if(values.image.size < 5097152)
            onSubmit(values);
          else
            alert("Ficheiro demasiado grande")
        }}
      >
        {props => <FormRender {...props}/>}  
      </Formik>
    </Modal>
  )
}

export default ModalMember