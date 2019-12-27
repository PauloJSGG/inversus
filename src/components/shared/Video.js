import React, { Component } from 'react'
import video from '../../assets/img/INTRO_480P.mp4'

export default class Video extends Component {

  componentDidMount() {
    const vid = document.getElementById('myVideo')
    vid.volume = 0.1;
    vid.play()
  }

  render() {

    const {handleVideoEnded} = this.props

    return (
      <div>
        <video autoplay playsinline autobuffer id="myVideo" onEnded={handleVideoEnded} >
          <source src={video} type="video/mp4" />
        </video>

      </div>
    )
  }
}
