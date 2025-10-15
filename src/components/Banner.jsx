import React, { useEffect, useState } from 'react'

export default function Banner() {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const targetDate = new Date('2025-12-12T00:00:00-04:00').getTime()

    const tick = () => {
      const now = Date.now()
      const distance = Math.max(targetDate - now, 0)

      const days = Math.floor(distance / 1000 / 60 / 60 / 24)
      const hours = Math.floor(distance / 1000 / 60 / 60) % 24
      const minutes = Math.floor(distance / 1000 / 60) % 60
      const seconds = Math.floor(distance / 1000) % 60

      setTime({ days, hours, minutes, seconds })
    }

    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="banner">
      <div className="sale"><p>FLASH SALE⚡️ </p></div>

      <div className="time">
        <h2 id="days">{String(time.days).padStart(2, '0')}</h2>
        <p>Days</p>
      </div>
      <div className="time">
        <h2 id="hours">{String(time.hours).padStart(2, '0')}</h2>
        <p>Hours</p>
      </div>
      <div className="time">
        <h2 id="minutes">{String(time.minutes).padStart(2, '0')}</h2>
        <p>Minutes</p>
      </div>
      <div className="time">
        <h2 id="seconds">{String(time.seconds).padStart(2, '0')}</h2>
        <p>Seconds</p>
      </div>
    </div>
  )
}
