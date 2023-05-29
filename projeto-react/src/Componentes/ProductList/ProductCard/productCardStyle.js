import styled from "styled-components";

export const ProductCardStyle = styled.div`
  display: grid;
  div img {
    height: 32vh;
    width: 93%;
    border-radius: 10px;
    border: solid 2px white;
  }
  div button {
    margin-bottom: 2vh;
  }
  .box-pagina-principal {
    border: 1px solid white;
    border-radius: 10px;
    width: 20vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 65vh;
    margin: 1vh;
    color: white;
    font-size: 25px;
  }
  .produto,
  .preco {
    color: white;
    display: flex;
    justify-content: center;
  }
  .box-pagina-principal {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  button {
    border-radius: 15px;
    background-color: lightgreen;
    border: 2px solid white;
  }
  button:hover {
    background-color: purple;
    border: 2px solid white;
    border-radius: 10px;
  }
  button:active {
    background-color: white;
    border: 2px solid orangered;
    border-radius: 10px;
  }
`;
export default ProductCardStyle;
