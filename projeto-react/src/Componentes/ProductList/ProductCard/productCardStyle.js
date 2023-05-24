import styled from "styled-components";


export const ProductCardStyle = styled.div`
  display: grid;
  border: 1px solid black;
  background-color: lightgreen;
  
div img{
  height:38vh;
  width: 100%;
}

div button{
margin-bottom:2vh;
}

.box-pagina-principal{
  border: 1px solid black;
  width: 20vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 65vh;
  margin: 1vh;  
}
.preco{
  color: red;
}
  `

export default ProductCardStyle;