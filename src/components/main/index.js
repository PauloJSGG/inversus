import React from 'react'

const Main = ({text}) => {

  return (
    <>
      <div className='shade1'/>
        <p className='home__text m-3'>
          {text}
        </p>
      <div className='shade2'/>
    </>

  )
}

export default Main