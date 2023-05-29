import React, { useEffect, useState } from "react";
import Cart from "./Componentes/ShoppingCart/Cart/Cart";
import Home from "./Componentes/ProductList/Home/Home";
import Filters from "./Componentes/Filters/Filters";
import AppStyle from "./appStyle";
import productList from "./Assets/ProductList";
import Global from "./globalStyled";

function App() {
  const [minFilter, setMinFilter] = useState(0);
  const [maxFilter, setMaxFilter] = useState(0);
  const [searchFilter, setSearchFilter] = useState("");
  const [cart, setcart] = useState([]);
  const [amount, setAmount] = useState(0);
  const [ordinationFilter, setOrdinationFilter] = useState("Selecione");
  const [filtredList, setFiltredList] = useState([...productList]);
  const [last, setLast] = useState([...productList]);

  useEffect(() => {
    setFiltredList(
      last
        .filter((product) => {
          return minFilter ? product.value >= minFilter : product;
        })
        .filter((product) => {
          return maxFilter ? product.value <= maxFilter : product;
        })
        .filter((product) => {
          return searchFilter
            ? product.name
                .toLocaleLowerCase()
                .includes(searchFilter.toLowerCase())
            : product;
        })
    );
  }, [minFilter, maxFilter, searchFilter]);

  return (
    <Global>
      <AppStyle>
        <Filters
          minFilter={minFilter}
          setMinFilter={setMinFilter}
          maxFilter={maxFilter}
          setMaxFilter={setMaxFilter}
          searchFilter={searchFilter}
          setSearchFilter={setSearchFilter}
        />
        <Home
          cart={cart}
          setcart={setcart}
          amount={amount}
          setAmount={setAmount}
          ordinationFilter={ordinationFilter}
          setOrdinationFilter={setOrdinationFilter}
          filtredList={filtredList}
          setFiltredList={setFiltredList}
          last={last}
          setLast={setLast}
        />
        <Cart
          cart={cart}
          setcart={setcart}
          amount={amount}
          setAmount={setAmount}
        />
      </AppStyle>
    </Global>
  );
}
export default App;
