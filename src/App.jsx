import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Main, Login, Cart } from "./Components"


function App() {

  const [ cocks, setCocks ] = React.useState([]);

  const [ account, setAccount ] = React.useState([
    { id: uuid(), name: 'admin', password: 'admin' },
    { id: uuid(), name: 'qwerty', password: '123' },
  ]);

  const [ cart, setCart ] = React.useState([])

  const url = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail";

  React.useEffect(() => {
    fetch(url).then(response => response.json()).then((data1) => {
      setCocks(data1.drinks)
    });
  }, []);
 
 console.log(cocks)
}

export default App;