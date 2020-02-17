import React from 'react'
import capa from '../../../assets/img/albums/capa.png'
import contracapa from '../../../assets/img/albums/contracapa.png'
import cd from '../../../assets/img/albums/cd.png'

const Albums = (props) => {


  return (
    <div className = "content-container">
      <div className="albums">
        <div className="shade1"/>
        <div className="albums-container">
          <img src={capa}/>
          <img src={contracapa}/>
          <img src={cd}/>
        </div>
        <div className="shade2"/>
      </div>
    </div>
  )
}

export default Albums