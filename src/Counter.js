import * as React from 'react'
import TextCounter from './components/TextCounter';
import TapCounter from './components/TapCounter';

function Counter() {
  return (
    <div>
      <TapCounter/>
      <TextCounter/>
    </div>
  )
}

export default Counter;