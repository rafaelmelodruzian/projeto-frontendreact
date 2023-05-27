import React, { useEffect, useState } from "react";
import Cart from "./Componentes/ShoppingCart/Cart/Cart";
import Home from "./Componentes/ProductList/Home/Home";
import Filters from "./Componentes/Filters/Filters";
import AppStyle from "./appStyle";
import productList from "./Assets/ProductList";

function App() {
  const [minFilter, setMinFilter] = useState(0);
  const [maxFilter, setMaxFilter] = useState(0);
  const [searchFilter, setSearchFilter] = useState("");
  const [cart, setcart] = useState([]);
  const [amount, setAmount] = useState(0);
  const [ordinationFilter, setOrdinationFilter] = useState("Selecione");
  const [filtredList, setFiltredList] = useState([...productList]);
  const [final, setFinal] = useState([...productList]);

  useEffect(() => {
    setFiltredList(
      final
        .filter((produto) => {
          return minFilter ? produto.value >= minFilter : produto;
        })
        .filter((produto) => {
          return maxFilter ? produto.value <= maxFilter : produto;
        })
        .filter((produto) => {
          return searchFilter
            ? produto.name
                .toLocaleLowerCase()
                .includes(searchFilter.toLocaleLowerCase())
            : produto;
        })
    );
  }, [minFilter, maxFilter, searchFilter]);

  const handleMin = (e) => {
    if (e.target.value < 0) {
      setMinFilter(0);
      console.log(e.target.value);
      alert("Menor valor possivel é 0");
    } else {
      setMinFilter(e.target.value);
      console.log(e.target.value);
    }
  };

  const handleMax = (e) => {
    if (e.target.value < 0) {
      setMaxFilter(100);
      console.log(e.target.value);
      alert("Menor valor possivel é 0");
    } else {
      setMaxFilter(e.target.value);
      console.log(e.target.value);
    }
  };

  const handleSearch = (e) => {
    setSearchFilter(e.target.value);
    console.log(e.target.value);
  };

  return (
    <AppStyle>
      <Filters
        minFilter={minFilter}
        setMinFilter={setMinFilter}
        maxFilter={maxFilter}
        setMaxFilter={setMaxFilter}
        searchFilter={searchFilter}
        setSearchFilter={setSearchFilter}
        handleSearch={handleSearch}
        handleMin={handleMin}
        handleMax={handleMax}
        set={setFinal}
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
        final={final}
        setFinal={setFinal}
      />
      <Cart
        cart={cart}
        setcart={setcart}
        amount={amount}
        setAmount={setAmount}
      />
    </AppStyle>
  );
}
export default App;
