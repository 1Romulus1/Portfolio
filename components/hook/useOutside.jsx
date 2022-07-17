import { useEffect, useRef, useState } from "react"

export function useOutside(isVisible) {
  const [isShow, setIsShow] = useState(isVisible)
  const ref = useRef(null)

  function handleClickOutside(e) {
    if(ref.current && !ref.current.contains(e.target)) {
      setIsShow(false)
    }
  }
  useEffect(function() {
    document.addEventListener('click', handleClickOutside, true)
    return function() {
      document.removeEventListener('click', handleClickOutside, true)
    }
  })

  return {
    ref, isShow, setIsShow
  }
}