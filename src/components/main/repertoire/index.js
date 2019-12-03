import React from 'react'

export const repertoire = (props) => {
  const {
    repertoire
  } = props

  return (
    <div>
      {repertoire.map(item => {
        return(
          <div>
            <img src = {item.data.imageUrl}/>
            <h1>{item.data.name}</h1>
          </div>
        )
      })}
    </div>
  )
}

export default repertoire