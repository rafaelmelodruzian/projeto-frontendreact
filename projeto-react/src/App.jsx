import React, { useState } from 'react';
import Cart from './Componentes/ShoppingCart/Cart/Cart';
import Home from './Componentes/ProductList/Home/Home';
import Filters from './Componentes/Filters/Filters';
import AppStyle from './appStyle';
import productList from './Assets/ProductList';

function App() {
  const [minFilter, setMinFilter] = useState("10");
  const [maxFilter, setMaxFilter] = useState("100");
  const [searchFilter, setSearchFilter] = useState("");
  const [cartFilter, setCartFilter] = useState("cartFilter");
  const [amountFilter, setAmountFilter] = useState("amountFilter");
  const [ordinationFilter, setOrdinationFilter] = useState("Selecione")


  const handleMin = (e) => {
    if (e.target.value < 0) {
      setMinFilter(0)
      console.log(e.target.value)
      alert("Menor valor possivel é 0")
    } else {
      setMinFilter(e.target.value)
      console.log(e.target.value)
    }
  };

  const handleMax = (e) => {
    if (e.target.value < 10) {
      setMaxFilter(100)
      console.log(e.target.value)
      alert("Menor valor possivel é 10")
    } else {
      setMaxFilter(e.target.value)
      console.log(e.target.value)
    }
  };

  const handleSearch = (e) => {
    setSearchFilter(e.target.value)
    console.log(e.target.value)
  };

  const handleOrdena = (e) => {
    setOrdinationFilter(e.target.value)
    if (e.target.value === "Maior Valor") {
      console.log("Filtar Por Valor Maior | " + e.target.value)
    } else if (e.target.value === "Menor Valor") {
      console.log("Filtrar Por Valor Menor | " + e.target.value)
    } else {
      console.log("Escolhe alguma opção | " + e.target.value)
    }
  }



 




  return (
    <AppStyle>
      <Filters minFilter={minFilter} setMinFilter={setMinFilter} maxFilter={maxFilter} setMaxFilter={setMaxFilter} searchFilter={searchFilter} setSearchFilter={setSearchFilter} handleSearch={handleSearch} handleMin={handleMin} handleMax={handleMax} />
      <Home cartFilter={cartFilter} setCartFilter={setCartFilter} amountFilter={amountFilter} setAmountFilter={setAmountFilter} produtos={productList} ordinationFilter={ordinationFilter} setOrdinationFilter={setOrdinationFilter} handleOrdena={handleOrdena}  />
      <Cart cartFilter={cartFilter} setCartFilter={setCartFilter} amountFilter={amountFilter} setAmountFilter={setAmountFilter} />
    </AppStyle>
  );
}
export default App;

