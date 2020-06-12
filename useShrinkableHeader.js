import { useState, useEffect } from 'react'

export default (threshold = 20) => {
  const [shrinked, setShrinked] = useState(false)
  
  function setHeaderSize() {
    const distanceY = window.pageYOffset
    setShrinked(distanceY > threshold)
  }

  useEffect(() => {
    window.addEventListener('scroll', setHeaderSize)
    return () => window.removeEventListener('scroll', setHeaderSize)
  }, [])

  return shrinked
}
