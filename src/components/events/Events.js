import React, { Component } from 'react'

const row = (props) => {
  console.log(props)
  const {name, date, location} = props;
  return (
    <div className='event__card m-5'>
      <h1>nome: {name}</h1>
      <h1>data: {date}</h1>
      <h1>localização: {location}</h1>
    </div>
  )
}

class Events extends Component {
  render() {
    const {events} = this.props;
    console.log('events',this.props)
    return (
      <div className='event'>
        {events.map(r => row(r))}
      </div>
    )
  }
}

export default Events;