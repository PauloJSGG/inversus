import React from 'react'

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


const Events = () => {

  const events = [
  {
    name: 'test1',
    date: '22/11/1888',
    location: 'silves'
  },
  {
    name: '2teste',
    date: '22/08/999',
    location: 'Lagoa'
  },
]

  return(
    <div className='event'>
      {events.map(r => row(r))}
    </div>
  )
}

// class Events extends Component {
//   debugger
//   render() {
//     const {events} = this.props;
//     console.log('events',this.props)
//     return (
//       <div className='event'>
//         {events.map(r => row(r))}
//       </div>
//     )
//   }
// }

export default Events;