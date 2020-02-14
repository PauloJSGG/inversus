import React from 'react'
import guitar1 from '../../assets/img/guitar1.jpg'

const Main = ({text}) => {

  return (
    <div className='content-container'>
      <div className='home'>
        <div className='home__text'>
          <div className='shade1'/>
            {text.split("\n").map(item => (
              <>
                <p>{item}</p>
                <img src={guitar1} className="home__image"/>
              </>
            ))}
          <div className='shade2'/>
        </div>
      </div>
    </div>
  )
}

export default Main