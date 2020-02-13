import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Social = () => {
  return (
    <div className="content-container">
      <div className="social">
        <a
          href="https://www.facebook.com/inversusfado/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={['fab','facebook']}
            style={{height: '4em',  width: '4rem', margin:'5px'}}
          />
        </a>
        <a
          href="https://www.instagram.com/inversusfado/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={['fab','instagram']}
            style={{height: '4em',  width: '4rem', margin:'5px'}}
          />
        </a>
        <a
          href="https://open.spotify.com/artist/68hqv7bUIw71HHJExldzLZ"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={['fab','spotify']}
            style={{height: '4em',  width: '4rem', margin:'5px'}}
          />
        </a>
        <a
          href="https://www.youtube.com/channel/UCbYgNYLv-PDjDbsMqLdu5eA"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={['fab','youtube']}
            style={{height: '4em',  width: '4rem', margin:'5px'}}
          />
        </a>
      </div>
    </div>
  )
}

export default Social