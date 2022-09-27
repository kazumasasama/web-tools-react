import * as React from 'react'
import Message from './components/Message';

function Home() {
  return(
    <div>
      <h1>HOME</h1>
      <Message
        message="What's up?"
      />
    </div>
  )
}

export default Home;