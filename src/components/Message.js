import * as React from 'react'

function Message(props) {
  const [message, setMessage] = React.useState("Yo!")
  return (
    <div>
      <h2>{ message }</h2>
      <h2>{ props.message }</h2>
    </div>
  )
}

export default Message;