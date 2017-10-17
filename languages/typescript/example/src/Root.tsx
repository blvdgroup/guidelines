import * as React from 'react'

import Header from './components/Header'
import CounterContainer from './components/CounterContainer'
import './Root.css'

interface RootState {
  count: number
}

class Root extends React.Component<{}, RootState> {
  constructor (props: any) {
    super(props)
    this.state = {
      count: 0
    }
  }
  render() {
    return (
      <div className="root">
        <Header />
        <CounterContainer />
      </div>
    )
  }
}

export default Root
