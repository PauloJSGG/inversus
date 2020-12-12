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
          <div className="admin-parallax">
          <div className='shade1'/>
            {
              active.map((item, i) => (
                <div className="members-parallax__group">
                  <div className="members-parallax__layer members-parallax__layer--back">
                    <img src={item.imageUrl} className="members__img members-parallax__image" alt="paralax"/>
                  </div>
                  <div className="members-parallax__layer members-parallax__layer--base">
                      <p className="members__text" style={{color: 'white'}} >{item.name}</p>
                      <p className="members__text" style={{color: 'white', fontSize: '1rem', textShadow: '2px 2px #000000'}} >{item[currentLanguage] && item[currentLanguage].text}</p>
                  </div>
                </div>
              ))}
            {
              inactive.map((item, i) => 
                  <div className="members-parallax__group">
                    <div className="members-parallax__layer members-parallax__layer--back">
                      <img src={item.imageUrl} className="members__img members-parallax__image" alt="paralax"/>
                    </div>
                    <div className="members-parallax__layer members-parallax__layer--base">
                      <p className="members__text" style={{color: 'white'}} >{item.name}</p>
                      <p className="members__text" style={{color: 'white', fontSize: '1rem',  textShadow: '2px 2px #000000'}} >{item[currentLanguage] && item[currentLanguage].text}</p>
                    </div>
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
