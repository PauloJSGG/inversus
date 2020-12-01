import React from 'react'

const Members = (props) => {
  const {
    members,
    currentLanguage
  } = props

  const active = members.filter(item => item.active).sort((a, b) => a.name !== b.name ? a.name < b.name ? -1 : 1 : 0);
  const inactive = members.filter(item => !item.active).sort((a, b) => a.name !== b.name ? a.name < b.name ? -1 : 1 : 0);

  return (
    <div className="content-container">
      <div className="members">
        <div className='shade1'/>
          <div className="members-container">
            {
              active.map((item, i) => 
                  <div>
                    <img src={item.imageUrl} className="members__img" alt="paralax"/>
                    <p className="members__text whitespace-pre-wrap" style={{color: 'white'}} >{item.name}</p>
                    <p className="members__text whitespace-pre-wrap" style={{color: 'white', fontSize: '1rem'}} >{item[currentLanguage] && item[currentLanguage].text}</p>
                  </div>
                )
            }
            {
              inactive.map((item, i) => 
                  <div>
                    <img src={item.imageUrl} className="members__img" alt="paralax"/>
                    <p className="members__text whitespace-pre-wra  p" style={{color: 'white'}} >{item[currentLanguage] && item[currentLanguage].text}</p>
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
