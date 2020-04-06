import React from 'react'

const LanguageSelector = (props) => {
  const {
    languageList,
    currentLanguage,
    handleSetLanguage,
    isAdmin
  } = props

  const display = isAdmin ? 'inline-block' : 'none'

  return (
    <div className={`language-selector${isAdmin ? '' : '--animated'}`}>
        {
          languageList.map((item) => {
            console.log('languages: ', currentLanguage, item.language)
            if (item.language === currentLanguage)
              return <img src={item.imgSrc} alt="language" style={{width: '50px', border: '5px solid #ddd', margin: '2px 2px', display: display }}/>
            else
              return (
                <button
                  onClick={() => handleSetLanguage(item.language)}
                  className="language-selector__button"
                >
                  <img src={item.imgSrc} alt="language" style={{width: '50px', height: '30px', margin: '2px 2px'}}/>
                </button>
              )

          })
          }
    </div>
  )
}

export default LanguageSelector
