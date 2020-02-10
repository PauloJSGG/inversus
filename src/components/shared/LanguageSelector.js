import React from 'react'

const LanguageSelector = (props) => {
  const {
    languageList,
    currentLanguage,
    handleSetLanguage,
    isAdmin
  } = props

  const display = isAdmin ? 'inline-block' : 'none'

  let styles = ['language-selector']

  if(!isAdmin)
    styles = styles.concat('language-selector').join(' ')

  return (
    <div>
       <div className = {styles}>
          {
            languageList.map((item) => {
              if (item.language === currentLanguage)
                return <img src = {item.imgSrc} style = {{width: '50px', border: '5px solid #ddd', margin: '2px 2px', display: display }}/>
              else
                return <button onClick = { () => handleSetLanguage(item.language)}><img src = {item.imgSrc} style = {{width: '50px', height: '30px', margin: '2px 2px'}}/></button>
            })
          }
        </div>
    </div>
  )
}

export default LanguageSelector
