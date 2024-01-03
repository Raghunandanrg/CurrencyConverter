import React, { useContext } from 'react'
import { Grid, InputAdornment, TextField } from '@mui/material'
import { currencyContext } from '../context/currencyContext'

const InputAmount = () => {
  const { firstAmount, setFirstAmount } = useContext(currencyContext)
  return (
    <Grid item xs={12} md>
      <TextField value={firstAmount} onChange={event => setFirstAmount(event.target.value)} label="Amount" fullWidth inputProps={{ type: "number", startAdornment: <InputAdornment position='start'>$</InputAdornment> }} />
    </Grid>
  )
}

export default InputAmount