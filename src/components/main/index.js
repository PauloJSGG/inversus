import React from 'react'

const Main = ({text}) => {

  return (
    <div className='content-container fixed overflow-y-scroll h-full w-full flex flex-col items-center'>
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