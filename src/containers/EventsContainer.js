import React, { Component } from 'react'
import Events from '../components/main/events'

export default class EventsContaner extends Component {
  state = {
    events: [
      {
        name: "fados no algarve",
        date: "22/11/2019",
        location: "Lagoa"
      },
      {
        name: "vinho na casa",
        date: "01/09/2020",
        location: "Portimao"
      }
    ]
  }

  render() {
    return (
      <Events events={this.state.events}/>
    )
  }
}
