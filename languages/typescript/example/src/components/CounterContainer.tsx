import * as React from 'react'
import isFizzBuzz from '../utils/isFizzBuzz'
import Button from './Button'
import './CounterContainer.css'

interface RootState {
  count: number
}

class CounterContainer extends React.Component<{}, RootState> {
  constructor(props: any) {
    super(props)
    this.state = {
      count: 0
    }
  }

  public render() {
    return (
      <div className="counter-container">
        <div className="counter-container-wrapper">
          <div className="counter-container-wrapper__count">
            <span>{isFizzBuzz(this.state.count)}</span>
          </div>
          <div className="counter-container-wrapper__buttons">
            <Button kind="primary" onClick={this.handleIncrement}>
              Increment
            </Button>{' '}
            <Button onClick={this.handleDecrement}>Decrement</Button> <Button onClick={this.handleReset}>Reset</Button>
          </div>
        </div>
      </div>
    )
  }

  private handleIncrement = () => {
    this.setState({ count: this.state.count + 1 })
  }

  private handleDecrement = () => {
    this.setState({ count: this.state.count - 1 })
  }

  private handleReset = () => {
    this.setState({ count: 0 })
  }
}

export default CounterContainer
