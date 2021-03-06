import React, { useEffect, useRef } from 'react'
import confetti from 'canvas-confetti'

import './ConfettiCanvas.scss'

// Helper functions
function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

function pickRandomFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

export default function ConfettiCanvas () {
  const canvasRef = useRef(null)

  // Some warning appears if I don't store the mutable value as a ref
  const fireConfettiRef = useRef(null)
  useEffect(() => {
    fireConfettiRef.current = confetti.create(canvasRef.current, {
      resize: true,
    })


    // Start after 10s for the element of surprise    
    setTimeout(() => {
      // Snow Confetti Effect
      setInterval(() => {
        // Pick a random color because first confetti always pick first color
        const randomColor = pickRandomFromArray([
          '#26ccff',
          '#a25afd',
          '#ff5e7e',
          '#88ff5a',
          '#fcff42',
          '#ffa62d',
          '#ff36ff'
        ])
  
        fireConfettiRef.current({
          particleCount: 1,
          startVelocity: 0,
          origin: {
            x: Math.random(),
            // since particles fall down, skew start toward the top
            y: (Math.random() * 0.2) - 0.2
          },
          colors: [randomColor],
          gravity: randomInRange(0.4, 0.6),
          scalar: randomInRange(0.6, 1),
          drift: randomInRange(-0.4, 0.4)
        })
      }, 300)
    }, 10000)
  }, [canvasRef])

  const clickCanvas = () => {
    fireConfettiRef.current({
      particleCount: 150,
      spread: 120,
      origin: {
        y: 1,
      }
    })
  }

  return (
    <canvas onClick={clickCanvas} className="confetti-canvas" ref={canvasRef} />
  )
}