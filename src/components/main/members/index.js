import React from 'react'

const Members = (props) => {
  const {
    members,
    currentLanguage
  } = props

  return (
    <div className="content-container">
      <div className="members">
        <div className='shade1'/>
          <div className="members-container">
            {
              members.map((item, i) => 
                  <div>
                    <img src={item.imageUrl} className="members__img" alt="paralax"/>
                    <p className="members__text whitespace-pre-wrap" style={{color: 'white'}} >{item[currentLanguage] && item[currentLanguage].text}</p>
                  </div>
                )
            }
          </div>
        <div className='shade2'/>
      </div>
    </div>
  )
}

export default Members;
