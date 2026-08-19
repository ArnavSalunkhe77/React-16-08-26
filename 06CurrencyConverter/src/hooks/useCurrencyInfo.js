// `Give me a currency like usd, and I'll go to the API, get all the exchange rates for USD, and give those rates back to my component.`

import {useState, useEffect} from 'react';

let useCurrencyInfo = (currency) => {
    const [currencyInfo, setCurrencyInfo] = useState({});
    // Think of useEffect as: "Run this code when currency changes." For example: currency : usd then this effect runs and then if currency : inr then this effect runs again. So, the effect runs whenever the currency changes.
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`) // `Give me all exchange rates where ${currency} is the base currency.`
        .then((res) => res.json()) //fetch is used to get the data from the api and then the data is converted to json from the string format 
        .then((data) => setCurrencyInfo(data[currency])); //the data is then set to the state variable currencyInfo
        
    }, [currency]);
    console.log(currencyInfo);
    return currencyInfo;
}

export default useCurrencyInfo; 

// Custom hook is a function that starts with use and can call other hooks. It is used to share logic between components. 
// In this case, the custom hook is used to fetch the currency information from the API and return it to the component that calls it.
//  The useEffect hook is used to fetch the data when the component mounts and when the currency changes.`