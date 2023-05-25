import React, { useState } from 'react';
import Cart from './Componentes/ShoppingCart/Cart/Cart';
import Home from './Componentes/ProductList/Home/Home';
import Filters from './Componentes/Filters/Filters';
import AppStyle from './appStyle';
import productList from './Assets/ProductList';

function App() {
  const [minFilter, setMinFilter] = useState("0");
  const [maxFilter, setMaxFilter] = useState("0");
  const [searchFilter, setSearchFilter] = useState("0");
  const [cartFilter, setCartFilter] = useState("0");
  const [amountFilter, setAmountFilter] = useState("0");

  return (
    <AppStyle>
      <Filters />
      <Home produtos={productList} />
      <Cart />
    </AppStyle>
  );
}

export default App;

