import { Box, Card, CardContent, Typography } from '@mui/material'
import React from 'react'

export default function ToppingCard() {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <h2>Trending</h2>
      </div>
      <Card sx={{ maxWidth: 400, minHeight: '16rem', margin: '1rem' }}>
        <CardContent>
          <Typography sx={{ fontSize: 16 }} color='text.secondary' gutterBottom>
            With a Budget of 215$
          </Typography>
          <Typography variant='h5' gutterBottom>
            Best Hotel in Germany
          </Typography>
          <Typography>
            One of the best hotels is the Adina Apartment Hotel Berlin Mitte. This hotel is located in the heart of the city and offers modern apartments with fully equipped kitchens.
            The hotel also has a fitness center, an indoor pool, and a sauna.
          </Typography>
          <Box component='li' sx={{ '& > img': { mr: 2, flexShrink: 0 } }}>
            <img
              loading='lazy'
              width='20'
              src='https://flagcdn.com/w20/de.png'
              srcSet='https://flagcdn.com/w40/de.png 2x'
              alt='German flag'
            />
          </Box>
        </CardContent>
      </Card>
      <Card sx={{ maxWidth: 400, minHeight: '16rem', margin: '1rem' }}>
        <CardContent>
          <Typography sx={{ fontSize: 16 }} color='text.secondary' gutterBottom>
            With a Budget of $415
          </Typography>
          <Typography variant='h5' gutterBottom>
            Best Hotel in Barcelona:
          </Typography>
          <Typography>
            The Mandarin Oriental Barcelona. This hotel is located in the heart of the city and offers stunning views of the city and the Mediterranean Sea. The hotel has a modern design and features a rooftop pool, a spa, and a fitness center.
          </Typography>
          <Box component='li' sx={{ '& > img': { mr: 2, flexShrink: 0 } }}>
            <img
              loading='lazy'
              width='20'
              src='https://flagcdn.com/w20/es.png'
              srcSet='https://flagcdn.com/w40/es.png 2x'
              alt='Spain flag'
            />
          </Box>
        </CardContent>
      </Card>
      <Card sx={{ maxWidth: 400, minHeight: '17rem', margin: '1rem' }}>
        <CardContent>
          <Typography sx={{ fontSize: 16 }} color='text.secondary' gutterBottom>
            With a Budget of $315
          </Typography>
          <Typography variant='h5' gutterBottom>
            Hotels in Barcelona Spain:
          </Typography>
          <Typography>
            The Best choice is the Hotel Negresco Princess, which is a 4-star hotel located in the Eixample neighborhood. The hotel has a rooftop pool and terrace with views of the city, as well as a fitness center and a restaurant. Rates start at around $85/night.
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
