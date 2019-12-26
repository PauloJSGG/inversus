import React from 'react'

const Main = ({text}) => {

  return (
    <div className='overflow-hidden fixed'>
      <div className='flex justify-center'>
        <div className='shade1 '/>
          <h1 className='home__text m-3'>
            {text}
          </h1>
        <div className='shade2'/>
      </div>
    </div>

  )
}

export default Main