import styled from "styled-components";

export const HomeStyle = styled.div`
  display: grid;
  .header-home {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 1vw;
    color: yellowgreen;
    height: 6vh;
    margin-top: 3vh;
  }
  main {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: 4;
    margin: 1vh 0;
  }
  .mainzera {
    display: flex;
    flex-wrap: wrap;
  }
  .ordena-preco {
    border-radius: 15px;
    background-color: yellowgreen;
    border: 2px solid white;
  }
`;
export default HomeStyle;
