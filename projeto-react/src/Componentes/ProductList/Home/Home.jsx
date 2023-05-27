import React from "react";
import HomeStyle from "./homeStyle.js";
import ProductCard from "../ProductCard/ProductCard.jsx";
import { useEffect } from "react";

function Home(props) {
  const renderProducts = props.filtredList.map((item) => {
    return (
      <ProductCard
        product={addToCart}
        key={item.id}
        nomeProduto={item.name}
        valorProduto={item.value}
        imgProduto={item.imageUrl}
        id={item}
      />
    );
  });

  function addToCart(id) {
    const newProduct = props.cart.find((productCB) => id.id === productCB.id);
    const valorTotal = props.amount + id.value;
    if (newProduct === undefined) {
      id = { ...id, quantidade: 1 };
      props.setAmount(valorTotal);
      props.setcart([...props.cart, id]);
    } else {
      props.setAmount(valorTotal);
      const novoCarrinho = props.cart.map((produto) => {
        if (produto.id === newProduct.id) {
          return { ...newProduct, quantidade: produto.quantidade + 1 };
        } else {
          return produto;
        }
      });
      props.setcart(novoCarrinho);
    }
  }

  useEffect(() => {
    props.filtredList.sort((a, b) => {
      if (props.ordinationFilter === "Decrescente") {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
      } else if (props.ordinationFilter === "Crescente") {
        if (a.name > b.name) {
          return -1;
        }
        if (a.name < b.name) {
          return 1;
        }
      }
    });
    props.final.sort((a, b) => {
      if (props.ordinationFilter === "Decrescente") {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
      } else if (props.ordinationFilter === "Crescente") {
        if (a.name > b.name) {
          return -1;
        }
        if (a.name < b.name) {
          return 1;
        }
      }
    });
    props.setFinal([...props.final]);
    props.setFiltredList([...props.filtredList]);
  }, [props.ordinationFilter]);

  return (
    <HomeStyle>
      <div className="header-home">
        <b>Quantidade de produtos: {props.filtredList.length}</b>
        <form>
          <b>
            Ordenar por:{" "}
            <select
              className="ordena-preco"
              name="select"
              value={props.ordinationFilter}
              onChange={(e) => props.setOrdinationFilter(e.target.value)}
            >
              <option>Selecione</option>
              <option>Decrescente</option>
              <option>Crescente</option>
            </select>
          </b>
        </form>
      </div>
      <main className="mainzera">{renderProducts}</main>
    </HomeStyle>
  );
}
export default Home;
