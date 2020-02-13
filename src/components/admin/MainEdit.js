import React from 'react'

const MainEdit = (props) => {

  const {
    handleSubmitHomeText,
    handleFormChange,
    formValue
  } = props

  return(
    <>
      <div className='flex flex-col justify-center my-5 items-center w-full'>
        <textarea onChange={e => handleFormChange(e.target.value)} className='h-56 w-1/2 whitespace-pre-line' value={formValue}></textarea>
        <button className='shared-button shared-button--second' type='submit'  title='submit' onClick={handleSubmitHomeText}>enviar</button>
      </div>
    </>
  )
}

export default MainEdit
