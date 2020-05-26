import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Social = () => {
  return (
    <div className="content-container">
      <div class="fb-page" data-href="https://www.facebook.com/inversusfado" data-tabs="timeline" data-width="" data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/inversusfado" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/inversusfado">In Versus - Grupo de Fados e Guitarradas de Coimbra</a></blockquote></div>
      <iframe src="http://www.youtube.com/embed/videoseries?list=UUbYgNYLv-PDjDbsMqLdu5eA" width="400px" height="400px"></iframe>
      <div className="social">
        <div className="shade1"/>
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