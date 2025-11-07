import { useState, useEffect } from 'react'

export default function TypingEffect({ text, speed = 80 }) {
  const [displayText, setDisplayText] = useState('')

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      setDisplayText(text.substring(0, i + 1))
      i++
      if (i === text.length) clearInterval(interval)
    }, speed)
    return () => clearInterval(interval)
  }, [text, speed])

  return <span className="typing">{displayText}</span>
}
