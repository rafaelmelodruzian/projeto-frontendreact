import React from "react";
import { ProductCardStyle } from "./productCardStyle";

function ProductCard({ product, nomeProduto, valorProduto, imgProduto, id }) {
  return (
    <ProductCardStyle>
      <div className="box-pagina-principal">
        <img src={imgProduto} alt="Imagem ilustrativa" />
        <span>
          <p className="produto">
            <b>{nomeProduto}</b>
          </p>
          <p className="preco">
            <b>R$: {valorProduto.toFixed(2)}</b>
          </p>
        </span>
        <button onClick={() => product(id)}>Adicionar ao carrinho</button>
      </div>
    </ProductCardStyle>
  );
}

export default ProductCard;
