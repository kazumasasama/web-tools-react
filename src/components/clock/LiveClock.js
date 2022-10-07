import * as React from 'react'
import moment from 'moment'

function LiveClock() {
  const [currentTime, setCurrentTime] = React.useState(moment().format('YYYY-MM-DD HH:mm:ss'))

  React.useEffect(()=> {
    setInterval(() => {
      setCurrentTime(moment().format('YYYY-MM-DD HH:mm:ss'))
    },1000)
  }, [currentTime])

  return (
      <small className='text-end'>{currentTime}</small>
  )
}

export default LiveClock;