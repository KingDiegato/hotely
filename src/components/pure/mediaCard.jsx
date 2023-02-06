import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'

export default function MediaCard({ name, src, children }) {
  return (
    <Card variant='elevation' elevation={6} sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component='img'
          sx={{ height: 140 }}
          image={src}
          title='green iguana'
        />
      </CardActionArea>
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {name}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {children}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small'>Search</Button>
        <Button size='small'>Learn More</Button>
      </CardActions>
    </Card>
  )
}
