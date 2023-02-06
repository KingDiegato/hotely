import { Button, Card, CardContent, Divider, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { FiveStars } from '../../assets/svg'

export default function ToolCard({ children, toolParagraph, btnLabel }) {
  const stylizedBtn = {
    margin: '1rem'
  }
  const stylizedCard = {
    maxWidth: '320px',
    minHeigth: '16rem'
  }
  return (
    <Card variant='outlined' sx={stylizedCard}>
      <CardContent>
        <Typography variant='h4'>
          {children}
        </Typography>
        <br />
        <FiveStars />
        <br />
        <Divider />
        <Typography variant='p'>
          {toolParagraph}
        </Typography>
      </CardContent>
      <Link to='/ranking'>
        <Button sx={stylizedBtn} variant='contained' color='warning'>
          {btnLabel}
        </Button>
      </Link>
    </Card>
  )
}
