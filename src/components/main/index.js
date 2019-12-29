import React from 'react'

const Main = ({text}) => {

  const test = text.split('\\n')

  console.log('teste ', text)

  return (
    <div className='content-container fixed overflow-y-scroll h-full w-full flex flex-col items-center'>
      <div className='flex justify-center'>
        <div className='shade1 '/>
          <div className='whitespace-pre-line' style={{color: 'white'}}>
            {text}
          </div>
        <div className='shade2'/>
      </div>
    </div>

  )
}

export default Main