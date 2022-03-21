import { useState, useEffect } from 'react';

export default function useHover(target) {
  const [isHover, setIsHover] = useState(false)

  useEffect(() => {
    if (target) {
      const on = () => setIsHover(true)
      const off = () => setIsHover(false)

      target.addEventListener('pointerover', on)
      target.addEventListener('pointerleave', off)

      return () => {
        target.removeEventListener('pointerover', on)
        target.removeEventListener('pointerleave', off)
      }
    }
  }, [target])

  return isHover
}