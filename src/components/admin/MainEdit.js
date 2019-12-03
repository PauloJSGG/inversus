import React, { Component } from 'react'
import Fire from '../../firebase/Fire'

const MainEdit = (props) => {

  const {handleSubmitMain, handleFormChange, formValue} = props


  return(
    <>
      <div className='flex flex-col justify-center my-5 items-center w-full'>
        {formValue == null ? null :
          <textarea onChange={e => handleFormChange(e.target.value)} className='h-56 w-1/2' value={formValue}></textarea>
        }
        <button className='shared-button shared-button--second' type='submit'  title='submit' onClick={handleSubmitMain}>enviar</button>
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
