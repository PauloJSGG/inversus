import React, { Component } from 'react'
import Fire from '../../firebase/Fire'

class DiscographyEdit extends Component {

  state = {
    numberOfTracks: 0,
    discography: null
  }

  componentDidMount() {
    Fire.db().child('discography').on('value', x => this.setState({discography: x.val()}))
  }

  onFormChange(txt) {
    this.setState({
      mainText: txt
    })
  }

  submitMain() {
    Fire.db().child('mainText').set(this.state)
  }

  onInputChange = (num) => {
    console.log(num)
    this.setState({numberOfTracks: num})
  }

  render() {
    console.log(this.state.discography)
    return(
      <>
        <div className='content-container'>
          <div>
            {
              this.state.discography != null ?
              this.state.discography.map(x => console.log(x)) : null
            }
          </div>
        </div>
      </>
    )
  }
}

export default DiscographyEdit