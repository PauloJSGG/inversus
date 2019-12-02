import React from 'react'
// import Fire from '../../firebase/Fire'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Modal from 'react-modal';

Modal.setAppElement('#root')

const customStyles = {
  content: {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    backgroundColor       : 'black'
  },
  overlay: { backgroundColor: 'rgba(188,158,91,0.2)' }
};

const RepertoireEdit = (props) => {
  const { handleIsAddingTrack, isAddingTrack, repertoire } = props

  return (
    <>
      <div className = 'w-full flex flex-col justify-center my-5 items-center'>
        <Modal
          isOpen={isAddingTrack}
          // onAfterOpen={afterOpenModal}
          onRequestClose={() => handleIsAddingTrack(false)}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className = 'repetoire-modal'>
            <div className = 'flex justify-between m-3'>
              <label>Nome:</label>
              <input/>
            </div>
            <div className = 'flex justify-between m-3'>
              <label>Texto:</label>
              <input/>
            </div>
            <div className = 'flex justify-between m-3'>
              <label>URL Imagem:</label>
              <input/>
            </div>
            <div className = 'flex justify-between m-3'>
              <label>URL Spotify:</label>
              <input/>
            </div>
            <div className = 'flex justify-end'>
              <button className = 'shared-button shared-button--second'><FontAwesomeIcon icon={['fas','plus']} /></button>
            </div>
          </div>
        </Modal>


          {repertoire.map((item => {
            return(
              <div className = "repetoire-card">
                <h1>
                  {item.name}
                </h1>
                <button><FontAwesomeIcon icon={['fas','edit']} /></button>
              </div>
            )
          }))}
          <button className = 'shared-button shared-button--second' onClick = { () => handleIsAddingTrack(true)}>Adicionar</button>
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