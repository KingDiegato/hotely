import { List, ListItem } from '@mui/material'
import { Container } from '@mui/system'
import React, { useEffect, useState } from 'react'

export default function ItemList({ images }) {
  const [vw, setVw] = useState(window.innerWidth)

  useEffect(() => {
    window.addEventListener('resize', function () {
      const newVw = window.innerWidth
      setVw(newVw)
    })
  }, [vw])

  const hotelImg = {
    width: '200px',
    height: '200px',
    backgroundColor: 'tomato',
    aspectRatio: '1/1'
  }
  return (
    <Container maxWidth={vw < 600 ? 'xs' : 'sm' && vw < 910 ? 'sm' : 'md' && vw < 1280 ? 'md' : 'lg'}>
      <List sx={{ display: 'flex', overflowX: 'auto' }}>
        {images.map(({ city, secondary, hotel }, index) => (
          <aside key={index + hotel}>
            <ListItem>
              <img
                src={hotel}
                alt={`Here is an image of an hotel from ${city}`}
                style={hotelImg}
              />
            </ListItem>
            <p style={{ marginLeft: '1.2rem' }}>
              <b>{city}</b>
              <br />
              <span style={{ fontSize: '12px' }}>
                {secondary}
              </span>
            </p>
          </aside>
        ))}
      </List>
    </Container>
  )
}
