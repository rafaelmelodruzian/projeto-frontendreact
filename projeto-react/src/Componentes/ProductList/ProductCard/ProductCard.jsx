import React from 'react'
import { ProductCardStyle } from './productCardStyle';

function ProductCard(props) {

    return (
        <ProductCardStyle>
            <div className="box-pagina-principal">
                <img src={props.imgProduto} alt="Imagem ilustrativa do produto{nomeProduto}" />
                <h4> <p className='produto'>{props.nomeProduto}</p>
                    <p className='preco'>Valor R$: {props.valorProduto}</p></h4>
                <button>Adicionar ao carrinho</button></div>
        </ProductCardStyle>
    )
}

export default ProductCard

