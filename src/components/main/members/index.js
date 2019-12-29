import React from 'react'

const Members = (props) => {
  const {members} = props

  return (
    <div className="content-container">
      {
        members.map((data, i) => {
          return(
            <>
              <img src={data.src}/>
              <p>{data.text}</p>
            </>
          )
        })
      }
    </div>
  )
}

export default Members;
