import React from 'react'
import HomeStyle from './homeStyle.js'
import ProductCard from '../ProductCard/ProductCard.js'

function Home() {
  return (
    <HomeStyle>
    <div className='header-home'><b>Quantidade de produtos</b>
    <>Ordenar preço</></div>
    <main>
    <ProductCard/>
    <ProductCard/>
    <ProductCard/>
    </main>
    </HomeStyle>
  )
}

export default Home
