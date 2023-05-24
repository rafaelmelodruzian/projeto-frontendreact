import React from 'react'
import { ProductCardStyle } from './productCardStyle';

function ProductCard() {
    const nomeProduto = "Produto da hora";
    const imagemProduto = `https://picsum.photos/400/400?a=1`
    const valorProduto = "199,00"



    return (
        <ProductCardStyle>
            <div className="box-pagina-principal">
                <img src={imagemProduto} alt="Imagem ilustrativa do produto{nomeProduto}" />
                <h4> <p className='produto'>{nomeProduto}</p>
                <p className='preco'>Valor R$: {valorProduto}</p></h4>
                <button>Adicionar ao carrinho</button>
            </div>
        </ProductCardStyle>
    )
}

export default ProductCard

