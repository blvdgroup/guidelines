import * as React from 'react'

import Header from './components/Header'
import CounterContainer from './components/CounterContainer'
import './Root.css'

const Root = () => (
  <div className="root">
    <Header />
    <CounterContainer />
  </div>
)

export default Root
