import { useEffect, useRef, useState } from 'react'

import { UseDropdownNavigationTypes } from './DropdownNavigation.types'

export const useDropdownNavigation = (): UseDropdownNavigationTypes => {
  const [isOpened, setIsOpened] = useState<boolean>(false)
  const subNavRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    if (!isOpened) return

    const handleClick = (event) => {
      if (subNavRef.current && !subNavRef.current.contains(event.target)) {
        setIsOpened(false)
      }
      subNavRef?.current?.focus()
    }

    const closeDropdown = () => setIsOpened(false)

    window.addEventListener('click', handleClick)
    subNavRef.current?.addEventListener('mouseleave', closeDropdown)

    return () => window.removeEventListener('click', handleClick)
    subNavRef.current?.removeEventListener('mouseleave', closeDropdown)
  }, [isOpened])

  return {
    isOpened,
    setIsOpened,
    subNavRef,
  }
}
