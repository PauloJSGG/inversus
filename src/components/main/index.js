import React from 'react'

const Main = ({text}) => {

  return (
    <div className='content-container'>
      <div className='home'>
        <div className='shade1'/>
          <div className='home__text'>
            {text}
          </div>
        <div className='shade2'/>
      </div>
    </div>
  )
}

export default Main