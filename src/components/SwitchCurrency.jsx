import { Button, Grid } from '@mui/material'
import { useContext } from 'react'
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import { currencyContext } from '../context/currencyContext';
const SwitchCurrency = () => {
  const{fromCurrency,setFromCurrency,toCurrency,setToCurrency}=useContext(currencyContext)

  const handleSwitch=()=>{
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency)
  }
  return (
    <Grid item xs={12} md="auto">
        <Button onClick={handleSwitch} sx={{borderRadius:1,height:"100%"}}>  <SwapHorizIcon /></Button>
    </Grid>
  )
}

export default SwitchCurrency