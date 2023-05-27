// export default function Home({addToCart,productList, orderFilter, setOrderFilter, cart, setCart, amount, setAmount, minFilter, maxFilter, searchFilter}){

//     const handleOrderSearch = (e) => {
//         setOrderFilter(e.target.value);
//       };

//     return(
//     const result = 
//       productList
//       .filter((valorMinimo) => {
//         return minFilter ? valorMinimo.value >= minFilter : productList
//       })
//       .filter((valorMaximo) => {
//         return maxFilter ? valorMaximo.value <= maxFilter : productList
//       })
//       .filter((busca) => {
//         return busca.name.toLowerCase().includes(searchFilter.toLowerCase());
//       })
//       .sort((a, b) => {
//           if (orderFilter === "c") {
//             return a.name >= b.name ? 1 : -1;
//           } else if (orderFilter === "d") {
//             return a.name <= b.name ? 1 : -1;
//           } else if (orderFilter === "e") {
//             return a.value >= b.value ? 1: -1;
//           } else if (orderFilter === "f") {
//             return a.value <= b.value ? 1: -1;
//           } return productList;
//         })
//         .map((product) => {
//           return (
//             <ProductCard
//               key={product.id}
//               product={product}
//               addToCart={addToCart}
//             />
//           );
//         })

//       return(
//         <>
//         <HomeStyled>
//         <HomeStyled> 
//         <div className="header">
//         <h4>Quantidade de produtos:{productList.length}</h4>
//         <h4>Quantidade de produtos: {result.length}</h4>
//         <select onChange={handleOrderSearch} value={orderFilter}>
//         <option value="">Ordenar</option>
//         <option value="c">A - Z</option>
// export default function Home({productList, orderFilter, setOrderFilter, cart, se
//         </select>
//         </div>
//         <div className="cartao">
//         {productList
//         .filter((valorMinimo) => {
//           return minFilter ? valorMinimo.value >= minFilter : productList
//         })
//         .filter((valorMaximo) => {
//           return maxFilter ? valorMaximo.value <= maxFilter : productList
//         })
//         .filter((busca) => {
//           return busca.name.toLowerCase().includes(searchFilter.toLowerCase());
//         })
//         .sort((a, b) => {;
//             if (orderFilter === "c") {
//               return a.name >= b.name ? 1 : -1;
//             } else if (orderFilter === "d") {
//               return a.name <= b.name ? 1 : -1;
//             } else if (orderFilter === "e") {
//               return a.value >= b.value ? 1: -1;
//             } else if (orderFilter === "f") {
//               return a.value <= b.value ? 1: -1;
//             } return productList;
//           })
//           .map((productList) => {
//             return (
//               <ProductCard
//                 key={productList.id}
//                 productList={productList}
//               />
//             );
//           })}
//         {result}
//         </div>



// export default function ProductCard({productList}){
//     return(
//         <>
//         <StyledProduct>
//         <img src="https://picsum.photos/300/335?a="/>
//         <img src={product.imageUrl}/>
//         <div>
//         <p>{productList.name}</p>
//         <p>{productList.value}</p>
//         <p>{product.name}</p>
//         <div className="sidebutton">
//         <p>R${product.value}</p>

//         <button>Adicionar ao Carrinho</button>
//         <button onClick={()=>addToCart(product)}> <img src={rocket} title="Adicionar o carrinho"/> </button>
//         </div>
//         </div>
//         </StyledProduct>
//         </>



// //////////////////

// import React from "react";
// import React, { useEffect } from "react";
// import Items from "../Items/Items"
// import { CartStyled } from "./CartStyle";
// import { render } from "@testing-library/react";


// export default function Cart({ productList, cart, setCart, amount, setAmount}){

//     const onChangeCart = (event) => {
//         setCart(event.target.value);
//     };
//     const removeItem = (id)=>{
//         cart.map((product)=>{
//             if(product.id === id && product.quantity >= 1){
//                 product.quantity = product.quantity-1
//                 setCart([...cart])
//             }
//             if(product.quantity === 0){
//                 const newCart = cart.filter(productRemoved => productRemoved.quantity !== 0)
//                 setCart(newCart)
//             }
//             if(cart.length === 1){
//                 localStorage.removeItem("cartKey")
//             }

//         })
//     }

//     const adicionaItem = () => {
//         const amount = [...cart, setAmount];
//         setLista(novaLista);
//         setNovaTarefa("");}
//     useEffect(()=>{
//         let newValue = 0
//         console.log(cart)
//         cart.forEach((product)=>{
//             newValue += product.value * product.quantity
//         })
//         setAmount(newValue)
//     }, [cart])

//     useEffect(() => {
//         if(cart.length>0){
//             localStorage.setItem("cartKey",JSON.stringify(cart))
//         }
//     }, [cart])

//     useEffect(()=>{
//         const restoredCart = localStorage.getItem("cartKey");
//         if(restoredCart){
//             setCart(JSON.parse(restoredCart));
//         }
//     }, [])


//     const renderItemsOnCart = cart.map((product)=>{
//         return <Items
//         key={product.id} 
//         name={product.name}
//         value={product.value * product.quantity}
//         quantity={product.quantity}
//         removeItem={removeItem}
//         id={product.id}/>
//     })

//     return(
//         <>
//         <CartStyled>
//         <h2>Cart</h2>
//         <Items/>
//         {renderItemsOnCart}
//         <br/>
//         <p> Total: R${amount.toFixed(2)}</p>
//         </CartStyled>
//         </>
//     )




//     const cartItems = cart.map((product)=>{
//         return <Items
//         key={product.id} 
//         name={product.name}
//         value={product.value * product.quantity}
//         quantity={product.quantity}
//         removeItem={removeItem}
//         id={product.id}/>
//     })




    props.final.sort((a, b) => {
      if (props.ordinationFilter === "Decrescente") {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
      } else if (props.ordinationFilter === "Crescente") {
        if (a.name > b.name) {
          return -1;
        }
        if (a.name < b.name) {
          return 1;
        }
      }
    })