import React from 'react'
import guitarImg from '../../../assets/img/FADO.jpg'

export const repertoire = (props) => {
  const {
    repertoire
  } = props

  return (
    <div>
      {repertoire.map(item => {
        return(
          <div className = "repertoire">
            <img className = "repertoire__track-logo" src = {item.data.imageUrl === "" ? guitarImg : item.data.imageUrl } alt = "track"/>
            <h1>{item.data.name}</h1>
          </div>
        )
      })}
    </div>
  )
}

export default repertoire