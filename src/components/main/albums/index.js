import React from 'react'
import capa from '../../../assets/img/albums/capa.png'
import contracapa from '../../../assets/img/albums/contracapa.png'
import cd from '../../../assets/img/albums/cd.png'
import inside from '../../../assets/img/albums/inside.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Albums = (props) => {


  return (
    <div className = "content-container">
      <div className="albums">
        <div className="shade1"/>
        <div className="albums__spotify">
          <a
            href="https://open.spotify.com/album/3XpVLtxY894BuJv6TAKqTY?highlight=spotify:track:2wvHmg6WIfktTiSiCopVsA"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={['fab','spotify']}
              style={{height: '4em',  width: '4rem', margin:'5px', color: 'white'}}
            />
          </a>
        </div>
        <div className="albums-container">
          <img src={capa}/>
          <img src={contracapa}/>
          <img src={cd}/>
          <img src={inside} className="albums__inside1"/>
          <img src={inside} className="albums__inside2"/>
        </div>
        <div className="shade2"/>
      </div>
    </div>
  )
}

export default Albums