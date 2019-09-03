import React from 'react'

const Home = ({text}) => {

  console.log(text)
  return (
    <>
    <div className='home p-8'>
      <div className='shade1'></div>
        <p className='home__text m-3'>
          <br/>
          <br/>
          {text}
        </p>
        <div className='shade2'></div>
    </div>

    </>

  )
}

export default Home