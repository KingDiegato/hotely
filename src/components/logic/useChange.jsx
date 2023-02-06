import { useState } from 'react'

export const useChange = () => {
  const [value, setValue] = useState(0)

  function handleChange(event, newValue) {
    return setValue(newValue)
  }

  return { value, handleChange }
}
