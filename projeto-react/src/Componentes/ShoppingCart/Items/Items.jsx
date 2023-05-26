import React from 'react'
import ItemsStyle from './itemsStyle'

function Items({nome, valor, quantidade, id, removeItem } ) {

  return (
    <>
    <ItemsStyle>
      <p>
     <span>{nome}  </span><br/>
     <span>Quantidade: {quantidade}</span> <br/>
     <span>Valor: {valor}</span><br/>
     <button onClick={() => removeItem(id)}> Remover produto </button>
     </p>
    </ItemsStyle>
    </>
  )
}

export default Items
