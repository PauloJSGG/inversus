// import React from 'react'
// import { Formik, Field, setFieldValue } from 'formik';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import Modal from 'react-modal';
// import {countries} from 'country-flag-icons'
// import Flags from 'country-flag-icons/modules/react/3x2'

// Modal.setAppElement('#root')

// const customStyles = {
//   content: {
//     top                   : '50%',
//     left                  : '50%',
//     right                 : 'auto',
//     bottom                : 'auto',
//     marginRight           : '-50%',
//     transform             : 'translate(-50%, -50%)',
//     backgroundColor       : 'black'
//   },
//   overlay: { zIndex: 99999, backgroundColor: 'rgba(188,158,91,0.2)' }
// };

// const FormRender = (props) => {
//   const { setFieldValue, onSubmit, currentMember, values } = props;

//   return(
//     <form onSubmit={onSubmit}>
//       <div className='admin-modal'>
//         <div className='admin-modal__row'>
//           <div className='admin-modal__row'>
//             <label className='admin-modal__label'>Lingua:</label>
//             <select name="countries" id="countries">
//               {countries.map(item => {
//                 return(
                  
//                 )
                
//               })}
//             </select>
//           </div>
//         </div>
//       </div>
//     </form>
//   )
// }

// const ModalLanguage = (props) => {
//   const {
//     values,
//     isModalOpen,
//     onModalOpen,
//     onSubmit
//   } = props
//   return (
//     <Modal
//       isOpen={isModalOpen}
//       onRequestClose={() => onModalOpen(false)}
//       style={customStyles}
//       contentLabel="Example Modal"
//     >
//       <Formik
//         initialValues={values ? values : {
//           text: "",
//         }}
//         onSubmit={onSubmit}
//       >
//         {props => <FormRender {...props}/>}  
//       </Formik>
//     </Modal>
//   )
// }

// export default ModalLanguage
