import React from 'react'

const LanguageSelector = (props) => {

  const {
    languageList,
    currentLanguage,
    handleSetLanguage,
  } = props

  return (
    <div>
       <div className = 'flex flex-row justify-center w-full my-5'>
          {
            languageList.map((item) => {
              if (item.language === currentLanguage)
                return <img src = {item.imgSrc} style = {{width: '50px', border: '5px solid #ddd', margin: '2px 2px' }}/>
              else
                return <button onClick = { () => handleSetLanguage(item.language)}><img src = {item.imgSrc} style = {{width: '50px', margin: '2px 2px'}}/></button>
            })
          }
        </div>
    </div>
  )
}

export default LanguageSelector