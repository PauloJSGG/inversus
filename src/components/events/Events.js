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

    const data = [{
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

    return (
      <div className='event'>
        {data.map(r => row(r))}
      </div>
    )
  }
}

export default Events;