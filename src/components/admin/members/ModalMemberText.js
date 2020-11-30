import React from 'react'
import { Formik, Field, setFieldValue } from 'formik';

const FormRender = (props) => {
  const { setFieldValue, handleSubmit, currentMember } = props;

  return(
    <form onSubmit={handleSubmit}>
      <div className='admin-modal'>
        <div className='admin-modal__row'>
          <div className='admin-modal__row'>
            <label className='admin-modal__label'>Texto:</label>
            <textarea className='admin-modal__textarea' name = "lyric" value = {values.text} onChange={(e) => setFieldValue("text", e.currentTarget.value)}/>
          </div>
        </div>
      </div>
    </form>
  )
}

const ModalMemberText = (props) => {
  return (
    <Modal
      isOpen={isModalMemberOpen}
      onRequestClose={() => handleModalMemberOpen(false)}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <Formik
        initialValues={values ? values : {
          text: "",
        }}
        onSubmit={handleSubmit}
      >
        {props => <FormRender {...props}/>}  
      </Formik>
    </Modal>
  )
}

export default ModalMemberText
