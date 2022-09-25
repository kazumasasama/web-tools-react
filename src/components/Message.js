import * as React from 'react'

function Message(props) {
  const [message, setMessage] = React.useState("What's up?")
  return (
    <div>
      <h2>{ message }</h2>
      <h2>{ props.message }</h2>
    </div>
  )
}

export default Message;