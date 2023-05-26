import React from 'react'
import HomeStyle from './homeStyle.js'
import ProductCard from '../ProductCard/ProductCard.jsx'
import productList from '../../../Assets/ProductList.jsx'

function Home(props) {
  const { handleOrdena } = props;

  const renderProducts = productList.map((item) => {
    return (<ProductCard product={addToCart} key={item.id} nomeProduto={item.name} valorProduto={item.value} imgProduto={item.imageUrl} id={item} />)
  });

  function addToCart(id) {
    const newProduct = props.cart.find((productCB) => id.id === productCB.id);
    const valorTotal = props.amount + id.value
    if (newProduct === undefined) {
      id = { ...id, quantidade: 1 };


      props.setAmount(valorTotal)
      console.log(valorTotal)

      props.setcart([...props.cart, id])
    } else {
      props.setAmount(valorTotal)
      console.log(valorTotal)

      const novoCarrinho = props.cart.map((produto) => {
        if (produto.id === newProduct.id) {
          return { ...newProduct, quantidade: produto.quantidade + 1 }
        } else {
          return produto
        }
      });
      props.setcart(novoCarrinho)
    }

  }
  console.log("Carrinho:",props.cart, "Itens:", props.cart.length)


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
        {renderProducts}
      </main>
    </HomeStyle>
  )
}
export default Home;



