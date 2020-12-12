import React from 'react'
import { Formik, Field, setFieldValue } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Modal from 'react-modal';
import * as Yup from 'yup';
import _ from 'lodash';

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
  const { setFieldValue, handleSubmit,currentLanguage, currentMember, values, errors, initialValues } = props;

  const hasErrors = Object.keys(errors).length > 0;
  const hasChanged = !_.isEqual(values, initialValues);

  return(
    <form onSubmit={handleSubmit}>
      {
        errors &&
        Object.keys(errors).map(key => (
          <div style={{color: 'red'}}>{errors[key]}</div>
        ))
      }
      <div className='admin-modal'>
        {
          values.imageUrl &&
          <div className='admin-modal__row'>
            <img src={values.imageUrl} style={{ height: '300px', objectFit: 'cover' }}/>
          </div>
        }
        <div className='admin-modal__row'>
          <label className='admin-modal__label'>Nome:</label>
          <Field className='admin-modal__input' name="name"/>
        </div>
        {
          values.imageUrl &&
          <div className = 'admin-modal__row'>
            <label className='admin-modal__label'>Mudar de Foto:</label>
            <input type="file" name="file" onChange={(e) => setFieldValue("imageUpdate", e.currentTarget.files[0])}/>
          </div>
        }
        {
          !values.imageUrl &&
          <div className = 'admin-modal__row'>
            <label className='admin-modal__label'>Foto:</label>
            <input type="file" name="file" onChange={(e) => setFieldValue("image", e.currentTarget.files[0])}/>
          </div>
        }
        <div className='admin-modal__row'>
          <label className='admin-modal__label'>Texto:</label>
          <textarea className='admin-modal__textarea' name = "text" value = {values[currentLanguage] ? values[currentLanguage].text : ""} onChange={(e) => setFieldValue(`${currentLanguage}.text`, e.currentTarget.value)}/>
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
            disabled={!hasChanged || hasErrors}
          >
            Adicionar
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
    onModalOpen,
    currentLanguage
  } = props

  let validation = {}

  if(values && values.imageUrl)
    validation = Yup.object().shape({
      name: Yup.string()
        .min(1)
        .required('Nome necessário')
      ,
      active: Yup.boolean()
        .required('Required')
    });
  else 
    validation = Yup.object().shape({
      name: Yup.string()
        .min(1)
        .required('Nome necessário')
      ,
      active: Yup.boolean()
        .required('Required'),
      image: Yup.mixed()
        .required('Foto necessária')
    });

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
          active: false,
          imageUrl: "",
        }}
        validationSchema={validation}
        onSubmit={onSubmit}
      >
        {props => <FormRender currentLanguage = {currentLanguage} {...props}/>}  
      </Formik>
    </Modal>
  )
}

export default ModalMember