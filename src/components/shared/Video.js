import React, { Component } from 'react'
import video from '../../assets/img/Untitled.mp4'

export default class Video extends Component {

  componentDidMount() {
    const vid = document.getElementById('myVideo')
    vid.play()
  }

  render() {

    const {handleVideoEnded} = this.props

    return (
      <div>
        <video autoplay playsinline autobuffer id="myVideo" muted onEnded={handleVideoEnded} >
          <source src={video} type="video/mp4" />
        </video>
      </div>
    )
  }
}
