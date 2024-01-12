import { Box, Button, Container, Grid, Typography } from '@mui/material';
import './App.css';

import InputAmount from './components/InputAmount';
import SelectCountry from './components/SelectCountry';
import SwitchCurrency from './components/SwitchCurrency';
import { useContext, useEffect, useState } from 'react';
import { currencyContext } from './context/currencyContext';
import axios from 'axios';
import { GitHub } from '@mui/icons-material';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
function App() {

  const { fromCurrency, setFromCurrency, toCurrency, setToCurrency, firstAmount, setFirstAmount } = useContext(currencyContext)
  const [resultcurrency, setResultCurrency] = useState(0)
  const codeFromCountry = fromCurrency.split(" ")[1]
  const codeToCountry = toCurrency.split(" ")[1]

  useEffect(() => {
    if (firstAmount) {
      axios("https://api.freecurrencyapi.com/v1/latest", {
        params: {
          apikey: (process.env.REACT_APP_API_KEy),
          base_currency: codeFromCountry,
          currencies: codeToCountry
        }
      }).then(respone => setResultCurrency(respone.data.data[codeToCountry]))
        .catch(error => console.log(error))
    }
  }, [firstAmount, fromCurrency, toCurrency])
  const boxStyles = {
    background: "white",
    marginTop: "10em",
    textAlign: "center",
    color: "#222",
    minHeight: "20rem",
    borderRadius: 2,
    padding: "4em 2em",
    boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1);",
    position: "relative"
  }
  
  return (
    <Container maxWidth="md" sx={boxStyles}>
    
          
          <Typography  variant='h5' sx={{ marginBottom: "2em",fontWeight:"bold" }}> 
          <CurrencyExchangeIcon sx={{fontSize: "1.3rem"}} />
          <box className='title'> Xchange</box> Pal</Typography>
      <Typography variant='h5' sx={{ marginBottom: "2em",fontWeight:"bold" }}> Get real time currency rates</Typography>
      <Grid container spacing={2}>
        <InputAmount />
        <SelectCountry label="from" value={fromCurrency} setValue={setFromCurrency} />
        <SwitchCurrency />
        <SelectCountry label="to" value={toCurrency} setValue={setToCurrency} />
      </Grid>
      {firstAmount ? (
        <Box sx={{ textAlign: "left", marginTop: "1em" }}>
          <Typography>{firstAmount} {fromCurrency} = </Typography>
          <Typography variant='h5' sx={{ marginTop: "5px", fontWeight: "bold" }}>{resultcurrency * firstAmount} {toCurrency}</Typography>
        </Box>
      ) : ""}
      <Typography fontSize="10px" sx={{ position: "absolute", bottom: "1rem", right: "4rem" }}>
      <a href='https://github.com/Raghunandanrg' rel="noopener noreferrer" target="_blank">
          <GitHub />
        </a>
      </Typography>


    </Container>
  )
}

export default App;
