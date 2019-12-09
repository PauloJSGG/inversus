import React from 'react'

const LanguageSelector = (props) => {

  const {languageList, currentLanguage, handleSetLanguage} = props

  return (
    <div>
       <div className = 'flex flex-row justify-around w-1/2 my-5'>
          {
            languageList.map((item) => {
              if (item.language === currentLanguage)
                return <img src = {item.imgSrc} style = {{width: '50px', border: '5px solid #ddd'} }/>
              else
                return <button onClick = { () => handleSetLanguage(item.language)}><img src = {item.imgSrc} style = {{width: '50px'} }/></button>
            })
          }
        </div>
    </div>
  )
}

export default LanguageSelector