import React from 'react'

const Members = (props) => {
  debugger
  const {dynamicData} = props



  return (
    <div className="content-container">
      {
        dynamicData.members.map((data, i) => {
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
