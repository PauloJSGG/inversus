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
        <h2 style = {{color: 'white'}} className = 'my-20'>Repertoio</h2>
        <Divider classs='test'  />
      </div>
      {/* <svg src = {divider}/> */}
      <div className = 'flex flex-row flex-wrap w-full'>
        {repertoire.map(item => {
          return(

            <div className = "repetoire-card">
              {/* <img className = "repertoire__track-logo" src = {item.data.imgUrl === "" ? guitarImg : item.data.imgUrl } alt = "track"/> */}
              <h1>{item.data.name}</h1>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default repertoire