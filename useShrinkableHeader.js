import { useState, useEffect } from 'react'

/*
  * SHRINKED HEADER STATE CONDITION
  *
  * The "document.body.style.top" condition is here to keep shrinked header state when opening mobile menu with header being already shrinked
  * With this condition, we can check if mobile menu is open (because mobile menu sets a body top property) AND if content has been scrolled
  *
  * TL;DR: without this condition, header always "unshrinks" when opening mobile menu
  */

export default (threshold = 20) => {
  const [shrinked, setShrinked] = useState(false)

  function setHeaderSize() {
    const distanceY = window.pageYOffset
    setShrinked(distanceY > threshold || document.body.style.top !== '0px') // see comment
  }

  useEffect(() => {
    window.addEventListener('scroll', setHeaderSize)
    return () => window.removeEventListener('scroll', setHeaderSize)
  }, [])

  return shrinked
}
