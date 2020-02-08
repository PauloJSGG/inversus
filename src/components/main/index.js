import React from 'react'

const Main = ({text}) => {

  return (
    <div className='content-container'>
      <div className='flex justify-center w-1/2 text-center'>
        <div className='shade1'/>
          <div className='whitespace-pre-wrap' style={{color: 'white', fontSize: '20px', marginTop: '55px'}}>
            {text}
            <br/>
            <br/>
            <br/>
          </div>
        <div className='shade2'/>
      </div>
    </div>
  )
}

export default Main