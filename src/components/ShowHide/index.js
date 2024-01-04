// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {first: false, last: false}

  firstName = () => {
    this.setState(prevState => ({first: !prevState.first}))
  }

  lastName = () => {
    this.setState(prevState => ({last: !prevState.last}))
  }

  render() {
    const {first, last} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="buttonContainer">
          <div className="firstName">
            <button type="button" className="button" onClick={this.firstName}>
              Show/Hide Firstname
            </button>
            {first && (
              <div className="nameContainer">
                <p className="description">Joe</p>
              </div>
            )}
          </div>
          <div className="lastName">
            <button type="button" className="button" onClick={this.lastName}>
              Show/Hide Lastname
            </button>
            {last && (
              <div className="nameContainer">
                <p className="description">Jonas</p>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
