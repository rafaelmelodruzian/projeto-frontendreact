import React from 'react'
import Items from '../Items/Items.jsx'
import CartStyle from './cartSyle.js'

function Cart() {

    return (
        <CartStyle>
            <h2>Cart</h2>
            <Items />
        </CartStyle>

    )
}

export default Cart