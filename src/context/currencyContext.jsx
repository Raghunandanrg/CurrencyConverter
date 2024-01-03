import React, { createContext, useState } from 'react'
export const currencyContext = createContext();

const CurrencyProvider = ({ children }) => {
    const [fromCurrency, setFromCurrency] = useState("🇺🇸 USD - United States")
    const [toCurrency, setToCurrency] = useState("🇮🇳 INR - India")
    const [firstAmount, setFirstAmount] = useState("1");

    const value = { fromCurrency, setFromCurrency, toCurrency, setToCurrency, firstAmount, setFirstAmount }
    return (
        <currencyContext.Provider value={value}>{children}</currencyContext.Provider>
    )
}

export default CurrencyProvider