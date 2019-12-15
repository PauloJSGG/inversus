import React, { Component } from 'react'
import video from '../../assets/img/Intro Site.mp4'

export default class Video extends Component {

  componentDidMount() {
    document.getElementById('myVideo').play()
  }

  render() {
    return (
      <div>
        <video autoplay playsinline autobuffer id="myVideo"  >
          <source src={video} type="video/mp4" />
        </video>
      </div>
    )
  }
}
