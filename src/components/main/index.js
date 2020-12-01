import React from 'react'

import guitar1 from '../../assets/img/home/guitar1.jpg'
import guitar2 from '../../assets/img/home/guitar2.jpg'
import guitar3 from '../../assets/img/home/guitar3.jpg'
import guitar4 from '../../assets/img/home/guitar4.jpg'
import guitar5 from '../../assets/img/home/guitar5.jpg'

const guitars = [
  guitar1,
  guitar2,
  guitar3,
  guitar4,
  guitar5,
]

const Main = ({homeText, currentLanguage}) => {
  return (
    <div className="content-container">
      <div className="home">
        <div className="home__text">
          <div className="shade1"/>
            {homeText[currentLanguage] && homeText[currentLanguage].replace(/[\r\n]{2,}/g, "\n").split('\n').map((item, i,) => (
              <>
                <p>{item}</p>
                {guitars[i] && <img src={guitars[i]} className="home__image" alt="home"/>}
              </>
            ))}
          <div className="shade2"/>
        </div>
      </div>
    </div>
  )
}

export default Main