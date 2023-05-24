import React from 'react'
import HomeStyle from './homeStyle.js'
import ProductCard from '../ProductCard/ProductCard.js'
import productList from '../../../Assets/ProductList.js'

function Home() {

  return (
    <HomeStyle>
      <div className='header-home'><b>Quantidade de produ </b>
        <b>Ordenar por: <select className='ordena-preco' name="select">
          <option value="valor1">Maior preço</option>
          <option value="valor2" selected>Menor preço</option>
        </select></b></div>
      <main className='mainzera'>
        <ProductCard nomeProduto={productList[0].name} valorProduto={productList[0].value} imgProduto={productList[0].imageUrl} />
        <ProductCard nomeProduto={productList[1].name} valorProduto={productList[1].value} imgProduto={productList[1].imageUrl} />
        <ProductCard nomeProduto={productList[2].name} valorProduto={productList[2].value} imgProduto={productList[2].imageUrl} />
        <ProductCard nomeProduto={productList[3].name} valorProduto={productList[3].value} imgProduto={productList[3].imageUrl} />
        <ProductCard nomeProduto={productList[4].name} valorProduto={productList[4].value} imgProduto={productList[4].imageUrl} />
        <ProductCard nomeProduto={productList[5].name} valorProduto={productList[5].value} imgProduto={productList[5].imageUrl} />
        <ProductCard nomeProduto={productList[6].name} valorProduto={productList[6].value} imgProduto={productList[6].imageUrl} />
        <ProductCard nomeProduto={productList[7].name} valorProduto={productList[7].value} imgProduto={productList[7].imageUrl} />
        <ProductCard nomeProduto={productList[8].name} valorProduto={productList[8].value} imgProduto={productList[8].imageUrl} />
        <ProductCard nomeProduto={productList[9].name} valorProduto={productList[9].value} imgProduto={productList[9].imageUrl} />
        <ProductCard nomeProduto={productList[10].name} valorProduto={productList[10].value} imgProduto={productList[10].imageUrl} />
        <ProductCard nomeProduto={productList[11].name} valorProduto={productList[11].value} imgProduto={productList[11].imageUrl} />
        <ProductCard nomeProduto={productList[12].name} valorProduto={productList[12].value} imgProduto={productList[12].imageUrl} />
        <ProductCard nomeProduto={productList[13].name} valorProduto={productList[13].value} imgProduto={productList[13].imageUrl} />
        <ProductCard nomeProduto={productList[14].name} valorProduto={productList[14].value} imgProduto={productList[14].imageUrl} />
      </main>
    </HomeStyle>
  )
}
export default Home
