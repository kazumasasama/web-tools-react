import * as React from 'react'
import MinTimer from './components/MinTimer.js';
import SecTimer from './components/SecTimer.js'

function Timer() {
  return (
    <div>
      <SecTimer/>
      <MinTimer/>
    </div>
  )
}

export default Timer;