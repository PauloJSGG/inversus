import React from 'react'
import guitarImg from '../../../assets/img/FADO.jpg'
import Divider from '../../shared/Divider.js'

export const repertoire = (props) => {
  const {
    repertoire,

  } = props

  return (
    <div>
      <div className = 'flex flex-row w-full'>
        <Divider classs='test test--flip' />
        <Divider classs='test'  />
      </div>
      {/* <svg src = {divider}/> */}
      {repertoire.map(item => {
        return(
          <div className = "repertoire">
            <img className = "repertoire__track-logo" src = {item.data.imgUrl === "" ? guitarImg : item.data.imgUrl } alt = "track"/>
            <h1>{item.data.name}</h1>
          </div>
        )
      })}
    </div>
  )
}

export default repertoire