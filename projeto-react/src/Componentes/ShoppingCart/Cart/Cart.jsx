import React from 'react'
import Items from '../Items/Items.jsx'
import CartStyle from './cartSyle.js'

function Cart(props) {

    function removeItem(id) {
        props.cart.map((produto) => {
            if (produto.id === id && produto.quantidade >= 1) {
                produto.quantidade = produto.quantidade - 1;
                props.setcart([...props.cart]);
                props.setAmount(props.amount - produto.value)
            }

            if (produto.quantidade === 0) {
                const novoCarrinho2 = props.cart.filter((produtos) => produtos.quantidade !== 0
                );
                props.setcart(novoCarrinho2)
            }
        });
    }

    return (
        <CartStyle>
            <h2>Cart</h2>
            {props.cart.map((product) => {
                return <Items
                    key={product.id}
                    nome={product.name}
                    valor={product.value * product.quantidade}
                    quantidade={product.quantidade}
                    imagem={product.imageUrl}
                    id={product.id}
                    removeItem={removeItem} />;
            })}
            <p>Valor totaal R$:{props.amount.toFixed(2)} </p>
        </CartStyle>
    )
}
export default Cart;


