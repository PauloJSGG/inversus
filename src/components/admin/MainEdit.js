import React, { Component } from 'react'
import Fire from '../../firebase/Fire'


const MainEdit = (props) => {

  const {
    handleSubmitMain,
    handleFormChange,
    handleSetLanguage,
    languageList,
    currentLanguage,
    formValue
  } = props

  return(
    <>

      <div className='flex flex-col justify-center my-5 items-center w-full'>
        <div className = 'flex flex-row justify-around w-1/2 my-5'>
          {
            languageList.map((item) => {
              debugger
              if (item.language === currentLanguage)
                return <img src = {item.imgSrc} style = {{width: '50px', border: '5px solid #ddd'} }/>
              else
                return <button onClick = { () => handleSetLanguage(item.language)}><img src = {item.imgSrc} style = {{width: '50px'} }/></button>
            })
          }

        </div>
        <textarea onChange={e => handleFormChange(e.target.value)} className='h-56 w-1/2' value={formValue}></textarea>
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
