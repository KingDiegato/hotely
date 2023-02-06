import { useState, useEffect, useRef } from 'react'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import refreshImages from './logic/refreshImages'
import ItemList from './pure/itemList'
import ButtonStage from './pure/buttonStages'
import { useChange } from './logic/useChange'

export default function HotelSample() {
  const ref = useRef(null)
  const [images, setImages] = useState(() => refreshImages())

  const { value, handleChange } = useChange()

  useEffect(() => {
    ref.current.ownerDocument.body.scrollTop = 0
    setImages(refreshImages())
  }, [value, setImages])

  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      <CssBaseline />
      <ButtonStage onChange={handleChange} value={value} />
      <ItemList images={images} />
    </Box>
  )
}
