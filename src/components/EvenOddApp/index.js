// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  getRandom = () => Math.ceil(Math.random() * 100)

  onIncrement = () => {
    const random = this.getRandom()
    this.setState(preValue => ({count: preValue.count + random}))
    console.log('clicked')
  }

  render() {
    const {count} = this.state
    const text = count % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div className="bg-container">
        <h1 className="header">Count {count}</h1>
        <p className="paara">Count is {text}</p>
        <button className="btn" type="button" onClick={this.onIncrement}>
          Increment
        </button>
        <p className="para">*Increase By Random Number Between 0 to 100</p>
      </div>
    )
  }
}

export default EvenOddApp
