import React from 'react'

const LanguageSelector = (props) => {

  const {
    languageList,
    currentLanguage,
    handleSetLanguage
  } = props

  const display = props.displaySelected ? 'inline-block' : 'none'

  return (
    <div>
       <div className = 'language-selector flex flex-row justify-center w-full my-5'>
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