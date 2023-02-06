import React from 'react'
import '../../styles/starting.css'

export default function ReceiverInput({ id }) {
  const textareaStyle = {
    resize: 'vertical',
    fontFamily: 'System ui',
    fontSize: '24px',
    width: 'auto-fill',
    minHeight: '360px',
    backgroundColor: 'white',
    borderRadius: '0.5rem',
    borderColor: '#00000040',
    padding: '10px'
  }
  return (
    <>
      <br />
      <div style={{ height: 'auto', padding: '1vw' }}>
        <textarea className='use-font-family sizing-textarea' style={textareaStyle} id={id} disabled />
      </div>
    </>
  )
}
