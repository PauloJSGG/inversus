import React, { Component } from 'react'
import LanguageSelector from '../shared/LanguageSelector'
import Fire from '../../firebase/Fire'


const MainEdit = (props) => {

  const {
    handleSubmitHomeText,
    handleFormChange,
    formValue
  } = props

  return(
    <>
      <div className='flex flex-col justify-center my-5 items-center w-full'>
        <textarea onChange={e => handleFormChange(e.target.value)} className='h-56 w-1/2' value={formValue}></textarea>
        <button className='shared-button shared-button--second' type='submit'  title='submit' onClick={handleSubmitHomeText}>enviar</button>
      </div>
    </>
  )
}
// class MainEdit extends Component {
//   constructor(props){
//     super(props);
//     this.submitMain = this.submitMain.bind(this);

//     this.state = {
//       mainText: null
//     }
//   }

// }

export default MainEdit
