import React from 'react'
import HomeStyle from './homeStyle.js'
import ProductCard from '../ProductCard/ProductCard.jsx'
import productList from '../../../Assets/ProductList.jsx'

function Home(props) {
const { handleOrdena } = props;

  return (
    <HomeStyle>
      <div className='header-home'><b>Quantidade de produtos: {productList.length}</b>
        <form>
          <b>Ordenar por: <select className='ordena-preco' name="select" value={props.ordinationFilter} onChange={(e) => handleOrdena(e)}>
            <option>Selecione</option>
            <option>Maior Valor</option>
            <option>Menor Valor</option>
          </select></b></form></div>
      <main className='mainzera'>
        <ProductCard nomeProduto={props.produtos[0].name} valorProduto={props.produtos[0].value} imgProduto={props.produtos[0].imageUrl} />
        <ProductCard nomeProduto={props.produtos[1].name} valorProduto={props.produtos[1].value} imgProduto={props.produtos[1].imageUrl} />
        <ProductCard nomeProduto={props.produtos[2].name} valorProduto={props.produtos[2].value} imgProduto={props.produtos[2].imageUrl} />
        <ProductCard nomeProduto={props.produtos[3].name} valorProduto={props.produtos[3].value} imgProduto={props.produtos[3].imageUrl} />
        <ProductCard nomeProduto={props.produtos[4].name} valorProduto={props.produtos[4].value} imgProduto={props.produtos[4].imageUrl} />
        <ProductCard nomeProduto={props.produtos[5].name} valorProduto={props.produtos[5].value} imgProduto={props.produtos[5].imageUrl} />
        <ProductCard nomeProduto={props.produtos[6].name} valorProduto={props.produtos[6].value} imgProduto={props.produtos[6].imageUrl} />
        <ProductCard nomeProduto={props.produtos[7].name} valorProduto={props.produtos[7].value} imgProduto={props.produtos[7].imageUrl} />
        <ProductCard nomeProduto={props.produtos[8].name} valorProduto={props.produtos[8].value} imgProduto={props.produtos[8].imageUrl} />
        <ProductCard nomeProduto={props.produtos[9].name} valorProduto={props.produtos[9].value} imgProduto={props.produtos[9].imageUrl} />
        <ProductCard nomeProduto={props.produtos[10].name} valorProduto={props.produtos[10].value} imgProduto={props.produtos[10].imageUrl} />
        <ProductCard nomeProduto={props.produtos[11].name} valorProduto={props.produtos[11].value} imgProduto={props.produtos[11].imageUrl} />
        <ProductCard nomeProduto={props.produtos[12].name} valorProduto={props.produtos[12].value} imgProduto={props.produtos[12].imageUrl} />
        <ProductCard nomeProduto={props.produtos[13].name} valorProduto={props.produtos[13].value} imgProduto={props.produtos[13].imageUrl} />
        <ProductCard nomeProduto={props.produtos[14].name} valorProduto={props.produtos[14].value} imgProduto={props.produtos[14].imageUrl} />
      </main>
    </HomeStyle>
  )
}
export default Home;



