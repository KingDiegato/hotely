import React, { useState } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'

export const TokenField = (props) => {
  const { onChange } = props
  const [items, setItems] = useState([])
  const [focus, setFocus] = useState(false)

  const handleAddItem = (event) => {
    const value = event.target.value

    if (
      /(,$)/.test(value) &&
      !/(^,)/.test(value.trim()) &&
      /[A-Za-z0-9]/.test(value.trim().replace(',', '')) &&
      value.trim() !== ''
    ) {
      const item = value.trim().replace(',', '')
      const newItems = [...items, item]

      setItems(newItems)
      onChange(newItems)

      event.target.value = ''
    }

    if (event.key === 'Backspace' && value === '') {
      const newItems = [...items.slice(0, -1)]

      setItems(newItems)
      onChange(newItems)
    }
  }

  const handleRemoveItem = (index) => (event) => {
    event.preventDefault()

    const newItems = items.filter((_, i) => i !== index)

    setItems(newItems)
    onChange(newItems)
  }

  return (
    <div className=''>
      <div
        className={`${focus ? 'highlight' : ''} `}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className=''
          >
            <span>{item}</span>
            <button onClick={handleRemoveItem(index)}>
              <XMarkIcon className='' />
            </button>
          </div>
        ))}
        <input
          type='text'
          className=''
          onChange={handleAddItem}
          onKeyDown={handleAddItem}
          placeholder={`${items.length ? '' : 'Comma separated ...,'}`}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        />
      </div>
    </div>
  )
}
