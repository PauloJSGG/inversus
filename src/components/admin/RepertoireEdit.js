import React from 'react'
// import Fire from '../../firebase/Fire'

const RepertoireEdit = (props) => {
  const { handleIsAddingTrack, isAddingTrack } = props

  return (
    <>
      <div className='content-container'>
        { isAddingTrack && (
          <div className="modal">
            <h1 style = {{color: 'red'}}>TOU AQUI CARALHO</h1>
            <form>
              <label>
                <input/>
              </label>

              <label>
                <input/>
              </label>

              <label>
                <input/>
              </label>

              <label>
                <input/>
              </label>
            </form>
          </div>
        )}
        <button style = {{color: 'red'}} onClick = { () => handleIsAddingTrack(true)}>Adicionar música</button>
      </div>
    </>
  )
}

// class Repertoire extends Component {

//   state = {
//     numberOfTracks: 0,
//     discography: null
//   }

//   componentDidMount() {
//     Fire.db().child('discography').on('value', x => this.setState({discography: x.val()}))
//   }

//   onFormChange(txt) {
//     this.setState({
//       mainText: txt
//     })
//   }

//   submitMain() {
//     Fire.db().child('mainText').set(this.state)
//   }

//   onInputChange = (num) => {
//     console.log(num)
//     this.setState({numberOfTracks: num})
//   }

//   render() {
//     console.log(this.state.discography)
//     return(
//       <>
//         <div className='content-container'>
//           <div>
//             {
//               this.state.discography != null ?
//               this.state.discography.map(x => console.log(x)) : null
//             }
//           </div>
//         </div>
//         {}
//       </>
//     )
//   }
// }

export default RepertoireEdit