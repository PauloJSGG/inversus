import React from 'react'

const Main = ({text}) => {

  return (
    <div className='content-container'>
      <div className='home'>
        <div className='home__text'>
          <div className='shade1'/>
            {text}
          <div className='shade2'/>
          </div>
      </div>
    </div>
  )
}

export default Main