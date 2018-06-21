import * as React from 'react'
import isFizzBuzz from '../utils/isFizzBuzz'
import Button from './Button'
import './CounterContainer.css'

class CounterContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  handleIncrement() {
    this.setState({ count: this.state.count + 1 })
  }

  handleDecrement() {
    this.setState({ count: this.state.count - 1 })
  }

  handleReset() {
    this.setState({ count: 0 })
  }

  render() {
    return (
      <div className="counter-container">
        <div className="counter-container-wrapper">
          <div className="counter-container-wrapper__count">
            <span>{isFizzBuzz(this.state.count)}</span>
          </div>
          <div className="counter-container-wrapper__buttons">
            <Button kind="primary" onClick={() => this.handleIncrement()}>Increment</Button>{' '}
            <Button onClick={() => this.handleDecrement()}>Decrement</Button>{' '}
            <Button onClick={() => this.handleReset()}>Reset</Button>
          </div>
        </div>
      </div>
    )
  }
}

export default CounterContainer
