import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Contacts = (props) => {
  return (
    <div className="content-container">
      <div>
        <div className='shade1'/>
          <div className="">
            <div style={{width: '100%', textAlign: 'left'}}>
              <a style={{color: 'white'}} href="mailto:inversusfado.coimbra@gmail.com">
              <FontAwesomeIcon
                icon={['fa','mail-bulk']}
                style={{height: '1em',  width: '1rem', margin:'5px', color: 'white'}}
              /> inversusfado.coimbra@gmail.com </a>
            </div>
            <div style={{width: '100%'}}>
              <a style={{color: 'white'}} href="tel:+351919667068">
              <FontAwesomeIcon
                icon={['fa','phone']}
                style={{height: '1em',  width: '1rem', margin:'5px', color: 'white'}}
              />+351 919 667 068</a>
            </div>
            </div>
        <div className='shade2'/>
      </div>
    </div>
  )
}

export default Contacts;
