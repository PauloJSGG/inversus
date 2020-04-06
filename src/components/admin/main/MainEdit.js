import React from 'react'

// const addNewLine = (text) => {
//   const split = text.split('\n')
//   let added = []
//   split.forEach(item => added.push(`${item}\n\n`))
//   console.log('2:',added)
//   return added.reduce((a, b) => a.concat(b))
// }

// const removeNewLine = (text) => {

// }

const MainEdit = (props) => {

  const {
    handleSubmitHomeText,
    handleFormChange,
    formValue
  } = props

  // const formValueWithNewLine = addNewLine(formValue)

  return(
    <>
      <div className='admin-main'>
        <textarea
          onChange={e => handleFormChange(e.target.value)}
          className='admin-main__input'
          value={formValue}
        />
        <button
          className='shared-button shared-button--second'
          type='submit'
          title='submit'
          onClick={handleSubmitHomeText}
        >
          enviar
        </button>
      </div>
    </>
  )
}

export default MainEdit
