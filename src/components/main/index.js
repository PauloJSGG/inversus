import React from 'react'

const Main = ({text}) => {

  return (
    <>
      <div className='shade1'/>
        <h1 className='home__text m-3'>
          {text}
        </h1>
      <div className='shade2'/>
    </>

  )
}

export default Main