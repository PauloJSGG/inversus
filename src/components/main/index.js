import React from 'react'

const Main = ({text}) => {

  return (
    <>
      <div className='content-container'>
        <div className='shade1'></div>
          <p className='home__text m-3'>
            {text}
          </p>
          <div className='shade2'></div>
      </div>
    </>

  )
}

export default Main