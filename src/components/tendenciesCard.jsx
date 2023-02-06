import { Box, Card, CardContent, Typography } from '@mui/material'
import React from 'react'
import { Te } from './letters/letters'

export default function TendenciesCard() {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <h2> <Te />rending</h2>
      </div>
      <Card sx={{ minWidth: 400, minHeight: '16rem', margin: '1rem' }}>
        <CardContent>
          <Typography sx={{ fontSize: 16 }} color='text.secondary' gutterBottom>
            Top 5 Hotels
          </Typography>
          <Typography variant='h5' gutterBottom>
            Hotels in La Plata Argentina:
          </Typography>
          <Typography>
            1. The Grand Hotel La Plata.
            <br />
            2. The Hotel Plata Views
            <br />
            3. The Obelisk Hotel.
            <br />
            4. The Esmeralda.
            <br />
            5. The Monaco Suites.
          </Typography>
          <Box component='li' sx={{ '& > img': { mr: 2, flexShrink: 0 } }}>
            <img
              loading='lazy'
              width='20'
              src='https://flagcdn.com/w20/ar.png'
              srcSet='https://flagcdn.com/w40/ar.png 2x'
              alt='Argentina flag'
            />
          </Box>
        </CardContent>
      </Card>
      <Card sx={{ minWidth: 400, minHeight: '16rem', margin: '1rem' }}>
        <CardContent>
          <Typography sx={{ fontSize: 16 }} color='text.secondary' gutterBottom>
            Top 5 Hotels
          </Typography>
          <Typography variant='h5' gutterBottom>
            Hotels in Las Vegas California:
          </Typography>
          <Typography>
            1. The MGM Grand.
            <br />
            2. The Venetian.
            <br />
            3. The Palazzo.
            <br />
            4. The Bellagio.
            <br />
            5. The Wynn Las Vegas.
          </Typography>
          <Box component='li' sx={{ '& > img': { mr: 2, flexShrink: 0 } }}>
            <img
              loading='lazy'
              width='20'
              src='https://flagcdn.com/w20/us.png'
              srcSet='https://flagcdn.com/w40/us.png 2x'
              alt='Argentina flag'
            />
          </Box>
        </CardContent>
      </Card>
      <Card sx={{ minWidth: 400, minHeight: '16rem', margin: '1rem' }}>
        <CardContent>
          <Typography sx={{ fontSize: 16 }} color='text.secondary' gutterBottom>
            Top 5 Hotels
          </Typography>
          <Typography variant='h5' gutterBottom>
            Hotels in Barcelona Spain:
          </Typography>
          <Typography>
            1. The Hotel Arts.
            <br />
            2. The Mandarin Oriental.
            <br />
            3. The Renaissance Barcelona.
            <br />
            4. The Le Meridien.
            <br />
            5. The Claris Hotel.
          </Typography>
          <Box component='li' sx={{ '& > img': { mr: 2, flexShrink: 0 } }}>
            <img
              loading='lazy'
              width='20'
              src='https://flagcdn.com/w20/es.png'
              srcSet='https://flagcdn.com/w40/es.png 2x'
              alt='Argentina flag'
            />
          </Box>
        </CardContent>
      </Card>
    </>
  )
}
