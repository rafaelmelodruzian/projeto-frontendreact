import React from 'react'
import ItemsStyle from './itemsStyle'

function Items() {
    const quantidade = 3
    const nome = "produto"
    const valor = "199,00"

  return (
    <ItemsStyle>
    {quantidade}x {nome} <button>Remover</button><br/>
    <p>Valor total R$: {valor}</p>
    </ItemsStyle>
   
  )
}

export default Items
