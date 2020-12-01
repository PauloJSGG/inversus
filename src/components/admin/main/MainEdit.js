import React from 'react'

import { Formik, Field } from 'formik';

const FormRender = (props) => {
  const { setFieldValue, handleSubmit, values, currentLanguage } = props;

  
  return (
    <form onSubmit={handleSubmit}>
       <div className='admin-main'>
       <textarea className='admin-main__input' name = {currentLanguage} value = {values[currentLanguage] ? values[currentLanguage] : ""} onChange={(e) => setFieldValue(currentLanguage, e.currentTarget.value)}/>
          <button
            className='shared-button shared-button--second'
            type='submit'
            title='submit'
          >
            enviar
        </button>
       </div>
    </form>
  )
}

const MainEdit = (props) => {
  
  const {
    onSubmit,
    onFormChange,
    formValue,
    currentLanguage,
    values
  } = props

  return(
        <Formik
          initialValues={values ? values : {
          }}
          onSubmit={onSubmit}
          >
            {props => <FormRender currentLanguage={currentLanguage} onSubmit={onSubmit} {...props}/>}   
          </Formik>
  )
}

export default MainEdit
