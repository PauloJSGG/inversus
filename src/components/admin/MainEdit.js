import React, { Component } from 'react'
import Fire from '../../firebase/Fire'

class MainEdit extends Component {

  constructor(props){
    super(props);
    this.submitMain = this.submitMain.bind(this);

    this.state = {
      mainText: null
    }
  }

  componentDidMount() {
    Fire.db().child('mainText').on('value', x => x.forEach(y=> this.setState({mainText: y.val()})))
  }

  onFormChange(txt) {
    this.setState({
      mainText: txt
    })
  }

  submitMain() {
    Fire.db().child('mainText').set(this.state)
  }

  render() {
    return(
      <>
        <div className='flex flex-col justify-center my-5 items-center'>
          {this.state.mainText == null ? null :
            <textarea onChange={(e) => this.onFormChange(e.target.value)} className='h-24 w-1/2' value={this.state.mainText}></textarea>
          }
          <button className='shared-button shared-button--second' type='submit'  title='submit' onClick={() => this.submitMain()}>enviar</button>
        </div>
      </>
    )
  }
}

export default MainEdit
