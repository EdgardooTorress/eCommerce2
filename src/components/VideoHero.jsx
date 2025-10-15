import React from 'react'

export default function VideoHero() {
  return (
    <div className="video">
      <video autoPlay loop muted playsInline preload="auto" src="/valentinoo.mp4"></video>
      <div className="video-msg"> ONE CLICK TO START SMELLING GOOD</div>
    </div>
  )
}
