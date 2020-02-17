import React from 'react'

const Members = (props) => {
  const {dynamicData} = props

  return (
    <div className="content-container">
      <div className="members">
        <div className='shade1'/>
          <div className="members-container">
            {
              dynamicData.members.map((item, i) => {
                const leftOrRight = i % 2 === 0 ? 'left' : 'right';
                return leftOrRight === 'left' ? (
                  <div>
                    <img src={item.imgUrl} className="members__img" alt="paralax"/>
                    <p className="members__text whitespace-pre-wrap">{item.text}</p>
                  </div>
                ) : (
                  <div>
                   <p className="members__text whitespace-pre-wrap">{item.text}</p>
                   <img src={item.imgUrl} className="members__img" alt="paralax"/>
                  </div>
                )
                }

                )
              })
            }
          </div>
        <div className='shade2'/>
      </div>
    </div>
  )
}

export default Members;
