import { forwardRef, useState } from 'react'
import PropTypes from 'prop-types'

import TextField from '@mui/material/TextField'

import { NumericFormat } from 'react-number-format'

const NumericFormatCustom = forwardRef(function NumericFormatCustom(props, ref) {
  const { onChange, ...other } = props

  return (
    <NumericFormat
      {...other}
      getInputRef={ref}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value
          }
        })
      }}
      thousandSeparator
      valueIsNumericString
      prefix='$'
    />
  )
})

NumericFormatCustom.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default function NumericInput({ id, reference }) {
  const [num, setNum] = useState({
    numberformat: ''
  })

  const handleChange = (event) => {
    setNum({
      ...num,
      [event.target.name]: event.target.value
    })
  }
  return (
    <>
      <TextField
        label='Budget'
        ref={reference}
        value={num.numberformat}
        onChange={handleChange}
        helperText='insert your MAX Budget'
        name='numberformat'
        id={id}
        InputProps={{
          inputComponent: NumericFormatCustom
        }}
        variant='outlined'
      />
    </>
  )
}
